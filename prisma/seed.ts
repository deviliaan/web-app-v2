import {PrismaClient} from '@prisma/client'
const prisma = new PrismaClient()
async function main() {
    console.log('start seeding...')
    const anime = await prisma.anime.create({
        data: {
            title: 'Naruto',
            episodes: 400,
            year: 2002,
            plot: 'Something....',
            genres: JSON.stringify(['action','rommance','shonnen']),
            type: 'TV',
            seasons: {
                create: {
                    season_number: 1,
                    episodes: {
                        create: {
                            embed_url: 'Something',
                            label: 'ahhhh',
                            episode_number: 1
                        }
                    }
                }
            }
        }
    })
    console.log('created naruto with season 1 and episode 1')
}
main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })