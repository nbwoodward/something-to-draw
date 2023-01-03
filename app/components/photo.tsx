type PhotoProps = {
  url: string;
};

const Photo = (props: PhotoProps) => {
  const url = props.url;

  const style = {
    height: "100%",
    width: "100%",
    backgroundImage: `url(${url})`,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
  };

  return <div style={style}></div>;
};

export default Photo;
