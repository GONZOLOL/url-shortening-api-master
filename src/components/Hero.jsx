import {ReactComponent as IllustrationWorking} from '../images/illustration-working.svg';
import Button from './Button';

export default function Hero() {
    return (
        <>
            <section className='mainContainer'>
                <div className='mainContainer__leftText'>
                    <span className='letter1'>More than just <br/>shorter links</span>
                    <span className='letter2'>Build your brand's recognition and get detailed <br/> insights on how your links are performing.</span>
                    <Button type="btn btn--main" text="Get Started"/>
                </div>
                <div className='mainContainer__rightImage'>
                    <IllustrationWorking />
                </div>
            </section>
        </>
    )
}