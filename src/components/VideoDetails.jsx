

var VideoDetails = ({video}) => {
  console.log(video);
  return (
    <div className="video-player-details">
      <h3>{video.snippet.title}</h3>
      <div>{video.snippet.description}</div>
      <div>{video.snippet.publishedAt}</div>
      <div>{video.snippet.channelId}</div>
    </div>
  );
};

export default VideoDetails;