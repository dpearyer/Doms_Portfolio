import Link from "next/link";
import { Button } from "./ui/button";
import Nav from "./Nav";

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white">
        <div className="container mx-auto">
            {/* logo */}
            <Link href="/">
            <h1 className="text-4xl font-semibold">
                Dominique <span className="text-accent">.</span>
                </h1>
            </Link>


            {/* Desktop Nav & contact me btn */}
            <div className="hidden xl:flex">
            <Nav />
            <Link href="/contact">
               <Button>Contact Me</Button> 
            </Link>
            </div>
        </div>
    </header>
  )
}

export default Header
