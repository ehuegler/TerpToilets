import styles from '../../styles/components/Bathroom.module.scss'
import Head from 'next/head'
import ErrorPage from 'next/error'
import Header from '../../components/Header'
import Main from '../../components/Main'
import prisma from '../../lib/prisma'
import { buildUrl } from 'cloudinary-build-url'
import { cloudName, getThumbnailId } from '../../lib/cloudinary'
import Image from 'next/image'
import Review from '../../components/Review'
import Callout from '../../components/Callout'
import { Row, Col } from 'react-bootstrap'
import { Rating } from 'react-simple-star-rating'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'
import { BiMale, BiFemale } from 'react-icons/bi'
import { MdFamilyRestroom } from 'react-icons/md'
import { FaToilet, FaTimes, FaShower } from 'react-icons/fa'
import { useState } from 'react'

export async function getServerSideProps(context) {

    const slug = context.query.bid
    let id
    try {
        id = parseInt(slug)
    }
    catch {
        return { props: { error: true } }
    }

    let order;
    if (context.query.order === 'lowtohigh') {
        order = 'asc'
    } else {
        order = 'desc'
    }

    const bathroom = await prisma.bathrooms.findUnique({
        where: {
            id: id,
        },
        include: {
            reviews: {
                orderBy: {
                    rating: order,
                },
                include: {
                    pictures: true,
                }
            },
            pictures: true,
            building: true,
        },
    })

    return bathroom ? { props: { bathroom } } : { props: { error: true } }
}


export default function Bathroom({ bathroom, error }) {

    if (error) {
        console.log("hello")
        return (<ErrorPage statusCode={404} />)
    }

    const [reviews, setReviews] = useState(bathroom.reviews)

    bathroom.numRatings = bathroom.reviews.length
    bathroom.rating = bathroom.reviews.reduce((a, x) => (a + x.rating), 0) / bathroom.numRatings
    bathroom.rating = (Math.round(bathroom.rating * 10) / 10).toString().padEnd(3, '.0')

    const url = buildUrl(getThumbnailId(bathroom.pictures), {
        cloud: {
            cloudName: cloudName,
        },
        transformations: {
            resize: {
                width: 1000,
                height: 1000,
                type: 'fill',
            }
        },
    })

    const gender = () => {
        switch (bathroom.gender) {
            case 'Male':
                return (
                    <Row><Col xs={3} className={styles.feature}><BiMale /></Col>Male Restroom</Row>
                )

            case 'Female':
                return (
                    <Row><Col xs={3} className={styles.feature}><BiFemale /></Col>Female Restroom</Row>
                )

            case 'Neutral':
                return (
                    <Row><Col xs={3} className={styles.feature}><BiMale />/<BiFemale /></Col>Gender Neutral Restoom</Row>
                )

            case 'Family':
                return (
                    <Row><Col xs={3} className={styles.feature}><MdFamilyRestroom /></Col>Family Restoom</Row>
                )

            default:
                return <></>
        }
    }


    return (
        <>
            <Head>
                <title>{bathroom.name}</title>
            </Head>

            <Header />

            <Main>

                <Row className={styles.info}>
                    <Col sm={4}>
                        <div className={styles.thumbnail}>
                            <Image
                                src={url}
                                height="300"
                                width="300"
                                alt={`${bathroom.name} picture`}
                            />
                        </div>
                    </Col>
                    <Col>
                        <h1>{bathroom.name}</h1>
                        <div className={styles.rating_line}>
                            {bathroom.rating}
                            &nbsp;
                            <Rating
                                initialValue={bathroom.rating}
                                readonly
                                fullIcon={<AiFillStar />}
                                emptyIcon={<AiOutlineStar />}
                                className={styles.stars}
                            />
                            &nbsp;
                            ({bathroom.numRatings})
                            &middot;&nbsp;
                            {bathroom.building.abrev || ''}&nbsp;{bathroom.roomnum}
                        </div>
                        <div className={styles.features}>
                            {gender()}
                            {bathroom.stalls ? <Row><Col xs={3} className={styles.feature}><FaToilet /><FaTimes /> {bathroom.stalls}</Col>Toilet Stalls </Row> : ''}
                            {bathroom.urinals ? <Row><Col xs={3} className={styles.feature}><FaToilet /><FaTimes /> {bathroom.urinals}</Col>Urinals </Row> : ''}
                            {bathroom.shower && <Row><Col xs={3} className={styles.feature}><FaShower /></Col>Has a Shower</Row>}
                        </div>
                        <div>
                            {bathroom.description}
                        </div>
                    </Col>
                </Row>


                <Callout>
                    <h3>Reviews:</h3>
                    <div onClick={() => { console.log(reviews); setReviews([...reviews.reverse()]) }}>order</div>
                    {reviews.map((review, i) => (
                        <Review review={review} key={i} roomName={bathroom.name} />
                    ))}
                </Callout>
            </Main>
        </>
    )
}