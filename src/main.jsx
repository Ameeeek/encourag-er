// import { useState } from "react";


const Utama = ({quoteList}) => {    // {quotelist merupakan prop dari parent file yang berisi list object nested array quote}


    return (
        <div className="justify-evenly flex-wrap   flex">
            {quoteList.map((quote) => ( 
                // quoteList.map merupakan fungsi iterasi/loop untuk mengakses isi dari quoteList dan berisi parameter quote
                <div className="cards mx-4 my-4 w-96 bg-white ">
                    <p className="p-2 font-kutip text-4xl">
                        "
                    </p>
                    <p className="text-center  p-12 font-hammer max-w-4xl text-base">{quote.quote}<br/>-{quote.by} </p>
                    <p className="p-2 font-kutip text-right text-4xl">
                        "
                    </p>
                </div>
            ))}
        </div>
    )
}   


export default Utama;