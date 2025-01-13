import React from 'react';

const DemoVideo = () => {
  return (
<div
  style={{
    position: 'relative',
    width: '100%',
    maxWidth: '1200px',
    height: 'calc(100vw * 0.5625)', // Aspect ratio 16:9
    maxHeight: '80vh',
    margin: '0 auto',
    borderRadius: '16px',
    overflow: 'hidden',
  }}
>
  <video
    style={{
      width: '100%',
      height: '100%',
      objectFit: 'contain', // Adjust as needed: "contain", "cover", or "scale-down"
      backgroundColor: '#000', // Fallback color
    }}
    autoPlay
    loop
    muted
    playsInline
  >
    <source src="/demo2.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
</div>

  );
};

export default DemoVideo;
