import { AiFillFacebook } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa6";



const Footer = () => {
    return (
        <footer className="footer sm:footer-horizontal bg-black text-base-content p-10">
  <aside>
    <svg
      width="50"
      height="50"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fillRule="evenodd"
      clipRule="evenodd"
      className="fill-current">
     
    </svg>
    <h1 className="text-4xl font-bold text-white">DigiTools</h1>
    <p className="text-white">
     Premium digital tools for creators, <br /> professionals, and businesses. Work smarter <br /> with our suite of powerful tools.
    </p>
  </aside>
  <nav>
    <h6 className="footer-title text-white">product</h6>
    <a className="link link-hover text-white">Features</a>
    <a className="link link-hover text-white">Pricing</a>
    <a className="link link-hover text-white">Templates</a>
    <a className="link link-hover text-white">Integrations</a>
  </nav>
  <nav>
    <h6 className="footer-title text-white">Company</h6>
    <a className="link link-hover text-white">About</a>
    <a className="link link-hover text-white">Blog</a>
    <a className="link link-hover text-white">Careers</a>
    <a className="link link-hover text-white">Press</a>
  </nav>
  <nav>
    <h6 className="footer-title text-white">Resources</h6>
    <a className="link link-hover text-white">Documentation</a>
    <a className="link link-hover text-white">Help Center</a>
    <a className="link link-hover text-white">Community</a>
    <a className="link link-hover text-white">Contact</a>
  </nav>
  <nav>
    <h6 className="footer-title text-white">Social Links</h6>
    <div className="flex gap-3">
        <p className="w-10 h-10 bg-white rounded-full flex items-center justify-center"><AiFillFacebook size={20}/></p>
       <p className="w-10 h-10 bg-white rounded-full flex items-center justify-center"> <AiFillLinkedin size={20}/></p>


      <p className="w-10 h-10 bg-white rounded-full flex items-center justify-center"> <FaInstagram size={20}/></p>
    </div>
  </nav>
</footer>
    );
};

export default Footer;