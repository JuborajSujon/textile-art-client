import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { BsArrowRight } from "react-icons/bs";

const Terms = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Helmet>
        <title>Luxninesy | Terms & Services</title>
      </Helmet>
      <section
        data-aos="zoom-in"
        data-aos-duration="1000"
        className={`relative w-full py-20 md:py-28 lg:py-36 bg-[url('https://i.ibb.co/C7jnS1N/terms-banner.jpg')] bg-no-repeat bg-center bg-cover rounded-none`}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container mx-auto relative">
          <div className="grid grid-cols-1 text-center mt-10">
            <h3 className="md:text-4xl text-3xl md:leading-normal leading-normal font-medium text-white">
              Terms & Services
            </h3>
          </div>
        </div>
      </section>

      <section
        data-aos="fade-up"
        data-aos-duration="1000"
        className="relative lg:py-24 py-16">
        <div className="container mx-auto px-4 relative">
          <div className="md:flex justify-center">
            <div className="md:w-3/4">
              <div className="p-6 bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 rounded-md">
                <h5 className="text-xl font-medium mb-4">Introduction :</h5>
                <p className="text-slate-400">
                  These terms and conditions govern your use of our textile art
                  services and website. By accessing or using our services, you
                  agree to comply with these terms and conditions in full.
                </p>

                <h5 className="text-xl font-medium mb-4 mt-8">
                  User Agreements :
                </h5>
                <p className="text-slate-400">
                  <b className="text-yellow-500 text-lg">Services:</b> We offer
                  textile art product and services including property listings,
                  consultations, property management, and other related
                  services.Our website serves as a platform for showcasing
                  textile art properties and facilitating transactions between
                  buyers, sellers, and agents. We reserve the right to modify or
                  discontinue any part of our services without prior notice.
                </p>
                <p className="text-slate-400 mt-3">
                  <b className="text-yellow-500 text-lg">Property Listings:</b>{" "}
                  Property listings on our website are provided for
                  informational purposes only and do not constitute an offer or
                  contract. We make reasonable efforts to ensure the accuracy of
                  property information, but we do not guarantee the
                  completeness, accuracy, or reliability of any property
                  listing. Buyers are encouraged to conduct their own due
                  diligence before making any purchase decisions.
                </p>
                <p className="text-slate-400 mt-3">
                  <b className="text-yellow-500 text-lg">Privacy:</b> We are
                  committed to protecting your privacy and handling your
                  personal information securely. Please refer to our privacy
                  policy for more information on how we collect, use, and
                  disclose your personal data.
                </p>
                <p className="text-slate-400 mt-3">
                  <b className="text-yellow-500 text-lg">Governing Law:</b>{" "}
                  These terms and conditions shall be governed by and construed
                  in accordance with the laws of [JIDB/2345], without regard to
                  its conflict of law provisions. Any disputes arising out of or
                  in connection with these terms and conditions shall be
                  resolved through arbitration in [JIDB/2A/345].
                </p>
                <p className="text-slate-400 mt-3">
                  <b className="text-yellow-500 text-lg">Changes to Terms:</b>{" "}
                  We reserve the right to update or modify these terms and
                  conditions at any time without prior notice. Your continued
                  use of our services or website after any such changes
                  constitutes acceptance of the modified terms.
                </p>
                <p className="text-slate-400 mt-3">
                  <b className="text-yellow-500 text-lg">
                    Contact Information:
                  </b>{" "}
                  If you have any questions or concerns about these terms and
                  conditions, please contact us
                </p>

                <h5 className="text-xl font-medium mb-4 mt-8">
                  Restrictions :
                </h5>
                <p className="text-slate-400">
                  You are specifically restricted from all of the following :
                </p>
                <ul className="list-none text-slate-400 mt-3">
                  <li className="flex mt-2">
                    <BsArrowRight
                      size={20}
                      className="text-yellow-600 align-middle me-2"
                    />
                    Unauthorized use of our website, including hacking or
                    attempting to gain unauthorized access to our systems, is
                    prohibited.
                  </li>
                  <li className="flex mt-2">
                    <BsArrowRight
                      size={20}
                      className="text-yellow-600 align-middle me-2"
                    />
                    Users may not use our services for illegal or fraudulent
                    activities.
                  </li>
                  <li className="flex mt-2">
                    <BsArrowRight
                      size={20}
                      className="text-yellow-600 align-middle me-2"
                    />
                    Reproducing, distributing, or modifying any content from our
                    website without prior written consent is prohibited.
                  </li>
                  <li className="flex mt-2">
                    <BsArrowRight
                      size={20}
                      className="text-yellow-600 align-middle me-2"
                    />
                    Users may not harass, intimidate, or harm other users or
                    third parties through our platform.
                  </li>
                  <li className="flex mt-2">
                    <BsArrowRight
                      size={20}
                      className="text-yellow-600 align-middle me-2"
                    />
                    Posting false, misleading, or defamatory information about
                    properties or individuals is prohibited.
                  </li>
                  <li className="flex mt-2">
                    <BsArrowRight
                      size={20}
                      className="text-yellow-600 align-middle me-2"
                    />
                    Users may not engage in any activity that disrupts or
                    interferes with the proper functioning of our website or
                    services.
                  </li>
                </ul>

                <div className="mt-6">
                  <a className="btn bg-yellow-600 hover:bg-yellow-700 text-white rounded-md">
                    Accept
                  </a>
                  <a className="btn bg-transparent hover:bg-yellow-600 border border-yellow-600 text-yellow-600 hover:text-white rounded-md ms-2">
                    Decline
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Terms;
