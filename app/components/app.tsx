import { useState, useEffect } from "react";
import { Photo as PhotoType } from "../lib/data";
import Photo from "./photo";
import Menu from "./menu";
import Description from "./description";
import { BsChevronCompactRight, BsChevronCompactLeft } from "react-icons/bs";

interface AppProps {
  photos: PhotoType[];
  topic?: string;
}

const App = ({ photos, topic }: AppProps) => {
  const [photo, setPhoto] = useState<PhotoType>({url: ""} as PhotoType);
  const [idx, setIdx] = useState(0);

  const nextPhoto = () => {
    const newIdx = idx === photos.length - 1 ? 0 : idx + 1;
    setIdx(newIdx);
    setPhoto(photos[newIdx]);
  };

  const prevPhoto = () => {
    const newIdx = idx === 0 ? photos.length - 1 : idx - 1;
    setIdx(newIdx);
    setPhoto(photos[newIdx]);
  };

  useEffect( () => {
    setPhoto(photos[0])
  }, [photos])

  return (
    <div>
      <Menu topic={topic} />
      <div id="main">
        <Photo url={photo.url} />
        <div className="photoButton" id="buttonPrev" onClick={prevPhoto}>
          <BsChevronCompactLeft />
        </div>
        <div className="photoButton" id="buttonNext" onClick={nextPhoto}>
          <BsChevronCompactRight />
        </div>
      </div>
      <Description />
    </div>
  );
};

export default App;
