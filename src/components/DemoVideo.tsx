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
    <source src="https://reactive-video-bucket.s3.us-east-2.amazonaws.com/demo2_no_audio.mp4?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAXEVXYSLVE7V4LWHB%2F20250119%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20250119T233620Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=9d0e7adc0c21cb6c6c6d643bed90634d63c4af61ff985d117456b860ba60c574" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
</div>

  );
};

export default DemoVideo;
