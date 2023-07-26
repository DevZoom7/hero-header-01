import alertIcon from "../images/alert-icon.svg";

export default function Footer() {
   return (
      <footer>
         <ul>
            <li>
               Designed By{" "}
               <a target="_blank" rel="noreferrer" href="https://www.figma.com/@shreyashbarot">Shreyash Barot</a>
            </li>
            <li>
               Available At{" "}
               <a target="_blank" rel="noreferrer" href="https://www.figma.com/community/file/975681310612027225/Kreed---20-Hero-Headers-Template">
                  Figma
               </a>
            </li>
            <li>
               License{" "}
               <a target="_blank" rel="noreferrer" href="https://creativecommons.org/licenses/by/4.0/">
                  CC BY 4.0
               </a>
            </li>
         </ul>
         <ul>
            <li>
               Coded By{" "}
               <a target="_blank" rel="noreferrer" href="https://github.com/DevZoom7">DevZoom7</a>
            </li>
            <li>
               Source Code On{" "}
               <a target="_blank" rel="noreferrer" href="https://github.com/DevZoom7/hero-header-1">Github</a>
            </li>
            <li className="alert">
               <img src={alertIcon} alt="alert icon" />
               <p>The design has been slightly <b>modified</b></p>
            </li>
         </ul>
      </footer>
   );
}
