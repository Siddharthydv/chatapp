import { Link, Outlet } from "react-router-dom";
import Mssgcard from "./Mssgcard";
import Bgsvg from "../assets/bg.svg"
export default function Menubar(){
    let a=[1,3,4,5,5,6,7,7,8,2,2,2,2,123,]
    return(
    <div  className="flex w-full " >
        <div className=" h-full w-1/5 bg-slate-50 rounded-md  box-border p-1 space-y-1 overflow-scroll" >
            {/* <Link to='chatpage'><button>clickme</button></Link>
            <Link to='./'><button>goback</button></Link> */}
            {a.map(item=> (<Link to='chatpage'><Mssgcard/></Link>)) }      
        </div>
        <Outlet/>
    </div>
    )
}