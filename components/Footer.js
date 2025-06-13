import React from 'react';

export default function Footer({ data }) {
  const { contact, socialMedia, accreditations, newsletter, copyright } = data;

  return (
    <footer className="bg-dark text-white pt-5 pb-4" id='footer'>
      <div className="container">
        <div className="row g-5">
          {/* Contact Information */}
          <div className="col-md-6 col-lg-4">
            <h5 className="text-primary mb-4">Contact Us</h5>
            <ul className="list-unstyled">
              <li className="mb-3 d-flex">
                <i className="bi bi-geo-alt-fill me-3 text-primary fs-5"></i>
                <span>{contact.address}</span>
              </li>
              <li className="mb-3 d-flex">
                <i className="bi bi-telephone-fill me-3 text-primary fs-5"></i>
                <span>{contact.phone}</span>
              </li>
              <li className="mb-3 d-flex">
                <i className="bi bi-envelope-fill me-3 text-primary fs-5"></i>
                <span>{contact.email}</span>
              </li>
              <li className="mb-3 d-flex">
                <i className="bi bi-clock-fill me-3 text-primary fs-5"></i>
                <span>{contact.hours}</span>
              </li>
            </ul>
          </div>

          {/* Accreditations */}
          <div className="col-md-6 col-lg-3">
            <h5 className="text-primary mb-4">Accreditations</h5>
            <ul className="list-unstyled">
              {accreditations.map((item, index) => (
                <li key={index} className="mb-2 d-flex">
                  <i className="bi bi-check-circle-fill me-2 text-success"></i>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-md-6 col-lg-5">
            <h5 className="text-primary mb-4">{newsletter.title}</h5>
            <p className="mb-4">{newsletter.description}</p>
            <div className="input-group mb-3">
              <input 
                type="email" 
                className="form-control form-control-lg" 
                placeholder="Your email address" 
                aria-label="Email"
              />
              <button className="btn btn-primary" type="button">
                Subscribe
              </button>
            </div>
            <div className="mt-4">
              <h6 className="text-primary mb-3">Follow Us</h6>
              <div className="d-flex gap-3">
                <a href={socialMedia.facebook} className="text-white fs-4">
                  <i className="bi bi-facebook"></i>
                </a>
                <a href={socialMedia.instagram} className="text-white fs-4">
                  <i className="bi bi-instagram"></i>
                </a>
                <a href={socialMedia.tiktok} className="text-white fs-4">
                  <i className="bi bi-tiktok"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <hr className="mt-4 mb-4 border-secondary" />

        {/* Copyright */}
        <div className="row">
          <div className="col-md-12 text-center">
            <p className="mb-0 text-white">
              {copyright}
              <span className="d-block d-sm-inline mt-2 mt-sm-0">
                &nbsp;| Designed with <i className="bi bi-heart-fill text-danger"></i> for pets
              </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
