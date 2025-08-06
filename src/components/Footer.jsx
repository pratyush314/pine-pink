import pineLogo from "../assets/pineLogo.png";
import phoneLogo from "../assets/ic_baseline-phone.svg";
import mailLogo from "../assets/uiw_mail.svg";
import facebookLogo from "../assets/prime_facebook.svg";
import instaLogo from "../assets/basil_instagram-solid.svg";
import whatsLogo from "../assets/ri_whatsapp-fill.svg";
const Footer = () => {
  return (
    <div className="bg-secondary rounded-4xl py-4 pl-2 sm:pr-4 flex justify-between items-center">
      <div className="hidden sm:block">
        <img src={pineLogo} alt="logo" className="h-24" />
      </div>
      <div className="flex flex-col max-sm:w-full max-sm:items-center gap-2 text-secondary">
        <div className="flex flex-col sm:flex-row gap-2 max-sm:justify-between">
          <p className="flex items-center gap-1">
            <img
              src={phoneLogo}
              alt="phone"
              className="aspect-square w-5 h-5"
            />
            <span className="sm:flex sm:gap-2">
              <span>+ 7 981 689 40 46</span>
              <span>|</span>
              <span>+48 726 299 146</span>
            </span>
          </p>
          <p className="flex items-center gap-1">
            <img
              src={phoneLogo}
              alt="phone"
              className="aspect-square w-5 h-5"
            />
            <span className="sm:flex sm:gap-2">
              <span>+91 98933 09179</span>
              <span>|</span>
              <span>+91 93000 99179</span>
            </span>
          </p>
        </div>
        <div className="flex flex-col sm:flex-row sm:gap-24 gap-2.5">
          <p className="flex items-center gap-1">
            <img src={mailLogo} alt="mail" className="aspect-square w-5 h-5" />
            <span>V.groholski@gmail.com</span>
          </p>
          <p className="flex items-center gap-1">
            <img src={mailLogo} alt="mail" className="aspect-square w-5 h-5" />
            <span>Dubge@me.com</span>
          </p>
        </div>
      </div>
      <div className="flex-col gap-1 hidden sm:flex">
        <div className="flex gap-2 items-center justify-center">
          <p className="bg-dark rounded-full p-1">
            <img
              src={facebookLogo}
              alt="facebook"
              className="aspect-square w-5 h-5"
            />
          </p>
          <p className="bg-dark rounded-full p-1">
            <img
              src={instaLogo}
              alt="insta"
              className="aspect-square w-5 h-5"
            />
          </p>
        </div>
        <div className="flex gap-2 items-center justify-center">
          <p className="bg-dark rounded-full p-1">
            <img src={mailLogo} alt="mail" className="aspect-square w-5 h-5" />
          </p>
          <p className="bg-dark rounded-full p-1">
            <img
              src={whatsLogo}
              alt="whatsapp"
              className="aspect-square w-5 h-5"
            />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
