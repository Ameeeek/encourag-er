import {Link} from 'react-router-dom';
const home = () =>{
    return(
        <div className=" container mt-12 flex flex-col  items-center ">
            <h3 className="text-4xl text-center my-8 font-pacifico   text-primary"> hello beautiful soul</h3>
            <h3 className="text-5xl text-white text-center font-hammer  max-w-5xl ">encourag-er is a place where you find encouragement and comfort message from people around every corner of the world, you can also write your message and hopefully it will help people who needs it</h3>
            <Link to="/utama" className="text-secondary my-24 text-2xl font-hammer p-4 rounded-2xl hover:text-white ease-linear duration-100 bg-primary"> write some messages!</Link>
        </div> 
    )
}

export default home;