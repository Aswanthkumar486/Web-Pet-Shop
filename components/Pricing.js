import React from 'react';

export default function Pricing({ data }) {
  return (
    <section className="py-5 bg-white" id='packages'>
      <div className="container py-lg-5">
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold text-primary">{data.title}</h2>
        </div>
        
        <div className="row g-5 justify-content-center">
          {data.packages.map((pkg, index) => (
            <div key={index} className="col-lg-6">
              <div className="card h-100 border-0 shadow-lg overflow-hidden rounded-4">
                {/* Image with overlay */}
                <div className="position-relative">
                  <img 
                    src={pkg.image} 
                    alt={pkg.name} 
                    className="card-img-top object-fit-cover" 
                    style={{ height: '300px' }}
                  />
                  <div className="position-absolute bottom-0 start-0 bg-primary text-white py-2 px-4">
                    <span className="fs-5 fw-bold">{pkg.price}</span>
                  </div>
                </div>
                
                {/* Card body */}
                <div className="card-body p-4 p-lg-5">
                  <h3 className="h2 fw-bold mb-3">{pkg.name}</h3>
                  <p className="lead text-muted mb-4">{pkg.description}</p>
                  
                  <ul className="list-unstyled mb-4">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="d-flex mb-2">
                        <span className="text-primary me-2">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button className="btn btn-lg btn-outline-primary w-100 py-3">
                    Select Plan
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}