import { ProviderParams } from "./provider";
import { Photo } from "../data";
import axios from "axios";

interface PhotoRespItem {
  urls: {
    regular: string;
  };
  user: {
    name: string;
    links: {
      html: string;
    };
  };
}

const TOPIC_MAP = {
  wallpapers: "bo8jQKTaE0Y",
  "3d-renders": "CDwuwXJAbEw",
  travel: "Fzo3zuOHN6w",
  nature: "6sMVjTLSkeQ",
  "street-photography": "xHxYTMHLgOc",
  experimental: "qPYsDzvJOYc",
  "textures-patterns": "iUIsnVtjB0Y",
  animals: "Jpg6Kidl-Hk",
  "architecture-interior": "M8jVbLbTRws",
  "fashion-beauty": "S4MKLAsBB74",
  film: "hmenvQhUmxM",
  "food-drink": "xjPR4hlkBGA",
  people: "towJZFskpGg",
  spirituality: "_8zFHuhRhyo",
  "business-work": "aeu6rL-j6ew",
  athletics: "Bn-DjrcBrwo",
  health: "_hb-dl4Q-4U",
  "current-events": "BJJMtteDJA4",
  "arts-culture": "bDo48cUhwnY",
};

const DEFAULT_TOPICS = [
  TOPIC_MAP["nature"],
  TOPIC_MAP["animals"],
  TOPIC_MAP["people"],
].join(",");

const BASE_URL = "https://api.unsplash.com/photos/random?count=30";
const REQ_HEADERS = {
  Authorization: `Client-ID ${process.env.UNSPLASH_API_KEY}`,
};

export const getPhotos = async (params?: ProviderParams): Promise<Photo[]> => {
  try {
    const photoResp = await doPhotoRequest(params?.topic);

    // The flat map allows for kicking out premium watermarked photos
    const photos = photoResp.flatMap((photo: PhotoRespItem) =>
      photo?.urls?.regular?.includes("premium")
        ? []
        : ({
            url: photo?.urls?.regular,
            attributionUrl: photo?.user?.links?.html,
            authorName: photo?.user?.name,
          } as Photo)
    );

    return photos;
  } catch (e) {
    console.log(e);
    return [];
  }
};

const doPhotoRequest = async (
  topic: string | undefined
): Promise<PhotoRespItem[]> => {
  let url = `${BASE_URL}&topics=${DEFAULT_TOPICS}`;
  if (topic && topic in TOPIC_MAP) {
    const topicId = TOPIC_MAP[topic as keyof typeof TOPIC_MAP];
    url = `${BASE_URL}&topics=${topicId}`;
  }

  const reqConfig = {
    url: url,
    headers: REQ_HEADERS,
  };

  const resp = await axios(reqConfig);
  if (resp.status < 200 || resp.status >= 300) {
    throw "Bad response code from unsplash";
  }

  return resp.data;
};
