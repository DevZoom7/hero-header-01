import { useState } from "react";
import { motion } from "framer-motion";
import logo from "../images/logo.svg";
import barIcon from "../images/bar-icon.svg";

const pages = [
   "Home",
   "About us",
   "How it works",
   "Services",
   "Contact",
   "Try for Free",
];

export default function Navbar() {
   const [active, setActive] = useState(0);
   const handleMouseEnter = (ind: number) => setActive(ind);
   const handleMouseLeave = () => setActive(0);
   return (
      <nav>
         <div className="logo">
            <img src={logo} alt="logo" />
            <a href="#">Kreed</a>
         </div>
         <ul className="list" onMouseLeave={handleMouseLeave}>
            {pages.map((page, ind) => (
               <li key={ind} onMouseEnter={() => handleMouseEnter(ind)}>
                  <a href="#">{page}</a>
                  {active === ind ? (
                     <motion.span
                        transition={{ duration: 0.2 }}
                        className="underline"
                        layoutId="underline"
                     ></motion.span>
                  ) : null}
               </li>
            ))}
         </ul>
         <img className="bar-icon" src={barIcon} alt="bar icon" />
      </nav>
   );
}
