import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";

const Footer: React.FC = () => {

    const Year =  new Date().getFullYear();
  

    return(
    <footer>
        <div>
            <h2><span>Cine</span> <span>Seek</span></h2>

            <nav>
                <Link href="/">Home</Link>
                <Link href="/movies">Movies</Link>
                <Link href="/contact">About</Link>
                <Link href="/contact">Policy</Link>
            </nav>

            <div>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#E2D609]">
            <FontAwesomeIcon icon={faTwitter} size="lg" />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#E2D609]">
            <FontAwesomeIcon icon={faFacebook} size="lg" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#E2D609]">
            <FontAwesomeIcon icon={faInstagram} size="lg" />
          </a>
            </div>

            <div> <p>&copy; {Year} CineSeek. All rights reserved. </p></div>
        </div>

    </footer>)
}
export default Footer;