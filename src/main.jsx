const utama = ({quoteList}) =>{
    console.log(quoteList)
    return (
        <div className="justify-evenly flex-wrap  flex">
            {quoteList.map((quote) => (
                <div className="cards mx-4 my-4 bg-white font-hammer">
                    <p className="p-2 text-2xl">
                        "
                    </p>
                    <p className="text-center  p-12  text-base">{quote.isi}</p>
                    <p className="p-2 text-right text-2xl">
                        "
                    </p>
                </div>
            ))}
                
        </div>
    )
}

export default utama;