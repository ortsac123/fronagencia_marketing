import { Link, NavLink, link } from "react-router-dom";

import { Typewriter } from "react-simple-typewriter";

function Header() {
  return (
    <main>
      <div className=" px-20 	background-image: none">
        <div className="mx-auto max-w-full sm:pt-48 sm:pb-40">
          <div>
            <div className="pt-48 ">
              <h1 className="text-4xl font-medium tracking-tight  sm:text-5xl">
                For those who <apan> </apan>
                <div
                  className="inline-flex"
                  style={{ color: "black", fontWeight: "medium" }}
                >
                  <Typewriter
                    words={[
                      "need technology to reveal the beauty of products",
                      "believe in beautiful and smart design",
                      "need to build complex projects",
                      "are striving for qality all",
                    ]}
                    cursor
                    cursorStyle="|"
                    typeSpeed={80}
                    deleteSpeed={50}
                    delaySpeed={100}
                  />
                </div>
              </h1>
              <ul className="flex gap-8  pt-24 py-16">
                <li className="flex-aline">
                  <Link
                    to="/servicios"
                    className="hover:underline decoration-2 font-medium"
                  >
                    Full-Cycle Product Development
                  </Link>
                </li>
                <li className="flex-aline">
                  {" "}
                  <Link
                    to="/servicios"
                    className="hover:underline decoration-2 font-medium"
                  >
                    Digital Product Design
                  </Link>
                </li>
                <li className="flex-aline">
                  <Link
                    to="/servicios"
                    className="hover:underline decoration-2 font-medium"
                  >
                    Branding
                  </Link>
                </li>
                <li className="flex-aline">
                  <Link
                    to="/servicios"
                    className="hover:underline decoration-2 font-medium"
                  >
                    Motion Design Company
                  </Link>
                </li>
                <li className="flex-aline">
                  <Link
                    to="/servicios"
                    className="hover:underline decoration-2 font-medium"
                  >
                    Design Outstaffing
                  </Link>
                </li>
              </ul>
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

export default Header;
