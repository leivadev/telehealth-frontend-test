"use client"
import { Link } from "react-router-dom";
// import { useToast } from "@/hooks/use-toast"
import { ChevronLeftIcon } from "lucide-react";

import ClinicInformationSection from "@/components/addClinic/ClinicInformationSection"
import AdminInformationSection from "@/components/addClinic/AdminInformationSection"
import FeaturesSection from "@/components/addClinic/FeaturesSection"
import StripeAccountInformationSection from "@/components/addClinic/StripeAccountInformationSection"
import BillingCycleSection from "@/components/addClinic/BillingCycleSection"
// import RoomsAdjustmentSection from "@/components/addClinic/RoomsAdjustmentSection"
// import FeeAdjustmentSection from "@/components/addClinic/FeeAdjustmentSection"

const AddClinicPage = () => {

  // const { toast } = useToast();

  return (
    <main className="mx-2 my-4 lg:mx-12 lg:my-6">
      <div className="flex items-center justify-start gap-16 mb-4">
        <Link to="/" className="flex gap-2 hover:underline">
          <ChevronLeftIcon />
          Back
        </Link>
        <h2 className="text-2xl font-bold">Clinic Information (Required)</h2>
      </div>

      <ClinicInformationSection />
      <AdminInformationSection />
      <FeaturesSection />
      <StripeAccountInformationSection />
      <BillingCycleSection />
      {/* <RoomsAdjustmentSection />
      <FeeAdjustmentSection /> */}

    </main>
  );
};

export default AddClinicPage;