import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
// import logo from "../../../public/a"
const Footer = () => {
  return (
    <div>
      <footer className="footer p-10 bg-black text-white mt-3 ">
        <div className=' mx-auto flex lg:gap-40 flex-col lg:flex-row'>
        <aside>
          <div className=' flex gap-4 items-center mb-4'>
          <img className=' rounded-full h-10 w-10' src="https://i.ibb.co/ZTzcVQg/a.jpg" alt="" />
          <p className=' text-xl'>Entertain Events</p>
          </div>
          <p className=''>
             Entertainment Events Ltd.
            <br />
            Providing reliable tech since 2000
          </p>
        </aside>
        <nav>
          <header className="footer-title text-xl">Contact</header>
          <a className="link link-hover block">Email:arju23@gmail.com</a>
          <a className="link link-hover block">Cell:01814280478</a>
          <a className="link link-hover block">Address:Chittagong</a>
        </nav>
        <nav>
          <header className="footer-title text-xl  ">Social Contact</header>
          <a href="https://facebook.com" className="text-white mr-4 flex items-center ">
              <FaFacebook className=' mr-3 '></FaFacebook>Facebook
            </a>
            <a href="https://instagram.com" className="text-white mr-4 flex">
              <FaInstagram className=' mr-3'></FaInstagram>Instagram
            </a>
            <a href="https://twitter.com" className="text-white mr-4 flex">
              <FaTwitter className=' mr-3'></FaTwitter>Twitter
            </a>
            <a href="https://youtube.com" className="text-white flex">
              <FaYoutube className=' mr-3'></FaYoutube>Youtube
            </a>
        </nav>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
