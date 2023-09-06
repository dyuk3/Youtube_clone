import { useEffect, useState } from "react";
import { POPULAR_VIDEOS_API } from "../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";


const VideosContainer = () => {

  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchApi();
  }, []);

  const fetchApi = async () => {
    const videoData = await fetch(POPULAR_VIDEOS_API);

    const jsonData = await videoData.json();

    setVideos(jsonData.items);


  };

  return (
    <div className="flex flex-wrap gap-8 w-full justify-start">
      {videos.map((video) => (
        <Link key={video.id} to={'/watch?v=' + video.id}>
          <VideoCard videoDetails={video} />
        </Link>
      ))}
    </div>

  );
};

export default VideosContainer;
