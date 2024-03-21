import AdminLogin from "./Components/AdminLogin"
import Navbar from "./Components/Navbar"
import StaffLogin from "./Components/StaffLogin"
import StudentFeedback from "./Components/StudentFeedback"
import StudentLogin from "./Components/StudentLogin"
import AdminPortal from "./Components/AdminPortal"
import {BrowserRouter,Routes,Route} from "react-router-dom"
function App() {

  return (
    <>
    {/* Having Navbar as static for all page */}
    <Navbar/>

    {/* Setting Routers to handle navigation of pages from 
        Address bar */}
    <BrowserRouter>
      <Routes>
          <Route index element={<StudentLogin/>} />
          <Route path="/staff" element={<StaffLogin />} />
          <Route path="/admin" element={<AdminLogin />} />
          <Route path="/adminPortal" element={<AdminPortal />} />
          <Route path="/feedback" element={<StudentFeedback/>} />
      </Routes>
    </BrowserRouter>

    {/* Dynamic Content */}

    </>
  )
}

export default App
