import { Link } from "react-router-dom";

const AIChat = () => {
  return (
    <section className="my-16 md:my-24">
      <div className="px-3">
        <div className="rounded-lg bg-yellow-400 px-8 py-16 md:px-20 xl:p-20">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="mb-10 md:col-5 md:order-2 lg:col-5 md:mb-0 overflow-hidden">
              <img src="https://i.ibb.co/wcDd9Jh/aichat.png" alt="" />
            </div>
            <div className="md:col-7 md:order-1 lg:col-6">
              <h2 className="mb-2 text-2xl md:text-4xl font-extrabold">
                Ready to meet your personal AI chat assistant?
              </h2>
              <p className="mb-6 text-base md:text-lg">
                Take action now to make a difference! Whether it's supporting a
                cause you're passionate about
              </p>
              <Link
                className="btn bg-dark  hover:bg-slate-900 hover:text-slate-300 text-slate-900 dark:bg-transparent dark:hover:bg-slate-900 dark:hover:text-slate-300 rounded-md"
                to="https://github.com/JuborajSujon">
                Start chat for free
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIChat;
