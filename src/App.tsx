import { Routes, Route } from 'react-router-dom';
import SideNavbar from './components/SideNavbar';
import ClinicsHome from './pages/ClinicsHome';
import AddClinic from './pages/AddClinic';

function App() {
  return (
    <div className="app-container grid grid-cols-[1fr_5fr] h-screen">
      <SideNavbar />
      <div className="main-content p-4">
        <Routes>
          <Route path="/" element={<ClinicsHome />} />
          <Route path="add-clinic" element={<AddClinic />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
