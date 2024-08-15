import usericon from "./icon.webp"

export default function Topbar({name,imageurl,memberList}){
    // console.log(imageurl)
    return(
        <div name="namesection" className="flex h-16 border-b border-gray-600 ">
                <div className="flex w-2/3 h-full p-4 border items-center space-x-2 border-box">
                        <img src={imageurl?imageurl:usericon} className="w-7 h-7 border rounded-full border-gray-800"></img>
                        <h1 className="text-gray-400 text-xl">{name}</h1>
                </div>
                <div className="flex flex-row-reverse w-1/3 h-full p-4 border items-center space-x-2 border-box" >
                <svg xmlns="http://www.w3.org/2000/svg" onClick={()=>{memberList(prev=>!prev)}} viewBox="0 0 128 512" className="w-7 h-7 fill-slate-300 hover:fill-[#3a31d8]"><path d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z"/></svg>
                </div>
            </div>
    )
}