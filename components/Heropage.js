import React from 'react';

export default function Heropage({ data }) {
  const { title, subtitle, backgroundImage, features, ctaButtons } = data;

  return (
    <section
      className="text-white text-center d-flex align-items-center justify-content-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh', 
        position: 'relative',
      }}
    id='hero' >
      <div
        className="container p-5 rounded"
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
          maxWidth: '800px',
        }}
      >
        <h1 className="display-5 fw-bold">{title}</h1>
        <p className="lead mb-4">{subtitle}</p>

        <ul className="list-unstyled mb-4">
          {features.map((feature, index) => (
            <li key={index} className="mb-1">
              <i className="bi bi-check-circle-fill me-2 text-success"></i>
              {feature}
            </li>
          ))}
        </ul>

        <div className="d-flex justify-content-center gap-3">
          {ctaButtons.map((btn, index) => (
            <a
              key={index}
              href="#"
              className={`btn btn-${btn.style === 'primary' ? 'primary' : 'outline-light'} px-4`}
            >
              {btn.text}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
