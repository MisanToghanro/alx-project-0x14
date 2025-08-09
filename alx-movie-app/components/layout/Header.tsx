import Link from "next/link";
import Button from "./Button";
import Movies from "@/pages/movies";

const Header: React.FC = () => {

    return(
    <header className="h-28 flex items-center bg-[#171D22] px-4 md:px-16 lg:px-44 text-white">
        <div className="flex items-center justify-between w-full">
            <h2 className="text-xl md:text-4xl font-semibold"><span className="text-[#E2D609]">Cine</span><span>Seek</span></h2>

            
            <nav className="hidden md:flex flex-1 justify-center space-x-8">
                <Link href="/" className="hower:text-[#E2D609] px-4 md:px-8 text-xl transition-colors duration-300 font-semibold">Home</Link>
                <Link href="/movies">Movies</Link>
                <Link href="/contact">About</Link>
            </nav>
            <div>
               <Button title="SignIn"/>
            </div>
            <div>
                <Button title="SignIn"/>
            </div>
            
        </div>

    </header>)
}
export default Header;