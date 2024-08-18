import usericon from "../icon.webp"

export default function Topbar({name,imageurl,memberList,setDeleteCard}){
    // console.log(imageurl)
    return(
        <div name="namesection" className="flex h-16 border-b border-gray-600 ">
                <div className="flex w-2/3 h-full p-4 items-center space-x-2 border-box">
                        <img src={imageurl?imageurl:usericon} className="w-7 h-7 border rounded-full border-gray-800"></img>
                        <h1 className="text-gray-400 text-xl">{name}</h1>
                </div>
                <div className="flex flex-row-reverse w-1/3 h-full p-4 items-center space-x-10 border-box" >
                    <svg className="w-6 h-6 fill-slate-300 hover:fill-[#3a31d8]" onClick={()=>{setDeleteCard(prev=>!prev)}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M135.2 17.7C140.6 6.8 151.7 0 163.8 0L284.2 0c12.1 0 23.2 6.8 28.6 17.7L320 32l96 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 96C14.3 96 0 81.7 0 64S14.3 32 32 32l96 0 7.2-14.3zM32 128l384 0 0 320c0 35.3-28.7 64-64 64L96 512c-35.3 0-64-28.7-64-64l0-320zm96 64c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16z"/></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" onClick={()=>{memberList(prev=>!prev)}} viewBox="0 0 128 512" className="w-7 h-7 fill-slate-300 hover:fill-[#3a31d8]"><path d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z"/></svg>
                </div>
        </div>
    )
}