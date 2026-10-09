import Page from "../../components/page";
import { Photo as PhotoType, allTopics } from "../../lib/data";
import { getPhotos } from "../../lib/photoProvider/unsplash";

interface TopicProps {
  photos: PhotoType[];
  topic: string;
}

const Topic = ({ photos, topic }: TopicProps) => (
  <Page photos={photos} topic={topic} />
);

export async function getStaticPaths() {
  const paths = allTopics.map((topic) => ({ params: { topic: topic.slug } }));
  return { paths, fallback: false };
}

export async function getStaticProps(context: any) {
  const topic = context?.params?.topic;
  const photos = await getPhotos({ topic });

  return {
    props: { photos, topic },
    revalidate: 300,
  };
}

export default Topic;
