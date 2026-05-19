import video from '@/assets/videos/video.mp4';

const TeaserIntro = () => {
  return (
    <div className="fixed inset-0 overflow-hidden">
      <video
        className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto -translate-x-1/2 -translate-y-1/2 object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={video} type="video/mp4" />
      </video>
    </div>
  );
};

export default TeaserIntro;
