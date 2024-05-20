import PackageSection from "../PackageSection";
import PersonalInfoSection from "../PersonalInfoSection";
import PaymentMethod from "./paymentMethod";

const FormPayment = () => {
  return (
    <div className="my-10 mx-10 md:mx-20">
      <PackageSection />
      <PersonalInfoSection />
      <PaymentMethod />
    </div>
  );
};

export default FormPayment;
