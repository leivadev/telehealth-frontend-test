import { Routes, Route } from 'react-router-dom';
import SideNavbar from './components/SideNavbar';
import ClinicsHomePage from './pages/ClinicsHomePage';
import AddClinicPage from './pages/AddClinicPage';

function App() {
  return (
    <div className="app-container grid grid-cols-[1fr_5fr] h-screen">
      <SideNavbar />
      <Routes>
        <Route path="/" element={<ClinicsHomePage />} />
        <Route path="add-clinic" element={<AddClinicPage />} />
      </Routes>
    </div>
  );
}

export default App;
