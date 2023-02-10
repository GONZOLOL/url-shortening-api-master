import {ReactComponent as IllustrationWorking} from '../images/illustration-working.svg';

function Body() {
    return (
        <>
            <section className='mainContainer'>
                <div className='mainContainer__leftText'>
                    <span className='letter1'>More than just <br/>shorter links</span>
                    <span className='letter2'>Build your brand's recognition and get detailed <br/> insights on how your links are performing.</span>
                    <button className='boton'>Get Started</button>
                </div>
                <div className='mainContainer__rightImage'>
                    <IllustrationWorking />
                </div>
                </section>
                <section className='inputGroup'>
                    <div className='inputGroup__content'>
                        <input type="text" placeholder='Shorten a link here...'/>
                        <button>Shorten it!</button>
                    </div>
                </section>
                <section className='secondaryContainer'>
                    <div className='secondaryInfo'>
                        <span className='letter3'>Advanced Statistics</span>
                        <span className='letter4'>Track how your links are performing across the web with <br/> our advanced statistics dashboard.</span>
                    </div>
            </section>
        </>
    )
}

export default Body;

