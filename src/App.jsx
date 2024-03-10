import AdminLogin from "./Components/AdminLogin"
import Navbar from "./Components/Navbar"
import StaffLogin from "./Components/StaffLogin"
import StudentFeedback from "./Components/StudentFeedback"
import StudentLogin from "./Components/StudentLogin"
import {BrowserRouter,Routes,Route} from "react-router-dom"
function App() {

  return (
    <>
    <Navbar/>
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<StudentLogin />}> */}
          <Route index element={<StudentLogin/>} />
          <Route path="staff" element={<StaffLogin />} />
          <Route path="admin" element={<AdminLogin />} />
         
        {/* </Route> */}
      </Routes>
    </BrowserRouter>
    <StudentFeedback/>
    </>
  )
}

export default App
