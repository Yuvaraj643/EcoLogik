import React from "react";
import "./navbar.css";
import avatar from "./avatar.jpg";
import { Link } from "react-scroll";
const Navbar = () => {
  return (
    <>
      <nav className="flex items-center justify-between bg-gray-900 p-4">
        <a href="/" className="text-white text-xl font-bold">
          ECOLOGIK
        </a>
        <div className="flex items-center space-x-6 text-white">
          <li class="nav-item">
            <Link
              activeClass="active"
              to="targetDiv"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <a class="nav-link " role="button">
                Services
              </a>
            </Link>
          </li>
          <Link
            activeClass="active"
            to="targetDiv2"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <a href="/about" className="text-white">
              About
            </a>
          </Link>
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
              >
                User
              </a>
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
