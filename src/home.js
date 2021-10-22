import {Link} from 'react-router-dom';
import Wave from 'react-wavify';

const home = () =>{
    return(
        <div className="  mt-12 flex flex-col  items-center ">
            <h3 className="text-4xl text-center my-8 font-pacifico  z-50 text-primary"> hello beautiful soul</h3>
            <h3 className="text-5xl text-white text-center z-40 font-hammer  max-w-5xl ">encourag-er is a place where you find encouragement and comfort message from people around every corner of the world, you can also write your message and hopefully it will help people who needs it</h3>
            <Link to="/utama" className="text-secondary z-30 mt-12 text-2xl font-hammer p-4 rounded-2xl hover:text-white ease-linear duration-100 bg-primary"> write some messages!</Link>
            <Wave className="h-full w-full absolute z-0  " fill='#52424D' paused={false} options={{height: 300,amplitude:190,speed: 0.15,points: 2
        }}/>
        </div> 
        
    )
}

export default home;