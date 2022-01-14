// import { useState } from "react";


const Loading = () => {    // {quotelist merupakan prop dari parent file yang berisi list object nested array quote}
    return (
        <div className="bg-secondary w-full mt-48 font-hammer text-primary h-screen text-center text-4xl">
            <p>Retrieving some data please wait... </p>
        </div>
    )
}   


export default Loading;