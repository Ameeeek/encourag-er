import { useState } from 'react';
const Tambah = ({store}) =>{
    
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
    return(
    <div id="formtambah " className="bg-secondary  w-full h-screen    ">
        <h5 className="text-white text-left text-3xl mt-24 grid place-items-center font-hammer">
            Add message
        </h5>
        <form className="form-row grid place-items-center  text-xl font-hammer text-center" onSubmit={submitAdd}> 
            <div className="grid  place-items-stretch text-center ">
                <textarea type="text" name="quote" className="w-96 h-48 border-b  text-white bg-transparent my-2" placeholder="write your message here" onChange={handleQuote}/>
            </div>
            <div className="grid place-items-stretch text-center relative">
                <input type="text" name="by" className="peer border-b focus:outline-none relate w-96 h-12 bg-transparent text-white my-2" placeholder="Your name" onChange={handleAuthor}/>
            </div>
            <div className="grid place-items-end  my-4 text-2xl ease-linear duration-100 ">
                <input type="submit" className="bg-primary hover:bg-secondary text-secondary hover:text-primary cursor-pointer  font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" value="Submit"/>
            </div>
        </form>
    </div>
    )
}

export default Tambah;