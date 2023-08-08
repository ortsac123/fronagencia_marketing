import { Link, NavLink, link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";

function Prentation() {
  return (
    <main>
      <div className="relative px-6 lg:px-20 py-40 	background-image: none">
        <div className="mx-auto max-w-full pt-20 pb-32 sm:pt-48 sm:pb-40">
          <div className="pt-32">
            <div className="pr-60 pr-40">
              <h1 className="text-4xl font-medium tracking-tight  sm:text-5xl">
                Case Studies <apan> </apan>
                <div
                  className="inline-flex"
                  style={{ color: "black", fontWeight: "medium" }}
                ></div>
              </h1>
              <p className="pt-14 text-sn">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non
                nihil quod labore maxime. Exercitationem ut incidunt asperiores
                vero architecto, minus veniam nam quibusdam praesentium ratione,
                assumenda iusto reprehenderit sint rem.
              </p>
            </div>
            <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
              <svg
                className="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]"
                viewBox="0 0 1155 678"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)"
                  fillOpacity=".3"
                  d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
                />
                <defs></defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Prentation;
