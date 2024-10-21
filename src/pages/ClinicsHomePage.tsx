import ClinicItem from '@/components/clinics/ClinicItem';
import { Button } from '@/components/ui/button';
import {
    Table,
    TableBody,
    TableHead,
    TableHeader,
    TableRow,
    TableCell,
} from "@/components/ui/table";
import { PlusCircleIcon } from 'lucide-react';
import { Link } from "react-router-dom";
import useClinicContext from '@/hooks/use-clinic-context';

// const clinics = [
//     {
//         ph: 'L',
//         image: 'assets/clinic1.webp',
//         name: 'Clinic 1',
//         contact: 'Dr. John Doe',
//         address: '123 Main St, City, State',
//         phone: '123-456-7890',
//         email: 'clinic1@example.com',
//         status: 'Active',
//         startDate: '01/01/2021',
//         billingCycle: 'Monthly',
//         payment: '$100',
//         nextBillingDate: '02/01/2021',
//     },
//     {
//         ph: 'T',
//         image: 'assets/clinic2.webp',
//         name: 'Clinic 2',
//         contact: 'Dr. Jane Doe',
//         address: '456 Main St, City, State',
//         phone: '098-765-4321',
//         email: 'clinic2@example.com',
//         status: 'Active',
//         startDate: '02/01/2021',
//         billingCycle: 'Monthly',
//         payment: '$150',
//         nextBillingDate: '03/01/2021',
//     },
//     {
//         ph: 'L',
//         image: 'assets/clinic3.webp',
//         name: 'Clinic 3',
//         contact: 'Dr. John Smith',
//         address: '789 Main St, City, State',
//         phone: '543-210-6789',
//         email: 'clinic3@example.com',
//         status: 'Active',
//         startDate: '03/01/2021',
//         billingCycle: 'Monthly',
//         payment: '$200',
//         nextBillingDate: '04/01/2021',
//     },
//     {
//         ph: 'T',
//         image: 'assets/clinic4.webp',
//         name: 'Clinic 4',
//         contact: 'Dr. Jane Smith',
//         address: '987 Main St, City, State',
//         phone: '678-901-2345',
//         email: 'clinic4@example.com',
//         status: 'Active',
//         startDate: '04/01/2021',
//         billingCycle: 'Monthly',
//         payment: '$250',
//         nextBillingDate: '05/01/2021',
//     }
// ];

const ClinicsHome = () => {

    const clinicItems = useClinicContext().clinicItems.map((clinic, index) => (
        <ClinicItem key={index} {...clinic} />
    ));

    return (
        <main className='main-content my-2 mx-4 lg:my-8 lg:mx-16 overflow-y-auto'>
            <div className='flex gap-4 justify-between items-center mb-4'>
                <h1 className='text-4xl font-bold'>Clinics</h1>
                <Button asChild variant={'default'}>
                    <Link to="/add-clinic">
                        <PlusCircleIcon size={24} className='mr-2'/>
                        Add new clinic
                    </Link>
                </Button>
            </div>
            <div className="overflow-x-auto">
                <Table className="min-w-full divide-y divide-gray-200">
                    <TableHeader>
                        <TableRow>
                            <TableHead className='text-center font-semibold text-slate-800 min-w-1 max-w-1'>PH</TableHead>
                            <TableHead className='text-center font-semibold text-slate-800 w-40'>Name</TableHead>
                            <TableHead className='text-center font-semibold text-slate-800'>Contact</TableHead>
                            <TableHead className='text-center font-semibold text-slate-800'>Address</TableHead>
                            <TableHead className='text-center font-semibold text-slate-800'>Phone</TableHead>
                            <TableHead className='text-center font-semibold text-slate-800'>Email</TableHead>
                            <TableHead className='text-center font-semibold text-slate-800'>Status</TableHead>
                            <TableHead className='text-center font-semibold text-slate-800'>Start Date</TableHead>
                            <TableHead className='text-center font-semibold text-slate-800'>Billing Cycle</TableHead>
                            <TableHead className='text-center font-semibold text-slate-800'>Payment</TableHead>
                            <TableHead className='text-center font-semibold text-slate-800'>Next Billing Date</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {clinicItems.length === 0 && (
                            <TableRow>
                                <TableCell colSpan={11} className='text-center text-gray-500 bg-slate-100 h-24'>No clinics found.</TableCell>
                            </TableRow>
                        )}
                        {clinicItems}
                    </TableBody>
                </Table>
            </div>
        </main>
    );
};

export default ClinicsHome;
