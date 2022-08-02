import { Routes,Route } from "react-router-dom";
import Login from './login';
import Person from "./person";
import MarriageRegistry from "./marriage-registry";
import Family from "./family";
import FamilyIndividual from "./family-individual";


import Example from './pieChart';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} exact />
        <Route path="/login" element={<Login />} exact />
        <Route path="/person" element={<Person />} exact />
        <Route path="/marriage-registry" element={<MarriageRegistry />} exact />
        <Route path="/family" element={<Family />} exact />
        <Route path="/family-individual" element={<FamilyIndividual />} exact />

        <Route path="/pie-chart" element={<Example />} exact />
      </Routes>
    </>
  );
}

export default App;
