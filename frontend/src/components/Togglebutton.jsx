import { useContext } from "react";
import { Wscontext } from "./home";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
export default function Togglebutton(){
    const [isToggled, setIsToggled] = useState(false);
    const ws=useContext(Wscontext)
    const userId=useSelector(state=>state.userdetails.userId)
    const handleToggle = () => {
      setIsToggled(!isToggled);
      if(!isToggled){
        ws.send(JSON.stringify({
            type:"busy"
        }))
        console.log("busy")
      }
      else{
        ws.send(JSON.stringify({
            type:"notbusy"
        }))
        console.log("notbusy")
      }
    };
    useEffect(()=>{
        const checklaststatus=(event)=>{
            const message = JSON.parse(event.data);
            console.log(message)
            if (message.type ==='status') {
                if(message.busyuserIds.indexOf(userId)!==-1)
                    setIsToggled(true)
                else 
                    setIsToggled(false)
            }
        }


        ws.addEventListener('message',checklaststatus)
        // Cleanup the event handler when the component unmounts
        return () => {
            ws.removeEventListener('message',checklaststatus);
        };
    },[])
    
    return (
      <label className="switch">
        <input type="checkbox" checked={isToggled} onChange={handleToggle} />
        <span className="slider round"></span>
      </label>
    );
  }
