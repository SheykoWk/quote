import Quote from './Quote';
import QuoteAuthor from './QuoteAuthor'
const QuoteInfo = ({data}) => {
    return(
        <div className='blockquote'>
            <Quote quote={data.quote}/>
            <QuoteAuthor author={data.author}/>
        </div>
    )
}
export default QuoteInfo