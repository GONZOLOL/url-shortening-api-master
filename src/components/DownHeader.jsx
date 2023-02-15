import {ReactComponent as IllustrationWorking} from '../images/illustration-working.svg';
import Button from './Button';

export default function DownHeader() {
    return (
        <>
            <section className='mainWrapper'>
                <div className='Container'>
                    <div className='Container__leftText'>
                        <span className='letter1'>More than just <br/>shorter links</span>
                        <span className='letter2'>Build your brand's recognition and get detailed <br/> insights on how your links are performing.</span>
                        <Button estilo="btn btn--main" text="Get Started"/>
                    </div>
                    <div className='Container__rightImage'>
                        <IllustrationWorking />
                    </div>
                </div>
            </section>
        </>
    )
}