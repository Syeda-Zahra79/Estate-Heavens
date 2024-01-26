import YouTube from 'react-youtube';

type YoutubeComponentProps = {
  videoId : string
}

const YouTubePlayer = ({videoId} : YoutubeComponentProps) => {
    const onReady = (event : any) => {
      const player = event.target;
      player.playVideo();
    };

    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
            host: 'https://www.youtube.com'
        },
      };      
  
    return (
        <YouTube videoId={videoId} opts={opts} onReady={onReady} />
    );
  };
  
  export default YouTubePlayer;