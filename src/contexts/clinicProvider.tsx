import React, { useState, useEffect, ReactNode } from 'react';
import { ClinicContext } from './clinicContext.tsx';
import { ClinicInfoProps } from '@/components/clinics/ClinicItem';

export const ClinicProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [clinicItems, setClinicItems] = useState<ClinicInfoProps[]>(() => {
    const storedClinics = localStorage.getItem('clinics');
    return storedClinics ? JSON.parse(storedClinics) : [];
  });;

  useEffect(() => {
    localStorage.setItem('clinics', JSON.stringify(clinicItems));
  }, [clinicItems]);

  const addClinicItem = (clinic: ClinicInfoProps) => {
    setClinicItems((prevItems) => [...prevItems, clinic]);
  };

  return (
      <ClinicContext.Provider value={{ clinicItems, addClinicItem }}>
          {children}
      </ClinicContext.Provider>
  );
};