import usericon from "./icon.webp"
export default function Topbar({name,imageurl}){
    return(
        <div name="namesection" className=" h-16 border-b border-gray-600 ">
                <div className="flex w-2/3 h-full p-4  items-center space-x-2 border-box">
                        <img src={usericon} className="w-7 h-7 border rounded-full border-gray-800"></img>
                        <h1 className="text-gray-400 text-xl">{name}</h1>
                </div>
            </div>
    )
}