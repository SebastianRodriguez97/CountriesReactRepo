import './App.css';
import Countries from "./Pages/Countries/Countries";
import Start from "./Pages/Start/Start";
import Header from "./Components/Header";
import ProtectedRoute from "./Components/Security/ProtectedRoute";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route index path="/" element={ <Start /> } />
        <Route path="/countries" element={
          <ProtectedRoute>
            <Header />
            <Countries />
          </ProtectedRoute>
        } />
      </Routes>
    </div>
  );
}