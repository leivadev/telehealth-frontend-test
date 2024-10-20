import React from 'react';

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
    return (
        <tr>
            <td>{ph}</td>
            <td>
                <img src={image} alt={`Logo of ${name}`} onError={(e) => (e.currentTarget.src = 'assets/default-image.webp')} />
                {name}
            </td>
            <td>{contact}</td>
            <td>{address}</td>
            <td>{phone}</td>
            <td>{email}</td>
            <td>{status}</td>
            <td>{startDate}</td>
            <td>{billingCycle}</td>
            <td>{payment}</td>
            <td>{nextBillingDate}</td>
        </tr>
    );
};

export default ClinicItem;
