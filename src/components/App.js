import {ReactComponent as IllustrationWorking} from '../images/illustration-working.svg';

function App() {
  return (
    <>
      <div className='main-container'>
        <div className='left-text'>
          <p className='letter1'>More than just <br/>shorter links</p>
          <p className='letter2'>Build your brand's recognition and get detailed <br/> insights on how your links are performing.</p>
          <a className='boton'>Get Started</a>
        </div>
        <div className='right-image'>
          <IllustrationWorking />
        </div>
      </div>
      <div className='input-group'>
        <input type="text" />
      </div>
      <div className='secondary-container'>
        
      </div>
    </>
  );
  
}

export default App;
