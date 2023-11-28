const Header = () => {
  return (
    <header className="bg-[#32353f] max-w-screen-2xl">
      <div className="sticky top-0 left-0 z-999 bg-[#32353f] flex flex-row justify-between items-center xl:px-20 xl:mx-[24px] xl:h-14 xl:gap-28 ">
        <img
          src="https://42dot.ai/images/common/img_gnb_logo.svg"
          alt="42dot_logo"
          className="flex xl:w-[82px]"
        />
        <nav className="flex flex-grow text-white font-semibold cursor-pointer xl:gap-12 xl:text-base">
          <div>Company</div>
          <div>Technology</div>
          <div>Mobility</div>
          <div>AEV</div>
          <div>Careers</div>
          <div>Blog</div>
        </nav>
        <div className="flex xl:gap-2 xl:text-sm ">
          <div className="text-white">KR</div>
          <div className="text-white">|</div>
          <div className="text-neutral-500">EN</div>
        </div>
      </div>
    </header>
  );
};

export default Header;
