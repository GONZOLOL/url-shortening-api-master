import {ReactComponent as Logo} from '../images/logo.svg';
import { useState } from 'react';
import Button from "./Button";

function Header() {

    const [movile, setMovile] = useState(false)

    function toggleMovile() {
        setMovile(!movile);
    }

    return (
        <>
            <section className='navWrapper'>
                <section className='nav'>
                    <div className="nav__logo">
                        <Logo />
                    </div>
                    
                    <div className={`menuContainer ${movile ? 'show' : ''}`}>
                        <div className="nav__left">
                            <ul>
                                <li><a href="#">Features</a></li>
                                <li><a href="#">Pricing</a></li>
                                <li><a href="#">Resources</a></li>
                            </ul>
                        </div>
                        <div className="nav__right">
                            <a href='#'>login</a>
                            <Button estilo="btn btn--header" text="SignUp"/>
                        </div>
                    </div>
                    
                    <div className='nav__hamburguer'>
                        <input class="menu-btn" type="checkbox" id="menu-btn" onClick={toggleMovile} />
                        <label class="menu-icon" for="menu-btn">
                            <span class="navicon"></span>
                        </label>
                    </div>
                </section>
            </section>
        </>
    );
  }
  
  export default Header;
  

