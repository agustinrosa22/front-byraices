import React from 'react';
import style from './YoutubeVideo.module.css'; // Asegúrate de crear este archivo para los estilos

const YouTubeVideo = () => {
  return (
    <div className={style.videocontainer}>
      <iframe
        width="1160"
        height="600"
        src="https://www.youtube.com/embed/f446CtxmqPI"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default YouTubeVideo;
