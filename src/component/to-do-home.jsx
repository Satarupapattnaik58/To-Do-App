import { Link } from "react-router-dom";
export function ToDoHome(){
    return(
        <div>
            <h1 className="text-end pt-4">Your Appointment</h1>
            <main style={{height:'400px'}} className="me-4 pe-4 d-flex justify-content-end align-items-center">
                <Link to='/register' className="btn btn-light">New User Register</Link>
                <Link to='/login' className="btn btn-info">User Login</Link>
            </main>
        </div>
    )
}