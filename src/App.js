import { Routes,Route } from "react-router-dom";
import Login from './login';
import Person from "./person";
import MarriageRegistry from "./marriage-registry";
import Family from "./family";
import FamilyIndividual from "./family-individual";
import ForgotPassword from './forgot-password';
import MarriageRegistryAdd from "./marriage-registry-add";
import AddFamilyRelation from "./add-family-relation";
import AddFamily from "./add-family";

import Example from './pieChart';
import Groups from "./Transactions/groups";
import LedgerIndividual from "./Transactions/ledger-individual";
import Ledgers from "./Transactions/ledgers";
import Voucher from "./Transactions/voucher";
import VerifyCertificate from "./Landing Page/verify-certificate";
import Index from "./Landing Page/indexPage";
import Sponsors from "./sponsors";
import BaptismRegistryAdd from "./Registries/baptism-registry-add";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Index />} exact />
        <Route path="/login" element={<Login />} exact />
        <Route path="/person" element={<Person />} exact />
        <Route path="/marriage-registry" element={<MarriageRegistry />} exact />
        <Route path="/family" element={<Family />} exact />
        <Route path="/family-individual" element={<FamilyIndividual />} exact />
        <Route path="/pie-chart" element={<Example />} exact />
        <Route path="/forgot-password" element={<ForgotPassword />} exact />
        <Route path="/marriage-registry-add" element={<MarriageRegistryAdd />} exact />
        <Route path="/add-family-relation" element={<AddFamilyRelation />} exact />
        <Route path="/add-family" element={<AddFamily />} exact />
        <Route path="/groups" element={<Groups />} exact />
        <Route path="/ledger-individual" element={<LedgerIndividual />} exact />
        <Route path="/ledgers" element={<Ledgers />} exact />
        <Route path="/voucher" element={<Voucher />} exact />
        <Route path="/verify-certificate" element={<VerifyCertificate />} exact />
        <Route path="/index" element={<Index />} exact />
        <Route path="/sponsors" element={<Sponsors />} exact />
      </Routes>
    </>
  );
}

export default App;
