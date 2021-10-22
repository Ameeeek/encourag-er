import {Link} from 'react-router-dom';
import Wave from 'react-wavify';
import {BsGithub} from 'react-icons/bs';
import {SiFacebook, SiTwitter} from 'react-icons/si';
const home = () =>{
    return(
        <div className="  mt-12 flex flex-col  items-center ">
            <h3 className="text-4xl text-center my-8 font-pacifico  z-50 text-primary"> hello beautiful soul</h3>
            <h3 className="text-5xl text-white text-center z-40 font-hammer  max-w-5xl ">encourag-er is a place where you find encouragement and comfort message from people around every corner of the world, you can also write your message and hopefully it will help people who needs it</h3>
            <Link to="/utama" className="text-secondary z-30 mt-12 text-2xl font-hammer p-4 rounded-2xl  hover:text-white ease-linear duration-100 bg-primary"> write some messages!</Link>
            <Wave className="h-full w-full absolute z-0  " fill='#52424D' paused={false} options={{height: 300,amplitude:190,speed: 0.10,points: 3}}/>
            <div className="z-20 mt-24 font-hammer  text-white text-4xl w-full bg-accent p-32 h-full flex flex-col"> 
                <div className="flex flex-col my-12">
                <p>Github Repo</p> <a href="https://github.com/Ameeeek/encourag-er"><FooterIcon icon={<BsGithub size="30"/>}/></a>

                </div>
                <div>
                <p >Amek</p>
                </div>
                <div className="flex ">
                <a href="#"><FooterIcon icon={<SiFacebook size="30" className="mr-4"/>}/></a>
                <a href="#"><FooterIcon   icon={<SiTwitter size="30" className="mx-4"/>}/></a>
                </div>
            </div>
        </div> 
    );
}
const FooterIcon = ({icon}) => {
    return(
        <div clasName="footer-icon">
            {icon}
        </div>
    )
}
export default home;