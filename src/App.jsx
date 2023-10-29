import { Routes, Route } from "react-router-dom"
import SignupForm from "./components/SignupForm";
import LoginForm from "./components/LoginForm";
import Homepage from "./components/Homepage";
const App = () => {
  return (
    <div className="">
      <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/login" element={<LoginForm />} />
      <Route path="/signup" element={<SignupForm />} />

      </Routes>
    </div>
  )
}

export default App