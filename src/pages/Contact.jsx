import SectionTitle from "../components/SectionTitle/SectionTitle";
import GoogleMapContact from "./../components/GoogleMapContact/GoogleMapContact";

const Contact = () => {
  return (
    <div className="pt-20 sm:pt-5">
      <GoogleMapContact />

      <div className="mt-10">
        <SectionTitle
          title="Let's get in touch!"
          desctiption="We're here to help. If you have any questions, please don't hesitate to ask."
        />
      </div>

      {/* contact form */}

      {/* contact details */}
    </div>
  );
};

export default Contact;
