import { useState } from 'react';
import data from '../quotes.json';
import QuoteInfo from './QuoteInfo';
import HeaderQuote from './HeaderQuote'
import FooterQuote from './FooterQuote'
const QuoteBox = () => {
    //random number for the position in the data json
    const minNum = 0;
    const maxNum = data.quotes.length;
    let random = Math.floor(Math.random() * (maxNum - minNum)) + minNum
    //initial state
    const [quote, setQuote] = useState(data.quotes[random]);
    return(
        <div className='quote-machine'>
            <HeaderQuote/>
            <main className='Quote-info'>
                <QuoteInfo data={quote}/>
                <div className='buttons'>
                    <button className='quote-button' onClick={() => {
                        random= Math.floor(Math.random() * (maxNum - minNum)) + minNum
                        setQuote(data.quotes[random])
                        }}>Change Quote</button>
                </div>
            </main>
            <FooterQuote/>
        </div>
    )
} 
export default QuoteBox;