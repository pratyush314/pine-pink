import ProductCard from "../components/ProductCard";
import product1 from "../assets/product1.jpg";
import product2 from "../assets/product2.jpg";
import product3 from "../assets/product3.jpg";
import product4 from "../assets/product4.jpg";
import product5 from "../assets/product5.jpg";
import product6 from "../assets/product6.jpg";
import product7 from "../assets/product7.jpg";
import product8 from "../assets/product8.jpg";
import product9 from "../assets/product9.jpg";
import product10 from "../assets/product10.jpg";
import product11 from "../assets/product11.jpg";
import product12 from "../assets/product12.jpg";

const Products = () => {
  const products = [
    {
      imgSrc: product1,
      text: "Best Quality Wood Lids",
    },
    {
      imgSrc: product2,
      text: "Decorative Cupboard Lids",
    },
    {
      imgSrc: product3,
      text: "Best Quality Wooden Bins",
    },
    {
      imgSrc: product4,
      text: "Wooden Cladding",
    },
    {
      imgSrc: product5,
      text: "Glued Wood Shield",
    },
    {
      imgSrc: product6,
      text: "Wooden Door Frame",
    },
    {
      imgSrc: product7,
      text: "Wooden Flooring",
    },
    {
      imgSrc: product8,
      text: "Wooden Siding",
    },
    {
      imgSrc: product9,
      text: "Window Wood Frame",
    },
    {
      imgSrc: product10,
      text: "Wooden Frame",
    },
    {
      imgSrc: product11,
      text: "Wooden Decking Board",
    },
    {
      imgSrc: product12,
      text: "Wooden Planed Products",
    },
  ];
  return (
    <div>
      <div className="my-10 flex max-sm:flex-col max-sm:gap-3 sm:justify-between">
        <div>
          <p className="text-secondary text-2xl sm:text-5xl font-semibold">
            Wood Products From{" "}
          </p>
          <p className="text-primary text-2xl sm:text-5xl font-semibold">
            Softwood & Hardwood
          </p>
        </div>
        <p className="text-lg text-secondary sm:text-xl font-normal font-['Outfit']">
          We produce custom profiles in any shape and finish according to{" "}
          <br className="hidden sm:block" />
          cllent's order, decking boards, cladding, lining, flooring, door /
          <br className="hidden sm:block" />
          window scantlings, tongue-and-groove panels, artist frames,
          <br className="hidden sm:block" /> and more.
        </p>
      </div>
      <div className="my-20 mx-auto w-fit grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {products.map((prod, idx) => (
          <ProductCard
            key={idx}
            index={idx + 1}
            imgSrc={prod.imgSrc}
            text={prod.text}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
