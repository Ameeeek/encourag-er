import { useState } from "react";


const Utama = ({quoteList, store}) => {    // {quotelist merupakan prop dari parent file yang berisi list object nested array quote}


    const [inputQuote, setInputQuote] = useState();


    function handleQuote(event) {
        setInputQuote({...inputQuote, quote: event.target.value});
    }
    function handleAuthor(event) {
        setInputQuote({...inputQuote, by: event.target.value});
    }
    function submitAdd(event){
        event.preventDefault();
        store(inputQuote)
    }
    return (
        <div className="justify-evenly flex-wrap  flex">
            {quoteList.map((quote) => ( // quoteList.map merupakan fungsi iterasi/loop untuk mengakses isi dari quoteList dan berisi parameter quote
                <div className="cards mx-4 my-4 w-96 bg-white ">
                    <p className="p-2 font-kutip text-4xl">
                        "
                    </p>
                    <p className="text-center  p-12 font-hammer max-w-4xl text-base">{quote.isi}<br/>-{quote.by} </p>
                    <p className="p-2 font-kutip text-right text-4xl">
                        "
                    </p>
                </div>
            ))}

            <div id="formtambah">
                <h5 className="text-white">
                    Add message
                </h5>
                <hr />
                <form className="form-row" onSubmit={submitAdd}> 
                    <div className="grid grid-cols-3">
                        <input type="text" name="quote" className="mx-2 my-2" placeholder="quote" onChange={handleQuote}/>
                    </div>
                    <div className="grid grid-cols-3">
                        <input type="text" name="by" className="mx-2 my-2" placeholder="by" onChange={handleAuthor}/>
                    </div>
                    <div className="grid grid-cols-3">
                        <input type="submit" className="mx-2 my-2 bg-primary" value="Submit"/>
                    </div>
                </form>
            </div>
        </div>
    )
}   


export default Utama;