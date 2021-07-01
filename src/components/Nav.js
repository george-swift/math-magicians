import { Link } from 'react-router-dom';
import { FaMagic } from 'react-icons/fa';
import { GoHome } from 'react-icons/go';
import { IoMdCalculator } from 'react-icons/io';
import { RiChatQuoteFill } from 'react-icons/ri';

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light bg-gradient sticky-top">
    <div className="container-fluid">
      <Link
        to="/"
        className="navbar-brand"
      >
        <span className="me-2">Math Magicians</span>
        <FaMagic />
      </Link>
      <button
        type="button"
        className="navbar-toggler"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div
        className="collapse navbar-collapse"
        id="navbarNav"
      >
        <div className="navbar-nav ms-auto">
          <Link
            to="/"
            className="nav-link"
          >
            <GoHome />
            <span className="ms-2">Home</span>
          </Link>
          <Link
            to="/calculator"
            className="nav-link"
          >
            <IoMdCalculator />
            <span className="ms-2">Calculator</span>
          </Link>
          <Link
            to="/quote"
            className="nav-link"
          >
            <RiChatQuoteFill />
            <span className="ms-2">Quote</span>
          </Link>
        </div>
      </div>
    </div>
  </nav>
);

export default Navbar;
