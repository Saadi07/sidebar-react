import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Dashboard from "./components/pages/Dashboard";
import Users from "./components/pages/Users";
import Taskers from "./components/pages/Taskers";
import Orders from "./components/pages/Orders";
import Setting from "./components/pages/Setting";

function App() {
  return (
    <Router>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/users" element={<Users />} />
          <Route path="/taskers" element={<Taskers />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/settings" element={<Setting />} />
          <Route path="*" element={<> not found</>} />
        </Routes>
      </Sidebar>
    </Router>
  );
}

export default App;
