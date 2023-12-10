const VideoBackground = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10">
      <video autoPlay loop muted className="object-cover w-full h-full">
        <source
          src="https://static.42dot.ai/content/85b0b5f1-06d2-4ad5-a86d-e32f630a7062video_01.mp4%20(1).mp4"
          type="video/mp4"
        />
      </video>
    </div>
  );
};

export default VideoBackground;
