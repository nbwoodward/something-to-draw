import Head from "next/head";
import App from "../components/app";
import { Inter } from "@next/font/google";
import { Photo as PhotoType } from "../lib/data";
import { getPhotos } from "../lib/photoProvider/unsplash";

const inter = Inter({ subsets: ["latin"] });

const allTopics = [
  "wallpapers",
  "3d-renders",
  "travel",
  "nature",
  "street-photography",
  "experimental",
  "textures-patterns",
  "animals",
  "architecture-interior",
  "fashion-beauty",
  "film",
  "food-drink",
  "people",
  "spirituality",
  "business-work",
  "athletics",
  "health",
  "current-events",
  "arts-culture",
];

interface TopicProps {
  photos: PhotoType[];
  topic: string;
}

export default ({ photos, topic }: TopicProps) => {
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
        <App photos={photos} />
      </main>
    </>
  );
};

export async function getStaticPaths() {
  const paths = allTopics.map((topic) => ({ params: { topic: topic } }));
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
