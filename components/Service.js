import React from 'react';

export default function Services({ data }) {
  const { title, categories, certifications } = data;

  return (
    <section className="py-5 bg-light" id="services">
      <div className="container py-lg-5">
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold text-primary mb-3">{title}</h2>
          <div className="mx-auto" style={{ maxWidth: '600px' }}>
            <p className="lead text-muted">
              Professional care for your pets with certified experts and the latest techniques
            </p>
          </div>
        </div>

        {/* Service Categories */}
        <div className="row g-4">
          {categories.map((cat, i) => (
            <div className="col-md-6 col-lg-3" key={i}>
              <div className="card h-100 border-0 shadow-sm overflow-hidden rounded-3">
                <div className="position-relative">
                  <img
                    src={cat.image}
                    className="card-img-top object-fit-cover"
                    alt={cat.name}
                    style={{ height: '200px' }}
                  />
                  <div className="position-absolute top-0 end-0 bg-primary text-white py-1 px-3 rounded-bl">
                    <span className="small fw-bold">{cat.procedures.length} Services</span>
                  </div>
                </div>
                <div className="card-body">
                  <h5 className="card-title fw-bold mb-3 text-primary">{cat.name}</h5>
                  <ul className="list-unstyled mb-0">
                    {cat.procedures.map((proc, j) => (
                      <li key={j} className="d-flex mb-2">
                        <span className="text-primary me-2">•</span>
                        <div>
                          <strong>{proc.name}</strong>
                          <div className="text-muted small">{proc.duration}</div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="card-footer bg-transparent border-top-0 py-3">
                  <button className="btn btn-sm btn-outline-primary w-100">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications Section */}
        <div className="mt-6 pt-5">
          <div className="text-center mb-4">
            <h3 className="h2 fw-bold text-primary">Our Certifications</h3>
            <p className="text-muted">Trusted by industry organizations and pet owners alike</p>
          </div>
          
          <div className="row justify-content-center g-4">
            {certifications.map((item, index) => (
              <div className="col-md-3 col-sm-4 col-6" key={index}>
                <div className="bg-white p-4 h-100 d-flex flex-column align-items-center rounded-3 shadow-sm border">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="mb-3"
                    style={{ height: '80px', objectFit: 'contain' }}
                  />
                  <div className="text-center mt-auto">
                    <h6 className="mb-0 fw-bold text-success">
                      <i className="bi bi-award-fill me-2"></i>
                      {item.name}
                    </h6>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}