import { NavLink } from "react-router-dom";
import pineLogo from "../assets/pineLogo.png";
const Navbar = () => {
  const navItems = [
    { label: "Home", path: "/" },
    { label: "Services", path: "/services" },
    { label: "Products", path: "/products" },
    { label: "Contact Us", path: "/contact-us" },
  ];
  return (
    <div>
      <div className="flex justify-center my-4">
        <img src={pineLogo} alt="logo" className="w-sm h-36" />
      </div>
      <ul className="flex justify-around md:justify-center md:gap-24">
        {navItems.map((item, idx) => (
          <NavLink key={idx} to={item.path} className="">
            <li className="text-lg font-semibold leading-normal">
              {item.label}
            </li>
          </NavLink>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
