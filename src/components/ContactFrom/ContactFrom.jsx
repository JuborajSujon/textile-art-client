import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const ContactFrom = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 px-4 py-10 md:py-16 lg:py-20">
      <div className="">
        <form>
          <div className="mb-10">
            <label
              htmlFor="name"
              className="block uppercase text-slate-600 text-base font-bold mb-2 dark:text-slate-300">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              id="name"
              name="name"
              className=" border-0 border-b-2 focus:border-b-yellow-400 focus:border-primary focus:ring-transparent px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
              placeholder="name"
              type="text"
            />
          </div>
          <div className="mb-10">
            <label
              htmlFor="email"
              className="block uppercase text-slate-600 text-base font-bold mb-2 dark:text-slate-300">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              id="email"
              name="email"
              className="border-0 border-b-2 focus:border-b-yellow-400 focus:border-primary focus:ring-transparent px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
              placeholder="john.doe@email.com"
              type="email"
            />
          </div>
          <div className="mb-10">
            <label
              htmlFor="message"
              className="block uppercase text-slate-600 text-base font-bold mb-2 dark:text-slate-300">
              Message <span className="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              className="border-0 border-b-2 focus:border-b-yellow-400 focus:border-primary focus:ring-transparent px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
              placeholder="Write here your details message..."
              rows="6"></textarea>
          </div>
          <button
            type="button"
            className="btn border-2 bg-yellow-400 text-slate-900 hover:bg-transparent hover:text-slate-900 hover:border-yellow-400 dark:hover:text-slate-200">
            Send message
          </button>
        </form>
      </div>
      <div className="md:flex md:flex-col md:justify-center lg:ml-20">
        <h3 className="mb-4 font-extrabold text-xl md:text-3xl lg:text-4xl dark:text-slate-300">
          If you need to contact us
        </h3>
        <p className="mb-10 dark:text-slate-300">
          We value your feedback, inquiries, and suggestions. If you have any
          questions or need assistance, please don't hesitate to get in touch
          with us. We are here to help!
        </p>
        <div className="mb-4 flex items-center gap-2 dark:text-slate-300">
          <FaPhoneAlt size={20} />
          <p>+088 123 456 789</p>
        </div>
        <div className="mb-4 flex items-center gap-2 dark:text-slate-300">
          <MdEmail size={20} />
          <p>sample@gmail.com</p>
        </div>
        <div className="mb-4 flex items-center gap-2 dark:text-slate-300">
          <FaLocationDot size={20} />
          <p>3517 W. Gray St. Utica, Pennsylvania 57867</p>
        </div>
      </div>
    </div>
  );
};

export default ContactFrom;
