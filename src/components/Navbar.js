import React, {useState, useEffect} from 'react';  //print rfce , we could get sa simple structure of react
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Navbar.css';


function NavBar() {

  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);


  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  }

  useEffect(() => {
    showButton();
  },[]);

  window.addEventListener("resize", showButton);

  return (
    <>
        <nav className='navbar'>
            <div className='navbar-container'>
                <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                    CAUC <i class="fa-solid fa-plane-up"></i>
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                  <i className={click ? "fas fa-times" : "fas fa-bars"} />
                </div>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                  <li className='nav-item'>
                    <Link to="/About" className='nav-links' onClick={closeMobileMenu}>
                      About
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <Link to="/Simulation" className='nav-links' onClick={closeMobileMenu}>
                    Simulation
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <Link to="/Process" className='nav-links' onClick={closeMobileMenu}>
                    Processing
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <Link to="/Results" className='nav-links' onClick={closeMobileMenu}>
                    Achievements
                    </Link>
                  </li>
                  {/* <li className='nav-item'>
                    <Link to="/sign-up" className='nav-links-mobile' onClick={closeMobileMenu}>
                      Sign up
                    </Link>
                  </li> */}
                </ul>
                {/* {button && <Button buttonStyle="btn--outline">SIGN UP</Button>} */}
            </div>
        </nav>
    </>
  )
}

export default NavBar;

