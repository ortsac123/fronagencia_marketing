import { Connect, connect } from "react-redux";
import { NavLink, Link } from "react-router-dom";
import logo from "../../assets/img/logoo.png";
import loading from "../../assets/img/loading-dots.gif";
import { useState } from "react";

function Navbar() {
  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (document.getElementById("navbar")) {
      if (
        document.body.scrollTop > 50 ||
        document.documentElement.scrollTop > 50
      ) {
        document.getElementById("navbar").classList.add("shadow-navbar");
        document.getElementById("navbar").classList.add("bg-white");
      } else {
        document.getElementById("navbar").classList.remove("shadow-navbar");
        document.getElementById("navbar").classList.remove("bg-white");
      }
    }
  }

  return (
    <nav className="w-full  z-20 top-50  fixed">
      <div
        id="navbar"
        className=" border-gray-200 transition delay-75 duration-300 ease-in-out px-4 py-4 sm:px-6"
      >
        <div className="-ml-4 -mt-2 flex flex-wrap items-center justify-between Link:flex-nowrap md:px-8 px-5 ">
          <Link to="/" className="ml-4 mt-2">
            <img src={logo} width={45} height={45} className="bg-blue" />
          </Link>
          <div className="ml-4 mt-2 flex-shrink-0">
            <NavLink
              to="/casos"
              className="text inline-flex font-medium leading-6 text-gray-900 no-underline  hover:underline decoration-2 mx-3"
            >
              Casos
            </NavLink>
            <NavLink
              to="/servicios"
              className="text inline-flex font-medium leading-6 text-gray-900 no-underline  hover:underline decoration-2  mx-3"
            >
              Servicios
            </NavLink>
            <NavLink
              to="/carreras"
              className="text inline-flex   font-medium leading-6 text-gray-900 no-underline  hover:underline decoration-2  mx-3"
            >
              Carreras
            </NavLink>
            <NavLink
              to="/podcast"
              className="text inline-flex   font-medium leading-6 text-gray-900 no-underline  hover:underline decoration-2 mx-3"
            >
              Podcast
            </NavLink>
            <NavLink
              to="/blog"
              className="text inline-flex   font-medium leading-6 text-gray-900 no-underline  hover:underline decoration-2 mx-3"
            >
              Blog
            </NavLink>
            <NavLink
              to="/nosotros"
              className="text inline-flex   font-medium leading-6 text-gray-900 no-underline   hover:underline decoration-2 mx-3"
            >
              Nosotros
            </NavLink>
            <NavLink
              to="/contacto"
              className="text inline-flex   font-medium leading-6 text-gray-900 no-underline  hover:underline decoration-2 mx-3"
            >
              Contacto
            </NavLink>
            <button
              type="button"
              className="ml-6 relative inline-flex items-center rounded border border-transparent bg-black px-6 py-2 text-sm font-medium text-white shadow-sm hover:bg-gray-400 transition delay-400 duration-400 ease-in-out   focus:outline-none focus:ring-2 focus:ring-black-300 focus:ring-offset-2"
            >
              Contratanos
              <img src={loading} className="w-10 h-2 px-2"></img>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, {})(Navbar);

//<div class="tenor-gif-embed" data-postid="23479300" data-share-method="host" data-aspect-ratio="3.01887" data-width="100%"><a href="https://tenor.com/view/discord-loading-dots-discord-loading-loading-dots-gif-23479300">Discord Loading Dots Sticker</a>from <a href="https://tenor.com/search/discord+loading+dots-stickers">Discord Loading Dots Stickers</a></div> <script type="text/javascript" async src="https://tenor.com/embed.js"></script>
