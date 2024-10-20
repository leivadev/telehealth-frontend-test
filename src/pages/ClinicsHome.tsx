import ClinicItem from "@/components/clinics/ClinicItem";

const clinics = [
    {
        ph: "1",
        image: "assets/clinic1.webp",
        name: "Clinic 1",
        contact: "Dr. John Doe",
        address: "123 Main St, City, State",
        phone: "123-456-7890",
        email: "",
        status: "Active",
        startDate: "01/01/2021",
        billingCycle: "Monthly",
        payment: "$100",
        nextBillingDate: "02/01/2021",
    },
    {
        ph: "2",
        image: "assets/clinic2.webp",
        name: "Clinic 2",
        contact: "Dr. Jane Doe",
        address: "456 Main St, City, State",
        phone: "098-765-4321",
        email: "",
        status: "Active",
        startDate: "02/01/2021",
        billingCycle: "Monthly",
        payment: "$150",
        nextBillingDate: "03/01/2021",
    },
    {
        ph: "3",
        image: "assets/clinic3.webp",
        name: "Clinic 3",
        contact: "Dr. John Smith",
        address: "789 Main St, City, State",
        phone: "543-210-6789",
        email: "",
        status: "Active",
        startDate: "03/01/2021",
        billingCycle: "Monthly",
        payment: "$200",
        nextBillingDate: "04/01/2021",
    },
];

const ClinicsHome = () => {

    const clinicItems = clinics.map((clinic) => (
        <ClinicItem
            key={clinic.ph}
            ph={clinic.ph}
            image={clinic.image}
            name={clinic.name}
            contact={clinic.contact}
            address={clinic.address}
            phone={clinic.phone}
            email={clinic.email}
            status={clinic.status}
            startDate={clinic.startDate}
            billingCycle={clinic.billingCycle}
            payment={clinic.payment}
            nextBillingDate={clinic.nextBillingDate}
        />
    ));

    return (
        <table>
            <thead>
                <tr>
                    <th>PH</th>
                    <th>Name</th>
                    <th>Contact</th>
                    <th>Address</th>
                    <th>Phone</th>
                    <th>Email</th>
                    <th>Status</th>
                    <th>Start Date</th>
                    <th>Billing Cycle</th>
                    <th>Payment</th>
                    <th>Next Billing Date</th>
                </tr>
            </thead>
            <tbody>
                {clinicItems}
            </tbody>
        </table>
  )
};

export default ClinicsHome;
