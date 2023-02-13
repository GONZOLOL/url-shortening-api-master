import {ReactComponent as Logo} from '../images/logo.svg';
import {ReactComponent as Facebook} from '../images/icon-facebook.svg';
import {ReactComponent as Twiter} from '../images/icon-twitter.svg';
import {ReactComponent as Pinterest} from '../images/icon-pinterest.svg';
import {ReactComponent as Instagram} from '../images/icon-instagram.svg';


export default function Footer() { 
    return (
        <>
            <section className="footerContainer">
                <div className='logo-white'>
                    <Logo />
                </div>
                <div className='footer__elements'>
                    <div className='footer__text'>
                        <span className='text__tittle'>Feature</span>
                        <span className='text__normal'>Link Shortening</span>
                        <span className='text__normal'>Branded Links</span>
                        <span className='text__normal'>Analytics</span>
                    </div>
                    <div className='footer__text'>
                        <span className='text__tittle'>Resources</span>
                        <span className='text__normal'>Blog</span>
                        <span className='text__normal'>Developers</span>
                        <span className='text__normal'>Support</span>
                    </div>
                    <div className='footer__text'>
                        <span className='text__tittle'>Company</span>  
                        <span className='text__normal'>About</span>
                        <span className='text__normal'>Our Team</span>
                        <span className='text__normal'>Careers</span>
                        <span className='text__normal'>Contact</span>
                    </div>
                    <div className='footer__logos'>
                        <Facebook />
                        <Twiter />
                        <Pinterest />
                        <Instagram />
                    </div>
                </div>
            </section>
        </>
    )
}
