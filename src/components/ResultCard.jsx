import Button from './Button';

export function ResultCard({ originalLink, shortLink }) {

    
    const handleCopy = (event) => {
        const value = event.target.dataset.shortlink;
        navigator.clipboard.writeText(value);
        
        const copy = document.querySelectorAll('.btn--result--card');
        copy.forEach(y => {
            y.classList.remove('copied');
            y.innerHTML = "Copy";
        })
        event.target.innerHTML = "Copied!";
        event.target.className = "btn--result--card copied";

    }

    return (
        <div className='shortedUrlWrapper'>
            <span className='originalUrl'>{originalLink}</span>
            <a className='shortedUrl' href={shortLink} target="_blank" rel="noreferrer">{shortLink}</a>
            <Button id="copyButton" dataShortLink={shortLink} estilo="btn--result--card" text="Copy" childClick={handleCopy}/>
        </div>
    )
}