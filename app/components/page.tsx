import Head from "next/head";
import { Inter } from "@next/font/google";
import App from "./app";
import { Photo as PhotoType } from "../lib/data";

const inter = Inter({ subsets: ["latin"] });

interface PageProps {
  photos: PhotoType[];
  topic?: string;
  photo?: PhotoType | null;
}

const Page = ({ photos, topic, photo }: PageProps) => {
  const title = topic
    ? `Something To Draw - random pictures of ${topic} to draw`
    : "Something To Draw - Random Pictures to Draw";
  const description =
    "An endless stream of pictures to inspire your next drawing or painting";

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        {photo?.url && <meta property="og:image" content={photo.url} />}
        {photo?.url && <meta name="twitter:card" content="summary_large_image" />}
      </Head>
      <main className={inter.className}>
        <App photos={photos} topic={topic} initialPhoto={photo} />
      </main>
    </>
  );
};

export default Page;
