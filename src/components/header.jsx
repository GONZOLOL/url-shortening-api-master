import {ReactComponent as Logo} from '../images/logo.svg';

function Header() {
    return (
        <>
            <section className='header'>
                <div className="header__left">
                    <Logo />
                    <a href="#">Features</a>
                    <a href="#">Pricing</a>
                    <a href="#">Resources</a> 
                </div>
                <div className="header__right">
                    <button>login</button>
                    <button className='boton'>SignUp</button>
                </div>
            </section>
        </>
    );
  }
  
  export default Header;
  

