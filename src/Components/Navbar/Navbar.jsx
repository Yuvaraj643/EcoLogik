import React from "react";
import "./navbar.css";
import avatar from "./avatar.jpg";

const Navbar = () => {
  return (
    <>
      <nav className="flex items-center justify-between bg-gray-900 p-4">
        <a href="/" className="text-white text-xl font-bold">
          ECOLOGIK
        </a>
        <div className="flex items-center space-x-16 text-white">
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
            <ul class="dropdown-menu">
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
                  Carbon Emission Management
                </a>
              </li>
            </ul>
          </li>

          <a href="/about" className="text-white">
            About
          </a>
          <div className="flex items-center justify-center">
            <img
              src={avatar}
              alt="User Avatar"
              className="w-8 h-8 rounded-full"
            />
            <div className="relative">
              <a
                className="nav-link dropdown-toggle px-1"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >User</a>
              <ul className="dropdown-menu absolute right-0 mt-2 w-40 bg-white border rounded shadow-lg hidden">
                <li>
                  <a className="dropdown-item" href="#">
                    Profile
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Logout
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>

    </>
  );
};

export default Navbar;
