import Slider from "react-slick";
import Header from "./components/Header";
import VideoBackground from "./components/VideoBackground";
import CompanyBackground from "./components/CompanyBackground";

const App = () => {
  return (
    <div className="font-42">
      <Header />
      <section>
        <div>
          <div className="h-fit relative">
            <VideoBackground />
            <div className="bg-red-100 h-[150px] mx-[79px] px-7 flex flex-col justify-center text-white whitespace-pre-line">
              <div className="flex text-5xl pb-7 font-semibold">
                We Are A Mobility AI Company
              </div>
              <p className="flex">
                42dot은 소프트웨어가 중심이 되는 SDV (software-defined
                vehicle)를 통해
              </p>
              <p>새로운 이동의 미래를 제시합니다.</p>
            </div>
          </div>
            <CompanyBackground />
            Company Container
          </div>
          <div>Content Area</div>
          <div>Mobility Container</div>
          <div>AEV Container</div>
          <div>Careers Container</div>
          <div>Blog Container</div>
          <div>Home SNS Container</div>
        </div>
      </section>
      <section>Footer</section>
    </div>
  );
};

export default App;
