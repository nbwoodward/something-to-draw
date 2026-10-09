import Page from "../components/page";
import { Photo as PhotoType } from "../lib/data";
import { getPhotos } from "../lib/photoProvider/unsplash";

interface HomeProps {
  photos: PhotoType[];
}

const Index = ({ photos }: HomeProps) => <Page photos={photos} />;

export async function getStaticProps() {
  const photos = await getPhotos();

  return {
    props: { photos },
    revalidate: 300,
  };
}

export default Index;
