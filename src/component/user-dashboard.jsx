
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie"
import axios from "axios";

export function UserDashBoard(){

    const [cookies, setCookie, removeCookie] = useCookies('userid');
   

    const [appointments, setAppointments] = useState([{Appointment_Id:0, Title:'', Description:'', Date:Date(), UserId:''}]);

    let navigate = useNavigate();
    

    function LoadAppointments(){
        axios.get(`http://127.0.0.1:3400/get-appointments/${cookies['userid']}`)
        .then(response=>{
            setAppointments(response.data);

            
        })
    }

    useEffect(()=>{
        LoadAppointments();
    },[]);
   function handleSingout(){
    removeCookie('userid');
    Navigate('/');
   } 


    
    
    return(
        <div className="row pt-4">
            <div className="col-7">

            </div>

           
            <div className="col-5">
                <h3>{ cookies['userid']}- Dashboard <button className="btn btn-danger">Sign out</button></h3>
                <div className="mt-4">
                    {
                        appointments.map(appointment=>
                            <div key={appointment.Appointment_id} className="alert alert-Success alert-dismissible">
                            <button className="btn btn-close"></button>
                            <h2 className="alert-title">{appointment.title}</h2>
                            <p className="alert-text">{appointment.Description}</p>
                            <p>
                                {appointment.Date}
                            </p>
                    
                </div>
                        )
}
            </div>
            
        </div>
        </div>
    )
}