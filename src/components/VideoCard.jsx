
const VideoCard = ({ videoDetails }) => {

  const thumbnail = videoDetails.snippet.thumbnails.medium.url;
  const channelTitle = videoDetails.snippet.channelTitle;
  const title = videoDetails.snippet.localized.title;
  const { viewCount } = videoDetails.statistics;

  return (
    <div className="text-white w-80 min-w-[320px] max-w-[360px]  cursor-pointer">
      <img className="rounded-xl" src={thumbnail} alt="thumbnail" />
      <div className="py-2">
        <img src="" alt="" />
        <span className="font-bold  line-clamp-2  my-2 leading-normal h-12 overflow-ellipsis  overflow-hidden ">{title} </span>
      </div>
      <span>{channelTitle} </span>
      <div>
        <span>{viewCount} views</span>
        <span></span>
      </div>
    </div>
  );
};

export default VideoCard;