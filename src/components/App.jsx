import exampleVideoData from '../data/exampleVideoData.js';
import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import Search from './Search.js';
import searchYouTube from '../lib/searchYouTube.js';
const { useState, useEffect } = React;

var App = () => {
  const [videos, setVideos] = useState([]);
  const [currentVideo, setCurrentVideo] = useState(exampleVideoData[0]);
  const [searchInput, setSearchInput] = useState('elephant');

  let timeout = null;

  useEffect(() => {
    searchYouTube(searchInput, (data) => {
      setVideos(data);
      setCurrentVideo(data[0]);
    });
  }, [searchInput]);

  // useEffect(() => {
  //   clearTimeout(timeout);
  //   timeout = setTimeout(() => {
  //     searchYouTube(searchInput, (data) => {
  //       setVideos(data);
  //       setCurrentVideo(data[0]);
  //     });
  //   }, 5000);
  // }, [searchInput]);

  return !currentVideo ? null : (
    <div>
      <nav className="navbar">
        <div className="col-md-6 offset-md-3">
          <Search setSearch={setSearchInput}/>
        </div>
      </nav>
      <div className="row">
        <div className="col-md-7">
          <div><VideoPlayer video={currentVideo} /></div>
        </div>
        <div className="col-md-5">
          <VideoList videos={videos} setVideo={setCurrentVideo} />
        </div>
      </div>
    </div>
  );
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
