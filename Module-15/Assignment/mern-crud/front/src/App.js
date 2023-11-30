import AddUser from "./components/AddUser";
import NavBar from "./components/NavBar";
import ShowStudents from "./components/ShowStudents";
import {BrowserRouter, Routes,Route} from "react-router-dom";
import EditUser from "./components/EditUser";
function App() {
  return (
    <div>
        <BrowserRouter>
            <NavBar/>
            <Routes>
                <Route path='/' element={<ShowStudents/>}/>
                <Route path='/add' element={<AddUser/>}/>
                <Route path={'/edit/:id'} element={<EditUser/>}/>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
