import Lottie from "lottie-react";
import Sell from "../../assets/sell.json";
import Support from "../../assets/support.json";
import Demo from "../../assets/demo.json";

const ContactDetails = () => {
  return (
    <div className="py-10 md:py-16 lg:py-20">
      <div className="px-4 grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="flex">
          <div className="rounded-lg border-2 border-border hover:border-yellow-400 shadow-md hover:drop-shadow-md">
            <div className="flex flex-col justify-between items-center h-full px-4 py-5 text-center md:px-8 md:py-10  ">
              <div className="flex flex-col items-center">
                <div>
                  <Lottie
                    style={{
                      width: "100px",
                      height: "100px",
                      marginBottom: "20px",
                    }}
                    animationData={Sell}
                    loop={true}
                  />
                </div>

                <h4 className="mb-4 font-bold">Sales</h4>
                <p className="mb-4 text-[18px]">
                  Interested in purchasing our artisanal creations or stocking
                  them in your store? Contact us for sales inquiries and
                  wholesale opportunities.
                </p>
              </div>
              <button className="btn border-2 bg-yellow-400 text-slate-900 hover:bg-transparent hover:text-slate-900 hover:border-yellow-400 dark:hover:text-slate-200">
                Talk To Us
              </button>
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="rounded-lg border-2 border-border hover:border-yellow-400 shadow-md hover:drop-shadow-md">
            <div className="flex flex-col justify-between items-center h-full px-4 py-5 text-center md:px-8 md:py-10 ">
              <div className="flex flex-col items-center">
                <div>
                  <Lottie
                    style={{
                      width: "100px",
                      height: "100px",
                      marginBottom: "20px",
                    }}
                    animationData={Support}
                    loop={true}
                  />
                </div>

                <h4 className="mb-4 font-bold">Support</h4>
                <p className="mb-4 text-[18px]">
                  Need assistance with your order or have questions about our
                  products? Our dedicated support team is here to help! Reach
                  out to us for prompt assistance and personalized service.
                </p>
              </div>
              <button className="btn border-2 bg-yellow-400 text-slate-900 hover:bg-transparent hover:text-slate-900 hover:border-yellow-400 dark:hover:text-slate-200">
                Talk To Us
              </button>
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="rounded-lg border-2 border-border hover:border-yellow-400 shadow-md hover:drop-shadow-md">
            <div className="flex flex-col justify-between items-center h-full px-4 py-5 text-center md:px-8 md:py-10  ">
              <div className="flex flex-col items-center">
                <div>
                  <Lottie
                    style={{
                      width: "100px",
                      height: "100px",
                      marginBottom: "20px",
                    }}
                    animationData={Demo}
                    loop={true}
                  />
                </div>

                <h4 className="mb-4 font-bold">Request Demo</h4>
                <p className="mb-4 text-[18px]">
                  Want to see our products in action? Request a demo to
                  experience the beauty and craftsmanship of our textile art
                  firsthand.
                </p>
              </div>
              <button className="btn border-2 bg-yellow-400 text-slate-900 hover:bg-transparent hover:text-slate-900 hover:border-yellow-400 dark:hover:text-slate-200">
                Talk To Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;
