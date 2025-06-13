import React from 'react';

export default function Navbar({ data }) {
  return (
   <nav className="navbar navbar-expand-lg navbar-light bg-light py-3 shadow-sm fixed-top ">

      <div className="container">
        {/* Brand/Logo */}
        <div className="d-flex  align-items-center">
          <img 
            src={data.logo} 
            alt="Pet Shop Logo" 
            width="60" 
            height="60"
            className="d-inline-block align-top rounded-circle"
          />
          <a className="navbar-brand ms-2 mb-0 h1 fw-bold text-primary" href="#">
            {data.name}
          </a>
        </div>
        
        {/* Toggler */}
        <button 
          className="navbar-toggler" 
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapsible Content */}
        <div className="collapse navbar-collapse" id="navbarContent">
          {/* Menu Items */}
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            {data.menu && data.menu.map((item, index) => (
              <li className="nav-item mx-1" key={index}>
                <a 
                  className="nav-link fw-medium py-2 px-3 rounded-pill text-dark hover-effect" 
                  href={item.link}
                >
                  {item.name}
                </a>
              </li>
            ))}
            
            {/* Dropdown Menu */}
            {data.dropdownMenu && data.dropdownMenu.length > 0 && (
              <li className="nav-item dropdown mx-1">
                <a
                  className="nav-link dropdown-toggle fw-medium py-2 px-3 rounded-pill text-dark hover-effect"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Pages
                </a>
                <ul className="dropdown-menu shadow border-0 rounded-3 p-2">
                  {data.dropdownMenu.map((item, index) => (
                    <li key={index}>
                      <a 
                        className="dropdown-item rounded-2 py-2 px-3 fw-medium" 
                        href={item.link}
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
            )}
          </ul>
          
          {/* Contact & CTA */}
          <div className="d-flex flex-column flex-md-row align-items-center">
            <div className="d-flex align-items-center mb-3 mb-md-0 me-md-3">
              <i className="bi bi-telephone fs-5 me-2 text-primary"></i>
              <span className="fw-medium">{data.contactInfo}</span>
            </div>
            <a 
              href={data.ctaButton.link} 
              className="btn btn-primary rounded-pill px-4 fw-bold shadow-sm"
            >
              <i className="bi bi-calendar-check me-2"></i>
              {data.ctaButton.text}
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}