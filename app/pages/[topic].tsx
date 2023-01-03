import Head from "next/head";
import App from "../components/app";
import { Inter } from "@next/font/google";
import { Photo as PhotoType } from "../lib/data";
import { getPhotos } from "../lib/photoProvider/unsplash";
import {allTopics} from '../lib/data'

const inter = Inter({ subsets: ["latin"] });

interface TopicProps {
  photos: PhotoType[];
  topic: string;
}

const Topic = ({ photos, topic }: TopicProps) => {
  const title = `Something To Draw - random pictures of ${topic} to draw`;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta
          name="description"
          content="An endless stream of pictures to inspire your next drawing or painting"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={inter.className}>
        <App photos={photos} topic={topic} />
      </main>
    </>
  );
};

export async function getStaticPaths() {
  const paths = allTopics.map((topic) => ({ params: { topic: topic.slug } }));
  return {
    paths: paths,
    fallback: false, // can also be true or 'blocking'
  };
}

export async function getStaticProps(context: any) {
  const topic = context?.params?.topic;
  const photos = await getPhotos({ topic });

  return {
    props: { photos, topic }, // will be passed to the page component as props
    revalidate: 300,
  };
}

export default Topic;
