import {useSelector} from "react-redux"
export default  function Userchat({messages}){
    const userid=useSelector(state=>state.userdetails.userId)
    return (
        (messages.map((mssg)=>{
            if(mssg.senderId===userid)
                return( <div key={userid} className="flex flex-col bg-slate-300 w-full box-border p-2">
                    <div className="bg-red-500 w-1/3 box-border overflow-hidden break-words rounded-md">sssssssssssssssssssssssssssssssssssssssssssssssssssssddddddddd</div>
                </div>
                )
            else 
            return(<div key={mssg.senderId}className="flex flex-col bg-slate-300 w-full box-border p-2">
                <div className="bg-red-500 w-1/3 box-border overflow-hidden break-words rounded-md">sssssssssssssssssssssssssssssssssssssssssssssssssssssddddddddd</div>
            </div>)
        }))
       
    )
}