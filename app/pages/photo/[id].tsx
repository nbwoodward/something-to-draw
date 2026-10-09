import Page from "../../components/page";
import { Photo as PhotoType } from "../../lib/data";
import { getPhoto, getPhotos } from "../../lib/photoProvider/unsplash";

interface PhotoPageProps {
  photos: PhotoType[];
  photo: PhotoType;
}

const PhotoPage = ({ photos, photo }: PhotoPageProps) => (
  <Page photos={photos} photo={photo} />
);

export async function getStaticPaths() {
  return { paths: [], fallback: "blocking" };
}

export async function getStaticProps(context: any) {
  const id = context?.params?.id;
  const [photo, photos] = await Promise.all([getPhoto(id), getPhotos()]);
  if (!photo) return { notFound: true };

  return {
    props: { photos, photo },
    revalidate: 300,
  };
}

export default PhotoPage;
