import headerDesktop from "./assets/image-header-desktop.jpg";
import headerMobile from "./assets/image-header-mobile.jpg";

{
  /* <img src={viteLogo} className="logo" alt="Vite logo" /> */
}

function App() {
  return (
    <div className="App bg-main-bg h-screen flex justify-center items-center">
      <main className=" w-[327px] lg:w-[72.375rem] h-[48.9375rem] lg:h-[29.9rem] grid grid-col-1 grid-rows-3 lg:grid-rows-1 lg:grid-cols-2 bg-card-bg over overflow-hidden rounded-lg">
        {/* IMG part */}
        <section className="lg:col-start-2 row-start-1 row-end-2 relative">
          <picture className="before:bg-bg-accent before:absolute before:inset-0 before:opacity-20">
            <source media="(min-width: 54.6875em)" srcset={headerDesktop} />
            <img
              src={headerMobile}
              alt=""
              className="h-full w-full  object-cover"
            />
          </picture>
        </section>

        {/* content part */}
        <section className="lg:col-start-1 lg:row-start-1 flex p-8 text-center md:p-12.5 lg:text-left flex-col  relative  lg:py-[71px 59px] lg:px-[71px]">
          <h1 className=" text-[1.75rem] font-bold lg:text-4xl text-white lg:mb-5">
            Get
            <span className="mx-2 bg-gradient-to-r bg-clip-text text-transparent from-violet-500 to-pink-500">
              insights
            </span>
            that help your business grow.
          </h1>

          <p className="text-main-p mt-[1.5625rem] lg:max-w-[40ch] lg:mb-7">
            Discover the benefits of data analytics and make better decisions
            regarding revenue, customer experience, and overall efficiency.
          </p>
          <ul
            role="list"
            className="mt-5 lg:mt-24 flex-col flex lg:flex-row justify-center gap-5 text-white  lg:gap-[3.75rem] text-2xl font-bold lg:justify-start"
          >
            <li role="listitem" className="mr-[0.3125rem]">
              <p className="flex flex-col gap-1.5">
                10k+
                <span className="font-lexend-deca text-stat-h text-xs font-normal uppercase tracking-[0.08em]">
                  companies
                </span>
              </p>
            </li>
            <li role="listitem">
              <p className="flex flex-col gap-1.5">
                314
                <span className="font-lexend-deca text-stat-h text-xs font-normal uppercase tracking-[0.08em]">
                  templates
                </span>
              </p>
            </li>
            <li role="listitem">
              <p className="flex flex-col gap-1.5">
                12M+
                <span className="font-lexend-deca text-stat-h text-xs font-normal uppercase tracking-[0.08em]">
                  queries
                </span>
              </p>
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
