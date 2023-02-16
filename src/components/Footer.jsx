import {ReactComponent as Logo} from '../images/logo.svg';
import {ReactComponent as Facebook} from '../images/icon-facebook.svg';
import {ReactComponent as Twiter} from '../images/icon-twitter.svg';
import {ReactComponent as Pinterest} from '../images/icon-pinterest.svg';
import {ReactComponent as Instagram} from '../images/icon-instagram.svg';


export default function Footer() { 
    return (
        <>
            <section className="footerWrapper">
                <div className='footer'>
                    <div className='logo-white'>
                        <Logo />
                    </div>
                    <div className='footer__elements'>
                        <div className='footer__text'>
                            <a href='#' className='text__tittle'>Feature</a>
                            <a href='#' className='text__normal'>Link Shortening</a>
                            <a href='#' className='text__normal'>Branded Links</a>
                            <a href='#' className='text__normal'>Analytics</a>
                        </div>
                        <div className='footer__text'>
                            <a href='#' className='text__tittle'>Resources</a>
                            <a href='#' className='text__normal'>Blog</a>
                            <a href='#' className='text__normal'>Developers</a>
                            <a href='#' className='text__normal'>Support</a>
                        </div>
                        <div className='footer__text'>
                            <a href='#' className='text__tittle'>Company</a>
                            <a href='#' className='text__normal'>About</a>
                            <a href='#' className='text__normal'>Our Team</a>
                            <a href='#' className='text__normal'>Careers</a>
                            <a href='#' className='text__normal'>Contact</a>
                        </div>
                    </div>
                    <div className='footer__logos'>
                        <Facebook className='logo'/>
                        <Twiter className='logo'/>
                        <Pinterest className='logo'/>
                        <Instagram className='logo'/>
                    </div>
                </div>
            </section>
        </>
    )
}
