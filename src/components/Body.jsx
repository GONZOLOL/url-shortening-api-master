import {ReactComponent as IllustrationWorking} from '../images/illustration-working.svg';

function Body() {
    return (
        <>
            <div className='main-container'>
                <div className='left-text'>
                    <p className='letter1'>More than just <br/>shorter links</p>
                    <p className='letter2'>Build your brand's recognition and get detailed <br/> insights on how your links are performing.</p>
                    <button className='boton'>Get Started</button>
                </div>
                <div className='right-image'>
                    <IllustrationWorking />
                </div>
            </div>
            <div className='input-group'>
                <input type="text" />
                <button>Shorten it!</button>
            </div>
            <div className='secondary-container'>
                <div className='secondaryInfo'>
                    <p className='letter3'>Advanced Statistics</p>
                    <p className='letter4'>Track how your links are performing across the web with <br/> our advanced statistics dashboard.</p>
                </div>
            </div>
        </>
    )
}

export default Body;

