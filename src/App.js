import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToDoHome } from './component/to-do-home';
import { UserRegister } from './component/user-register';
import { UserLogin } from './component/user-login';
import { UserDashBoard } from './component/user-dashboard';
import { AddTask } from './component/add-task';
import { EditTask } from './component/edit-task';
import { UserError } from './component/user-error';

function App() {
  return (
    <div className="container-fluid todo-background">
      <BrowserRouter>
    
        <section>
          <Routes>
          <Route path='/' element={<ToDoHome />} />
          <Route path='register' element={<UserRegister/>} />
          <Route path='login' element={<UserLogin/>} />
          <Route path='dashboard' element={<UserDashBoard/>} />
          <Route path='add-task' element={<AddTask/>} />
          <Route path='edit-task' element={<EditTask/>} />
          <Route path='error' element={<UserError/>} />


            
          </Routes>
        </section>
      </BrowserRouter>

    </div>
  );
}

export default App;
