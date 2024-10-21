import React, { useState } from 'react';
import { TableCell, TableRow } from "@/components/ui/table";

export type ClinicInfoProps = {
    ph: string;
    image: string;
    name: string;
    contact: string;
    address: string;
    phone: string;
    email: string;
    status: string;
    startDate: string;
    billingCycle: string;
    payment: string;
    nextBillingDate: string;
};

const ClinicItem: React.FC<ClinicInfoProps> = ({
    ph,
    image,
    name,
    contact,
    address,
    phone,
    email,
    status,
    startDate,
    billingCycle,
    payment,
    nextBillingDate
}) => {
    const [imgSrc, setImgSrc] = useState(image);

    const handleImageError = () => {
        setImgSrc('src/assets/default-image.webp');
    };

    return (
        <TableRow className='text-center'>
            <TableCell className="font-bold min-w-1 max-w-1">{ph}</TableCell>
            <TableCell className='grid grid-cols-2 items-center justify-center w-40'>
                <img src={imgSrc} alt={`Logo of ${name}`} className="w-16 h-12 object-cover" onError={handleImageError} />
                {name}
            </TableCell>
            <TableCell>{contact}</TableCell>
            <TableCell>{address}</TableCell>
            <TableCell>{phone}</TableCell>
            <TableCell>{email}</TableCell>
            <TableCell>{status}</TableCell>
            <TableCell>{startDate}</TableCell>
            <TableCell>{billingCycle}</TableCell>
            <TableCell>{payment}</TableCell>
            <TableCell>{nextBillingDate}</TableCell>
        </TableRow>
    );
};

export default ClinicItem;
