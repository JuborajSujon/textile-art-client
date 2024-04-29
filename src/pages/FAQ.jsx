import { useEffect, useState } from "react";
import AIChat from "../components/AIChat/AIChat";
import SectionTitle from "../components/SectionTitle/SectionTitle";
import GeneralLoading from "../components/GeneralLoading/GeneralLoading";

const FAQ = () => {
  const [faq, setFaq] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:5000/faq")
      .then((res) => res.json())
      .then((data) => {
        setFaq(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  return (
    <div className="pt-20 sm:pt-5">
      <SectionTitle
        title="Frequently Asked Questions"
        desctiption="Here are some of the most frequently asked questions about our website. We're here to help. If you have any questions, please don't hesitate to ask."
      />

      {loading ? (
        <GeneralLoading />
      ) : (
        <div className="join join-vertical w-full px-4 ">
          {faq?.map((item) => (
            <div
              key={item?._id}
              className="collapse collapse-arrow join-item border border-base-300 hover:bg-slate-100">
              <input type="radio" name="my-accordion-4" />
              <div className="collapse-title text-xl font-medium">
                {item?.question}
              </div>
              <div className="collapse-content">
                <p>{item?.answer}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      <AIChat />
    </div>
  );
};

export default FAQ;
