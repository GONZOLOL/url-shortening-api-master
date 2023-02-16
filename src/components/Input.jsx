import { useEffect, useState } from 'react';
import { ShrtcodeApi } from '../api/ShrtcodeApi';
import { ResultCard } from './ResultCard';
import Button from "./Button"

export default function Input() {
  const [outputUrl, setOutputUrl] = useState([]);

  function submit(event) {
    event.preventDefault();
    const url = event.target.url.value;

    ShrtcodeApi(url)
      .then(data => updateLocalStorage(data));

    event.target.reset();
  }

  function updateLocalStorage(json) {
    const item = json.result;
    console.log("item", item);
    let outputUrl = localStorage.getItem('outputUrl');
    let outputUrlArray = [];

    if (outputUrl) {
      outputUrlArray = JSON.parse(outputUrl);
    }

    const formatedItem = 
    {
      'code': item.code,
      'original_link': item.original_link,
      'full_short_link': item.full_short_link
    };

    outputUrlArray.push(formatedItem);
    localStorage.setItem('outputUrl', JSON.stringify(outputUrlArray));

    setOutputUrl(outputUrlArray);
  }

  function getLocalStorage() {
    const outputUrl = localStorage.getItem('outputUrl');

    if (outputUrl) {
      setOutputUrl(JSON.parse(outputUrl));
    }
  }

  useEffect(() => {
    getLocalStorage()
  }, [])

  return (
    <>
      <section className='inputWrapper'>
        <div className='shortenerContainer'>
          <form onSubmit={submit} className='shortenerContainer__inputGroup'>
              <input
                required
                type='url'
                id='url'
                name='url'
                pattern='https?://.*'
                size='30'
                placeholder='Shorten a link here...'
                className='shortenerInput'
              />
              <Button 
                type="submit" 
                estilo="btn shortenerButton" 
                text="Shorten it!"
              />
          </form>
        </div>
      </section>
      <section className='resultCard__wrapper'>
        <div className='resultCard__content'> 
          { outputUrl.map( (short, e) =>
                <ResultCard
                  key = {short.code + '-' + e}
                  originalLink = {short.original_link}
                  shortLink = {short.full_short_link}
                />
            )}
        </div>
      </section>
    </>
  )
}