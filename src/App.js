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
import VerifyCertificate from "./LandingPage/verify-certificate";
import Index from "./LandingPage/indexPage";
import Sponsors from "./sponsors";
import BaptismRegistryAdd from './Registries/baptism-registry-add';
import BaptismRegistry from './Registries/baptism-registry';
import BaptismRegistryAll from './Registries/baptism-registry-all';
import DeathRegistry from './Registries/death-registry';
import DeathRegistryAdd from './Registries/death-registry-add';
import DeathRegistryAll from './Registries/death-registry-all';
import EngagementRegistry from './Registries/engagement-registry';
import EngagementRegistryAdd from './Registries/engagement-registry-add';
import EngagementRegistryAll from './Registries/engagement-registry-all';
import MarriageRegistryAll from './Registries/marriage-registry-all';
import CreateEvent from './Sponsors/create-event';
import ViewEvent from './Sponsors/view-event';
import IndividualEvent from './Sponsors/individual-event';
import AllAnnounce from './all-announce'
import AddAnnounce from './add-announce'
import MarriageCertificate from "./certificates/marriage-certificate";
import BaptismCertificate from "./certificates/baptism-certificate";
import NewAdmin from './super-admin/new-admin'

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
        <Route path="/all-announce" element={<AllAnnounce />} exact />
        <Route path="/add-announce" element={<AddAnnounce />} exact />
        <Route path="/baptism-registry-add" element={<BaptismRegistryAdd />} exact />
        <Route path="/baptism-registry-all" element={<BaptismRegistryAll />} exact />
        <Route path="/baptism-registry" element={<BaptismRegistry />} exact />
        <Route path="/death-registry" element={<DeathRegistry />} exact />
        <Route path="/death-registry-add" element={<DeathRegistryAdd />} exact />
        <Route path="/death-registry-all" element={<DeathRegistryAll />} exact />
        <Route path="/engagement-registry" element={<EngagementRegistry />} exact />
        <Route path="/engagement-registry-add" element={<EngagementRegistryAdd />} exact />
        <Route path="/engagement-registry-all" element={<EngagementRegistryAll />} exact />
        <Route path="/marriage-registry-all" element={<MarriageRegistryAll />} exact />
        <Route path="/create-event" element={<CreateEvent />} exact />
        <Route path="/view-event" element={<ViewEvent />} exact />
        <Route path="/individual-event" element={<IndividualEvent />} exact />
        <Route path="/marriage-certificate" element={<MarriageCertificate />} exact />
        <Route path="/baptism-certificate" element={<BaptismCertificate />} exact />
        <Route path="/new-admin" element={<NewAdmin />} exact />
      </Routes>
    </>
  );
}

export default App;
