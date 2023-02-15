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
        <form onSubmit={submit}>
          <section className='inputContainer'>
              <section className='inputContainer__inputGroup'>
                  <div className='inputGroup__content'>
                  <input
                      required
                      type='url'
                      id='url'
                      name='url'
                      pattern='https?://.*'
                      size='30'
                      placeholder='Shorten a link here...'
                  />
                      <Button type="submit" estilo="btn btn--input" text="Shorten it!" />
                  </div>
              </section>
          </section>
        </form>
          <div className='downInputWrapper'>
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