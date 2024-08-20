import { useState } from "react";
import "../Styles/HomePage.css";

function HomePage() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <>
            <div id="header">
                <h2><a href=""><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z"/></svg>Home</a></h2>
                <h2><a href="">Contact</a></h2>
                <h2><a href="">Resume</a></h2>
                <h2><a href="">Github</a></h2>
                <h2><a href="">Linkedin</a></h2>
                <h2><a href="">Share</a></h2>
            </div>
            <div id="test">
                <br /><br />
                <br /><br />
                <br /><br />
                <h2>Body</h2>
            </div>
        </>
    );
}

export default HomePage;
