import Page from "../../components/page";
import { Photo as PhotoType, allTopics } from "../../lib/data";
import { getPhoto, getPhotos } from "../../lib/photoProvider/unsplash";

interface TopicPhotoProps {
  photos: PhotoType[];
  topic: string;
  photo: PhotoType;
}

const TopicPhoto = ({ photos, topic, photo }: TopicPhotoProps) => (
  <Page photos={photos} topic={topic} photo={photo} />
);

export async function getStaticPaths() {
  return { paths: [], fallback: "blocking" };
}

export async function getStaticProps(context: any) {
  const { topic, id } = context?.params ?? {};
  if (!allTopics.some((t) => t.slug === topic)) return { notFound: true };

  const [photo, photos] = await Promise.all([
    getPhoto(id),
    getPhotos({ topic }),
  ]);
  if (!photo) return { notFound: true };

  return {
    props: { photos, topic, photo },
    revalidate: 300,
  };
}

export default TopicPhoto;
