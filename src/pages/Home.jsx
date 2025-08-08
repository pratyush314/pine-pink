import mailLogo from "../assets/uiw_mail.svg";
import facebookLogo from "../assets/prime_facebook.svg";
import instaLogo from "../assets/basil_instagram-solid.svg";
import whatsLogo from "../assets/ri_whatsapp-fill.svg";
import woodVid from "../assets/woods.mp4";
import Carousel from "../components/Carousel";
import HomeCard from "../components/HomeCard";
import homeCard1 from "../assets/homeCard1.jpg";
import homeCard2 from "../assets/homeCard2.jpg";
import homeCard3 from "../assets/homeCard3.jpg";
import homeCard4 from "../assets/homeCard4.jpg";
import { useNavigate } from "react-router-dom";
import teamImage from "../assets/ri_team-fill.svg";
import star1 from "../assets/star1.svg";
import star2 from "../assets/star2.svg";
import star3 from "../assets/star3.svg";
import circleLogo from "../assets/circle.png";
import handshake from "../assets/handshake.svg";
import security from "../assets/security.svg";
import HomeSupportCard from "../components/HomeSupportCard";
const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="my-12">
      <h2 className="text-2xl text-primary font-medium leading-normal">
        Welcome to Grovol & Pine
      </h2>
      <div className="flex mb-5">
        <div className="relative md:min-w-[600px] lg:min-w-[900px]">
          <div className="sm:text-7xl  text-3xl sm:leading-[101px] leading-[45px]">
            <span className="text-zinc-800 font-bold">Timeless Charm of </span>
            <span className="text-primary font-semibold italic">
              Pine Wood{" "}
            </span>
            <span className="text-zinc-800 font-bold">Planks</span>
          </div>
          <p
            className="mt-2 text-zinc-800 text-base leading-7 font-normal lg:absolute bottom-5 right-4 lg:right-8 xl:right-12"
            style={{
              fontFamily: "Outfit,san-serif",
            }}
          >
            Inspired by the principle of full satisfaction to our customers,
            which we aim as our company, we serve your requests{" "}
            <br className="hidden sm:block" /> in the most appropriate ways with
            our professional team, trouble-free transportation operations and
            experienced <br className="hidden sm:block" />
            chemical team in the fields of "Wood industry", "Pellet",
            "industrial packaging" and "Industrial chemicals".
          </p>
        </div>
        <div className="flex-col gap-3 hidden lg:flex">
          <p className="bg-dark rounded-full p-2">
            <img
              src={facebookLogo}
              alt="facebook"
              className="aspect-square w-7 h-7"
            />
          </p>
          <p className="bg-dark rounded-full p-2">
            <img
              src={instaLogo}
              alt="insta"
              className="aspect-square w-7 h-7"
            />
          </p>
          <p className="bg-dark rounded-full p-2">
            <img src={mailLogo} alt="mail" className="aspect-square w-7 h-7" />
          </p>
          <p className="bg-dark rounded-full p-2">
            <img
              src={whatsLogo}
              alt="whatsapp"
              className="aspect-square w-7 h-7"
            />
          </p>
        </div>
      </div>
      <div className="mt-2 w-full mx-auto">
        <video
          src={woodVid}
          autoPlay
          muted
          playsInline
          loop
          preload="auto"
          className="rounded-4xl object-cover w-full h-96"
        />
      </div>
      <div className="my-20">
        <Carousel />
      </div>
      <div className="my-10 flex max-md:flex-col max-sm:gap-3 sm:justify-between">
        <div className="">
          <p className="text-secondary text-2xl md:text-5xl font-semibold">
            Wood Products From{" "}
          </p>
          <p className="text-primary text-2xl md:text-5xl font-semibold">
            Softwood & Hardwood
          </p>
        </div>
        <p
          className="text-secondary text-base sm:text-xl font-normal"
          style={{
            fontFamily: "Outfit,san-serif",
          }}
        >
          We produce custom profiles in any shape and finish according to{" "}
          <br className="max-sm:hidden" />
          cllent's order, decking boards, cladding, lining, flooring, door /
          <br className="max-sm:hidden" />
          window scantlings, tongue-and-groove panels, artist frames,
          <br className="max-sm:hidden" /> and more.
        </p>
      </div>
      <div className="my-10 flex flex-col gap-5">
        <div className="flex max-sm:flex-col gap-5">
          <HomeCard
            imgSrc={homeCard1}
            text={"Best Quality WOODEN FRAME"}
            width={689}
          />
          <HomeCard imgSrc={homeCard2} text={"BEST QUALITY"} width={577} />
        </div>
        <div className="flex max-sm:flex-col gap-5">
          <HomeCard
            imgSrc={homeCard3}
            text={"BEST QUALITY WOODEN BINS"}
            width={577}
          />
          <HomeCard
            imgSrc={homeCard4}
            text={"WOODEN PLANED products"}
            width={689}
          />
        </div>
      </div>
      <div className="mt-16 mb-28 text-center">
        <button
          onClick={() => navigate("/products")}
          className="cursor-pointer w-56 h-14 px-5 py-2.5 bg-primary rounded-2xl inline-flex justify-center items-center gap-2.5"
        >
          <div className="justify-start text-white text-2xl font-semibold">
            Explore More
          </div>
        </button>
      </div>

      <div className="my-10 flex max-sm:flex-col max-sm:items-center gap-4">
        <HomeSupportCard
          imageUrls={[teamImage, star1, star2, star3]}
          header={"Professionalism & Ethics"}
          features={[
            "High standards of professionalism and ethics in all operations. ",
            "Long-term partnerships based on trust and mutual success.",
          ]}
        />
        <HomeSupportCard
          imageUrls={[handshake]}
          header={"Reliable Supply"}
          features={[
            "Deep understanding of customer needs in various industries",
            "Long-termFlexibility & adaptability to market changes.",
            "Wide range of high-quality product.",
          ]}
        />
        <HomeSupportCard
          imageUrls={[security]}
          header={"Customer Orientation"}
          features={[
            "Extensive knowledge and experience in general trading.",
            "Support in achieving customers' business goals.",
            "Tailored solutions adapted to customer needs.",
          ]}
        />
      </div>
      <div className="my-18 flex justify-center">
        <img src={circleLogo} alt="circle" />
      </div>
    </div>
  );
};

export default Home;
