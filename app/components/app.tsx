import { useState, useEffect } from "react";
import { Photo as PhotoType } from "../lib/data";
import Photo from "./photo";
import Menu from "./menu";
import Description from "./description";
import { BsChevronCompactRight, BsChevronCompactLeft } from "react-icons/bs";

interface AppProps {
  photos: PhotoType[];
  topic?: string;
  initialPhoto?: PhotoType | null;
}

const buildList = (photos: PhotoType[], initialPhoto?: PhotoType | null) =>
  initialPhoto
    ? [initialPhoto, ...photos.filter((p) => p.id !== initialPhoto.id)]
    : photos;

const photoPath = (id: string, topic?: string) =>
  topic ? `/${topic}/${id}` : `/photo/${id}`;

const App = ({ photos, topic, initialPhoto }: AppProps) => {
  const [list, setList] = useState<PhotoType[]>(() =>
    buildList(photos, initialPhoto)
  );
  const [idx, setIdx] = useState(0);
  const photo = list[idx] || ({ url: "" } as PhotoType);

  useEffect(() => {
    setList(buildList(photos, initialPhoto));
    setIdx(0);
  }, [photos, initialPhoto]);

  const goTo = (newIdx: number) => {
    setIdx(newIdx);
    const id = list[newIdx]?.id;
    if (id) {
      // Keep Next's history state so back/forward keep working
      window.history.replaceState(window.history.state, "", photoPath(id, topic));
    }
  };

  const nextPhoto = () => goTo(idx === list.length - 1 ? 0 : idx + 1);
  const prevPhoto = () => goTo(idx === 0 ? list.length - 1 : idx - 1);

  return (
    <div>
      <Menu topic={topic} photoId={photo.id} />
      <div id="main">
        <Photo url={photo.url} />
        <div className="photoButton" id="buttonPrev" onClick={prevPhoto}>
          <BsChevronCompactLeft />
        </div>
        <div className="photoButton" id="buttonNext" onClick={nextPhoto}>
          <BsChevronCompactRight />
        </div>
      </div>
      <Description topic={topic} />
    </div>
  );
};

export default App;
