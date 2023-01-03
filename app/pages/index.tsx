import Head from 'next/head'
import App from '../components/app'
import { Inter } from '@next/font/google'
import { Photo as PhotoType } from '../lib/data'
import {getPhotos} from '../lib/photoProvider/unsplash'

const inter = Inter({ subsets: ['latin'] })

interface HomeProps {
  photos: PhotoType[]
}

export default ({photos}: HomeProps) => {
  return (
    <>
      <Head>
        <title>Something To Draw - Random Pictures to Draw</title>
        <meta name="description" content="An endless stream of pictures to inspire your next drawing or painting" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={inter.className}>
        <App photos={photos} />
      </main>
    </>
  )
}

export async function getStaticProps() {
  const photos = await getPhotos()

  return {
    props: { photos }, // will be passed to the page component as props
    revalidate: 300,
  }
}
