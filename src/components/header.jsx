import {ReactComponent as Logo} from '../images/logo.svg';


function Header() {
    return (
        <>
            <header className='navBar-header'>
                <div className="navBar-header-left">
                    <Logo />
                    <a>Features</a>
                    <a>Pricing</a>
                    <a>Resources</a>
                </div>
                <div className="navBar-header-right">
                    <a>login</a>
                    <a className='boton'>SignUp</a>
                </div>
            </header>
        </>
    );
  }
  
  export default Header;
  

