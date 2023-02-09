import {ReactComponent as Logo} from '../images/logo.svg';

function Header() {
    return (
        <>
            <header className='navBar-header'>
                <div className="navBar-header-left">
                    <Logo />
                    <span>Features</span>
                    <span>Pricing</span>
                    <span>Resources</span>
                </div>
                <div className="navBar-header-right">
                    <span>login</span>
                    <span className='boton'>SignUp</span>
                </div>
            </header>
        </>
    );
  }
  
  export default Header;
  

