import React from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

import {animateScroll} from "react-scroll"
import {useNavigate, useLocation} from "react-router-dom"

export default function KolahFarangi() {
    
    let location = useLocation();
    let navigate = useNavigate();

    React.useEffect(() => {
        animateScroll.scrollToTop({
          duration: 0,
          smooth: false
        });
    }, [location.pathname]);

    const handlePage = () => {
        console.log(location); 
        if(location.pathname !== "/") {
            navigate("/");
        }
    }

    return (
        <div>
            <Navbar />
            <main className="pp--main">
                <div className="pp--header">
                    <h1>Kolah Farangi Redesign</h1>
                    <h4>Tools Used: Balsamiq, Figma, HTML/CSS</h4>
                </div>

                <div className="pp--header-photo-container">
                    <img className="pp--header-photo" src="/images/KF-Food.jpg"></img>
                </div>

                <div className="pp--section-body"> 
                    <p>
                        Have you ever painstakingly searched for a place to eat, browsing through
                        nearby restaurant after nearby restaurant, wondering which place would
                        satisfy your whims? Now imagine that, but your options are severely limited
                        due to dietary restrictions, and when you finally find something that catches your
                        eye, the website is incredibly cluttered and unintuitive to navigate, so
                        you immediately disembark and continue your search for another. 
                        You might have just missed out on some good stuff.
                    </p>
                </div>
                <div className="pp--section-header"><h2>Context</h2></div>
                <div className="pp--section-body">
                    <p>
                        Kolah Farangi is a kosher restaurant in Los Angeles featuring Persian and Chinese food.
                        Kosher restaurants are already scarce, making outside dining for those with a Kosher diet 
                        such as some practicing Jews difficult, if not predictable or even nigh impossible.
                        Kolah Farangi offers great kosher meals at a reasonable pricepoint in LA, but their website
                        is cluttered and difficult to use. This imagined redesigned is intended to make
                        making browsing through kosher options easier, as well as give Kolah Farangi a more
                        appealing website to promote themselves.
                    </p>
                </div>

                <div className="pp--section-header"><h2>Problem</h2></div>
                <div className="pp--section-body">
                    <h4>Usability</h4>
                    <ul>
                        <li>The webpage contains excessive ads which obscure the 
                            website content and also make the website seem less credible.
                        </li>
                        <li>The menu is composed of blurry photos. This means that if a user would like to look
                            closer at a particular section in order to read it, they would have to click on the image
                            and be taken through another path, sometimes getting another ad.
                        </li>
                    </ul>
                    <h4>Accessibility</h4>
                    <ul>
                        <li>WebAIM WAVE found that
                            there was no alternate text for images and also low contrast.
                            Since the menu is a set of images, those who use a screen-reader are unable to read 
                            the menu. Additionally, the red against the gray in the header is very difficult to read.
                        </li>
                    </ul>

                </div>

                <div className="pp--section-header"><h2>Low-Fidelity Wireframing</h2></div>
                <div className="pp--section-body">
                    

                    <p>Starting with low-fidelity wireframing, the goal was to resolve the website's key issues.
                        Namely, remove the ads and make information display more streamlined and easy to navigate.
                        I designed interfaces for desktop, tablet, and cell phone dimensions.
                    </p>
                    <img src="/images/kolahfarangi/wireframe-desktop.jpg" alt="wireframe for desktop dimensions"/>
                    <img src="/images/kolahfarangi/wireframe-tablet.jpg" alt="wireframe for tablet dimensions"/>
                    <img src="/images/kolahfarangi/wireframe-phone.jpg" alt="wireframe for phone dimensions"/>
                    <p>The header is now larger, and the page features a main, eye-catching visual complete
                        with a notable "Order Now" button.

                        The menu is no longer composed of blurry pictures, but coded onto the website itself,
                        complete with show/hide buttons for the various sections to make traversal easier.
                    </p>
                </div>

                <div className="pp--section-header"><h2>Style Guide and High-Fidelity Prototyping</h2></div>
                <div className="pp--section-body">
                    <p>To emulate the original site's fire imagery, the color palette is a simple
                        black/white with red accents of different hues.
                    </p>
                    <img src="/images/kolahfarangi/VisualGuide.png" alt="visual design style guide for my redesign"/>

                    <p>
                        High-fidelity wireframing allowed for some play of the menu display,
                        as well as the addition of an image grid and footer.
                        One thing that was lost with the simplifcation of the header was the loss
                        of important information like location and phone number being readily
                        displayed at the top of the webpage.

                        <img src="/images/kolahfarangi/figma-desktop-1.jpg" alt="high fidelity prototype for desktop dimensions"/>
                        <img src="/images/kolahfarangi/figma-desktop-2.jpg" alt="high fidelity prototype for desktop dimensions, continued"/>
                        <img src="/images/kolahfarangi/figma-tablet.jpg" alt="high fidelity prototype for tablet dimensions"/>
                        <img src="/images/kolahfarangi/figma-phone.jpg" alt="high fidelity prototype for phone dimensions"/>
                    </p>
                </div>

                <div className="pp--section-header"><h2>Conclusion</h2></div>
                <div className="pp--section-body">
                    <p>Initially, I had the misconception that redesigning a poorly presented website would be a simple task.
                    However, I soon realized the process of redesigning anything is an intensive task that involves many stages
                    of considering options that evolve and change over time. I hope to have done Kolah Farangi justice.
                    </p>

                </div>

                <a href='#projects' className='bottom-button' onClick={handlePage}>See more projects!</a>

                




            
            </main>
            <Footer />
  
        </div>
    )
}