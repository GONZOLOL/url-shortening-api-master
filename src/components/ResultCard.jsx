import Button from './Button';

export function ResultCard({ originalLink, shortLink }) {

    const handleCopy = (event) => {
        const value = event.target.dataset.shortlink;
        navigator.clipboard.writeText(value);
    }

    return (
        <div className='shortedUrlWrapper'>
            <span className='originalUrl'>{originalLink}</span>
            <a className='shortedUrl' href={shortLink} target="_blank" rel="noreferrer">{shortLink}</a>
            <Button dataShortLink={shortLink} estilo="btn btn--input" text="Copy" childClick={handleCopy} />
        </div>
    )
}