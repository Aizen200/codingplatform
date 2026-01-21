import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Question from "./pages/Question";
import Topics from "./pages/Topics";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} ></Route>
<Route path="/login" element={<Login />} />
<Route path="/auth/signup" element={<Signup />} />
<Route path="/question" element={<Question/>}/>
<Route path="/questions/:topic" element={<Topics/>}/>
      
    </Routes>
  );
};

export default App;