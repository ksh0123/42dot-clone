const CompanyBackground = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10">
      <video autoPlay loop muted className="object-cover w-fit h-full">
        <source
          src="https://42dot.ai/images/home/video_home_company.mp4"
          type="video/mp4"
        />
      </video>
    </div>
  );
};

export default CompanyBackground;
