const buildingFile = 'buildings.csv'
const bathroomFiles = ['family-bathrooms.csv']

const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

function toTitleCase(str) {
    return str.replace(
        /([^\W_]+[^\s-]*) */g,
        function (txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        }
    );
}

async function main() {
    const fs = require('fs')
    const path = require('path')
    const { parse } = require('csv-parse')
    const options = { bom: true, relax_column_count: true }
    // Buildings First

    function buildings() {
        fs.readFile(path.join(__dirname, 'building-list', buildingFile), 'utf-8', (err, data) => {
            if (err) {
                console.error(err)
                return
            }

            parse(data, options, (err, records) => {
                if (err) {
                    console.error(err)
                    return
                }
                records.map(async (record) => {

                    const building = await prisma.buildings.create({
                        data: {
                            code: record[0],
                            name: toTitleCase(record[1])
                        },
                    })
                })
            })
        })
    }

    // Then Bathrooms
    function addBathrooms(fileName, gender) {
        const familyPath = path.join(__dirname, 'bathroom-lists', fileName)
        fs.readFile(familyPath, 'utf-8', (err, data) => {
            if (err) {
                console.error(err)
                return
            }
            parse(data, options, (err, records) => {
                if (err) {
                    console.error(err)
                    return
                }
                records.splice(0, 3)
                records.map(async bathroom => {
                    const { id, name } = await prisma.buildings.findFirst({
                        where: {
                            code: bathroom[0]
                        }
                    })

                    const match = bathroom[2].match(/^(\d+).*$/)
                    let floorNum
                    if (match && match.length > 1) {
                        floorNum = Math.floor(parseInt(match[1]) / 1000)
                    } else {
                        floorNum = -1
                    }

                    let bathroomName
                    if (floorNum === -1) { bathroomName = `${name} Basement` }
                    else if (floorNum === 0) { bathroomName = `${name} Ground Floor` }
                    else if (floorNum === 1) { bathroomName = `${name} First Floor` }
                    else if (floorNum === 2) { bathroomName = `${name} Second Floor` }
                    else if (floorNum === 3) { bathroomName = `${name} Third Floor` }
                    else if (floorNum === 4) { bathroomName = `${name} Fouth Floor` }
                    else if (floorNum === 5) { bathroomName = `${name} Fifth Floor` }
                    else if (floorNum === 6) { bathroomName = `${name} Sixth Floor` }
                    else if (floorNum === 7) { bathroomName = `${name} Seventh Floor` }
                    else if (floorNum === 8) { bathroomName = `${name} Eighth Floor` }


                    const entry = await prisma.bathrooms.create({
                        data: {
                            roomnum: bathroom[2],
                            gender: gender,
                            buildingId: id,
                            name: bathroomName,
                        }
                    })
                })
            })
        })
    }

    // buildings()
    // addBathrooms('family-bathrooms.csv', 'Family')
    // addBathrooms('mens-bathrooms.csv', 'Male')
    // addBathrooms('womens-bathrooms.csv', 'Female')
    // addBathrooms('gender-neutral-bathrooms.csv', 'Neutral')

}

main()
    .catch((e) => {
        console.error(e)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })