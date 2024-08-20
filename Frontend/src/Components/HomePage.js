import { useState } from "react";
import "../Styles/HomePage.css";
import FooterCard from "./FooterCard";
function HomePage() {

// const handleClick = () => {
//     window.open('https://www.linkedin.com/in/sooryakumar-r-8561b8227', '_blank');
// };

    return (
        <>
            <div id="nav">
                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="">Projects</a></li>
                    <li><a href="">Experience</a></li>
                    <li><a href="">Resume</a></li>
                    <li><a href="">Contact</a></li>
                </ul>
            </div>
            <div id="test">
                
            </div>
            <div id="footer">
                <h3>Designed and Developed by Sooryakumar R</h3>
                <h3>Copyright © 2024 SO.</h3>
                <div>
                    <FooterCard />
                </div>

                            

            </div>
        </>
    );
}

export default HomePage;
