import React from 'react';

function Header() {
    return (
        <>
            <header className='navBar-header'>
                <div className="navBar-header-left">
                    <img src="/images/logo.svg" alt="" />
                    <a>Features</a>
                    <a>Pricing</a>
                    <a>Resources</a>
                </div>
                <div className="navBar-header-right">
                    <a>login</a>
                    <a>signUp</a>
                </div>
            </header>
        </>
    );
  }
  
  export default Header;
  

