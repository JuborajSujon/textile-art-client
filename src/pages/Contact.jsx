import { Helmet } from "react-helmet-async";
import ContactFrom from "../components/ContactFrom/ContactFrom";
import SectionTitle from "../components/SectionTitle/SectionTitle";
import GoogleMapContact from "./../components/GoogleMapContact/GoogleMapContact";

const Contact = () => {
  return (
    <div className="pt-20 sm:pt-5">
      <Helmet>
        <title>Textile Art | Contact</title>
      </Helmet>
      <GoogleMapContact />

      <div className="mt-10">
        <SectionTitle
          title="Let's get in touch!"
          desctiption="We're here to help. If you have any questions, please don't hesitate to ask."
        />
      </div>

      {/* contact form */}
      <ContactFrom />

      {/* contact details */}
    </div>
  );
};

export default Contact;
