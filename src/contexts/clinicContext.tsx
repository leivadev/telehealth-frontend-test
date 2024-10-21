import { createContext } from 'react';
import { ClinicInfoProps } from '@/components/clinics/ClinicItem';

interface ClinicContextType {
  clinicItems: ClinicInfoProps[];
  addClinicItem: (clinic: ClinicInfoProps) => void;
}

export const ClinicContext = createContext<ClinicContextType | undefined>(undefined);