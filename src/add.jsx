import {BsPlus} from 'react-icons/bs';

const tambah = () =>{
    return(
        <div className=" flex justify-end">
            <button className="bg-primary  rounded-2xl">
            <TopIcon icon={<BsPlus size="38"/>} />
            </button>
        </div>
    )
}
const TopIcon = ({icon}) =>{ // menambahkan component untuk icon
    return(
        <div>
            {icon}
        </div>
    )
}
export default tambah;