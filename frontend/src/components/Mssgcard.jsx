import { Link } from "react-router-dom";
import usericon from "../assets/usericon.png"
export default function Mssgcard({avatar='',name='Siddharth Kumar Yadav'}){
    return (
        <div className=" flex h-24 w-full bg-[#3E92CC] rounded-md box-border">
            <div className="flex rounded-full w-20 bg-[[#3E92CC] justify-center items-center box-border">
                <img src={usericon} className="w-20"/>
            </div>
            <h6 className=" font-sans font-medium text-lg text-slate-200 m-5">{name}</h6>
        </div>
    )
}