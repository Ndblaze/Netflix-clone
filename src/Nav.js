import React, {useEffect, useState} from 'react'
import './Nav.css'

const Nav = () => {
     
    const [show, handleShow] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 100){
                handleShow(true);
            }else{
                handleShow(false);
            }
        });

        return () => {
            window.removeEventListener("scroll");
        };
    }, [])
    return (
        <div className={`nav ${show && "nav_black"}`}>
            <img
               className="nav_logo"
               src="https://spng.pngfind.com/pngs/s/55-550966_netflix-worldvectorlogo-netflix-white-logo-png-transparent-png.png"
               alt="Netflx logo"
            />

            <img 
              className="nav_avatar"
              src="https://tse1.mm.bing.net/th?id=OIP.i2HBuWmNU78kbh4kUkDr7gAAAA&pid=Api&P=0&w=300&h=300"
              alt="avatar logo"
            />
        </div>
    )
}

export default Nav
