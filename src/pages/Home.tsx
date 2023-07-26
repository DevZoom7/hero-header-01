import dashboard from "../images/dashboard.svg";

export default function Home() {
   return (
      <div className="home">
         <div className="content">
            <h1>Discover new currency</h1>
            <p>
               A cryptocurrency bank account for more trusting financial
               transaction & more reliable currency for better future finance
            </p>
            <a href="#">Try for Free</a>
         </div>
         <div className="img">
            <img src={dashboard} alt="dashboard" />
         </div>
      </div>
   );
}
