import {ReactComponent as Logo} from '../images/logo.svg';
import Button from "./Button";

function Header() {
    return (
        <>
            <section className='headerWrapper'>
                <section className='header'>
                    <div className="header__left">
                        <Logo />
                        <a href="#">Features</a>
                        <a href="#">Pricing</a>
                        <a href="#">Resources</a>
                    </div>
                    <div className="header__right">
                        <a href='#'>login</a>
                        <Button estilo="btn btn--header" text="SignUp"/>
                    </div>
                </section>
            </section>
        </>
    );
  }
  
  export default Header;
  

