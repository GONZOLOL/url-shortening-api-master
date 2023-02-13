import {ReactComponent as IllustrationWorking} from '../images/illustration-working.svg';
import BrandRecognition from '../images/icon-brand-recognition.svg';
import DetailedRecords from '../images/icon-detailed-records.svg';
import FullyCustomizable from '../images/icon-fully-customizable.svg';
import Button from "./Button";
import Card from "./Card";

export default function Content() {
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
            <section className='inputContainer'>
                <section className='inputContainer__inputGroup'>
                    <div className='inputGroup__content'>
                        <input type="text" placeholder='Shorten a link here...'/>
                        <Button type="btn btn--input" text="Shorten it!" />
                    </div>
                </section>
            </section>
            <section className='secondaryContainer'>
                <div className='secondaryContainer__info'>
                    <span className='letter3'>Advanced Statistics</span>
                    <span className='letter4'>Track how your links are performing across the web with <br/> our advanced statistics dashboard.</span>
                </div>
                <div className='cardContainer'>
                    <Card 
                        tittle="Brand Recognition" 
                        text="Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content." 
                        svg= {BrandRecognition}
                    />
                    <Card 
                        tittle="Detailed Records" 
                        text="Gain insights into who is clicking your links. Knowing when and where people engage with your content helps intorm better decisions." 
                        svg= {DetailedRecords}
                    />
                    <Card 
                        tittle="Fully Customizable" 
                        text="Improve brand awareness and content discoverability through customizable links, supercharging audience engagement." 
                        svg= {FullyCustomizable}
                    />
                </div>
            </section>
            <section className='lastContent'>
                <span className="lastContent__mainText">Boost your links today</span>
                <Button type="btn btn--footer" text="Get Started" />
            </section>
        </>
    )
}