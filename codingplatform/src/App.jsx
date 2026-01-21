import { Routes, Route ,Navigate, replace} from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Question from "./pages/Question";
import Topics from "./pages/Topics";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/auth/login" replace/> } ></Route>
<Route path="/auth/login" element={<Login />} />
<Route path="/auth/signup" element={<Signup />} />
<Route path="/question" element={<Question/>}/>
<Route path="/questions/:topic" element={<Topics/>}/>
      
    </Routes>
  );
};

export default App;