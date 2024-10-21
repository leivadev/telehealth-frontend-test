import { useContext } from 'react';
import { ClinicContext } from '@/contexts/clinicContext.tsx';

const useClinicContext = () => {
  const context = useContext(ClinicContext);
  if (!context) {
    throw new Error('useClinicContext must be used within a ClinicProvider');
  }
  return context;
};

export default useClinicContext;