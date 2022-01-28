import Head from 'next/head';
import Header from '../components/Header';
import Main from '../components/Main';


export default function Review() {

  const submit = (event) => {
    event.preventDefault()
    console.log(event.target.name.value)
  }

  return (
    <>
      <Head>

      </Head>

      {/* <Header /> */}

      <Main>
        Leave a review

        <form onSubmit={submit}
          className='flex flex-col'
        >

          <div
            className='my-2 flex flex-col'
          >
            <label htmlFor='name'>Name</label>
            <input type='text' id='name' autoComplete='name' className='rounded p-1' />
          </div>

          <div
            className='my-2 flex flex-col'
          >
            <label htmlFor='name'>Message</label>
            <textarea type='text' id='name' autoComplete='name' className='rounded p-1' />
          </div>

          <div
            className='my-2 flex flex-col'
          >
            <label htmlFor='name'>Name</label>
            <input type='text' id='name' autoComplete='name' className='rounded p-1' />
          </div>

          <button type='submit' 
            className='flex'
          >
            <div
              className='bg-white drop-shadow-md rounded py-2 px-4'
            >
              Submit Review
            </div>
          </button>

        </form>

      </Main>
    </>
  )
}