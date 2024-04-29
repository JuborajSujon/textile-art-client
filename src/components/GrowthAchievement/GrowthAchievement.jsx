const GrowthAchievement = () => {
  return (
    <div className="py-10 md:py-16 lg:py-20">
      <div className="px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center justify-center gap-10">
          <div className=" mb-8">
            <h1 className="mb-4 text-xl md:text-2xl lg:text-4xl font-extrabold dark:text-slate-300">
              Our Gallery Demonstrating continuous growth and achievement
            </h1>
            <p className="mb-6 text-base md:text-lg dark:text-slate-300">
              Our journey of progress is marked by continuous growth and
              remarkable achievements. From humble beginnings to significant
              milestones, we have consistently pushed boundaries, overcome
              challenges, and embraced opportunities for innovation and
              excellence.
            </p>
            <button className="btn border-2 bg-yellow-400 text-slate-900 hover:bg-transparent hover:text-slate-900 hover:border-yellow-400 dark:hover:text-slate-200">
              Start writing for free
            </button>
          </div>
          <div className=" ">
            <div className="flex gap-4 justify-center items-center flex-wrap ">
              <div className="w-full sm:w-[48%] md:max-w-[300px] self-stretch">
                <div className="h-full flex flex-col items-center justify-center rounded-lg text-xl font-medium px-10 py-6 text-white bg-slate-900 text-center">
                  <h1>M+</h1>
                  <p className="text-white">Active Users</p>
                </div>
              </div>
              <div className="w-full sm:w-[48%] md:max-w-[300px] self-stretch">
                <div className="h-full flex flex-col items-center justify-center rounded-lg text-xl font-medium px-10 py-6 text-white bg-slate-900 text-center">
                  <h1>K+</h1>

                  <p className="text-white">Daily User</p>
                </div>
              </div>
              <div className="w-full sm:w-[48%] md:max-w-[300px] self-stretch">
                <div className="flex flex-col items-center justify-center rounded-lg text-xl font-medium px-10 py-6 text-white bg-slate-900 text-center">
                  <h1>+</h1>
                  <p className="text-white">Team Members</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GrowthAchievement;
