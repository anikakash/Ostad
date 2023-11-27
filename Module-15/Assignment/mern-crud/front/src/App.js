

import AddUser from "./components/AddUser";
import NavBar from "./components/NavBar";
import ShowStudents from "./components/ShowStudents";
import {BrowserRouter, Routes,Route} from "react-router-dom";
function App() {
  return (
    <div>
        <BrowserRouter>
            <NavBar/>
            <Routes>
                <Route path='/' element={<ShowStudents/>}/>
                <Route path='/add' element={<AddUser/>}/>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
