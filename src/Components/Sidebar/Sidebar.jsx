import React from "react";
// import avatar from "./avatar.jpg";
import "./sidebar.css"

const Sidebar = () => {
  return (
    <>
      {/* <nav class="navbar navbar-dark navbar-expand-lg bg-dark fixed-top">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            Dashboard
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasDarkNavbar"
            aria-controls="offcanvasDarkNavbar"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="offcanvas offcanvas-end text-bg-dark"
            tabindex="-1"
            id="offcanvasDarkNavbar"
            aria-labelledby="offcanvasDarkNavbarLabel"
          >
            <div class="offcanvas-header">
              <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel">
                Dark offcanvas
              </h5>
              <button
                type="button"
                class="btn-close btn-close-white"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div class="offcanvas-body">
              <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    About us
                  </a>
                </li>
                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Services
                  </a>
                  <ul class="dropdown-menu dropdown-menu-dark">
                    <li>
                      <a class="dropdown-item" href="#">
                        Energy Management
                      </a>
                    </li>
                    <li>
                      <hr class="dropdown-divider" />
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Carbon Emission
                      </a>
                    </li>

                  </ul>
                </li>
              </ul>
              <form class="d-flex" role="search">
                <img
              src={avatar}
              alt="User Avatar"
              className="w-8 h-8 rounded-full my-1 mx-2"
            />
                <button class="btn btn-danger" type="submit">
                  Logout
                </button>
              </form>
            </div>
          </div>
        </div>
      </nav> */}
      <div id="nav" className="col-12 col-md-3 col-xl-2 bd-sidebar">
        <div className="row">
          <div className="col-md-12 col-8">
            <div className="text-sm-left text-md-center logo">
              ECOLOGIK<span id="beta"> BETA</span>
            </div>
          </div>
          <div className="col-md-12 col-4 text-right">
            {/* <!-- for menu when screen width is less--> */}
            <button
              className="btn btn-link bd-search-docs-toggle d-md-none p-0 ml-3 collapsed"
              type="button"
              data-toggle="collapse"
              data-target="#bd-docs-nav"
              aria-controls="bd-docs-nav"
              aria-expanded="false"
              aria-label="Toggle docs navigation"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 30 30"
                width="30"
                height="30"
                focusable="false"
              >
                <title>Menu</title>
                <path
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeMiterlimit="10"
                  d="M4 7h22M4 15h22M4 23h22"
                ></path>
              </svg>
            </button>
          </div>
        </div>
        <nav className="collapse bd-links" id="bd-docs-nav">
          {/* <OptionList /> */}
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
