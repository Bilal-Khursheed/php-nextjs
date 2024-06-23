// components/YouTubePlayer.js
"use client"
import { useState } from "react";
import styles from './YouTubePlayer.module.css'

const YouTubePlayer = ({ videoId }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  return (
    <section>
      <div className={styles.videoContainer}>
        <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', maxWidth: '100%', background: '#000' }}>
          <iframe
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
            src={`https://www.youtube.com/embed/${videoId}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            onLoad={handleLoad}
          ></iframe>
          {!isLoaded && (
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#000'
            }}>
              <p style={{ color: '#fff' }}>Loading...</p>
            </div>
          )}
        </div>
      </div> </section>
  );
};

export default YouTubePlayer;
