const EmbracingInnovation = () => {
  return (
    <div className="py-10 md:py-16">
      <div className="px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 items-center justify-center">
          <div className="">
            <img
              src="https://i.ibb.co/0ctrV65/start.png"
              className="mx-auto mb-6 rounded-lg"
              alt=""
            />
          </div>
          <div className="">
            <h1 className="mb-4 text-xl md:text-2xl lg:text-4xl font-extrabold dark:text-slate-300">
              We embarked on a journey to curate and create unique pieces that
              honor tradition while embracing innovation.
            </h1>
            <p className="mb-6 text-base md:text-lg dark:text-slate-300">
              Today, we continue to honor that vision by offering a curated
              collection of artisanal creations, each telling a story of
              creativity, dedication, and inspiration. Join us on our mission to
              preserve and promote the art of textile craft, one stitch at a
              time.
            </p>
            <div className="mb-10 flex items-center">
              <div className="mr-4 flex rounded-sm bg-gray-100 px-4 py-2 text-yellow-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h6 className="font-medium dark:text-slate-300">
                Based on 10,000+ reviews on
              </h6>
            </div>
            <button className="btn border-2 bg-yellow-400 text-slate-900 hover:bg-transparent hover:text-slate-900 hover:border-yellow-400 dark:hover:text-slate-200">
              Start writing for free
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmbracingInnovation;
