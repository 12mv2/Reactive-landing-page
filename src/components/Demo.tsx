import React from 'react';

const Demo = () => {
  const videos = [
    {
      title: "Reactive Overview",
      url: "https://www.youtube.com/embed/KttJvc9F2a8?enablejsapi=1",
    },
    {
      title: "How to Use Reactive",
      url: "https://www.youtube.com/embed/pF-JJ7jmMp4?enablejsapi=1",
    },
  ];

  // Function to trigger full-screen and auto-play
  const enterFullScreenAndPlay = (id: string) => {
    const videoElement = document.getElementById(id) as HTMLIFrameElement | null;
    if (videoElement) {
      // Trigger full-screen
      if (videoElement.requestFullscreen) {
        videoElement.requestFullscreen();
      } else if ((videoElement as any).webkitRequestFullscreen) {
        (videoElement as any).webkitRequestFullscreen();
      } else if ((videoElement as any).msRequestFullscreen) {
        (videoElement as any).msRequestFullscreen();
      } else {
        alert("Fullscreen not supported on this browser.");
      }

      // Send play command to YouTube iframe
      videoElement.contentWindow?.postMessage(
        JSON.stringify({ event: "command", func: "playVideo" }),
        "*"
      );
    }
  };

  return (
    <div className="bg-darkBackground py-16 text-center text-white">
      <h2 className="text-4xl font-bold text-neonPink mb-8">Demo Videos</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {videos.map((video, index) => (
          <div key={index} className="relative">
            <iframe
              id={`video-${index}`}
              className="w-full h-60 md:h-80 border-2 border-neonCyan rounded-lg shadow-lg"
              src={video.url}
              title={video.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <button
              className="absolute top-2 right-2 bg-neonPink text-darkBackground px-3 py-1 rounded-md text-sm font-semibold hover:bg-neonCyan"
              onClick={() => enterFullScreenAndPlay(`video-${index}`)}
            >
              Full Screen
            </button>
            <p className="mt-4 text-xl font-semibold">{video.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Demo;
