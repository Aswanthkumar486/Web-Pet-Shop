import React, { useState } from 'react';

export default function Success({ data }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const { title, cases, testimonials } = data;

  return (
    <section className="py-5 bg-light" id="stories">
      <div className="container py-lg-5">
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold text-primary">{title}</h2>
        </div>

        {/* Transformation Cases */}
        <div className="row g-5 mb-5">
          {cases.map((item, index) => (
            <div className="col-lg-6" key={index}>
              <div className="card border-0 shadow-lg rounded-4 overflow-hidden h-100">
                <div className="card-header bg-white border-0 py-3">
                  <h3 className="h4 mb-0 text-center text-primary fw-bold">{item.pet}</h3>
                </div>
                
                <div className="position-relative">
                  <div className="row g-0">
                    <div className="col-6">
                      <div className="p-2">
                        <h6 className="text-center small fw-bold bg-warning py-1 rounded">Before</h6>
                        <img 
                          src={item.beforeImage} 
                          alt={`${item.pet} before`}
                          className="img-fluid rounded-3 shadow-sm"
                        />
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="p-2">
                        <h6 className="text-center small fw-bold bg-success text-white py-1 rounded">After</h6>
                        <img 
                          src={item.afterImage} 
                          alt={`${item.pet} after`}
                          className="img-fluid rounded-3 shadow-sm"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="position-absolute top-50 start-50 translate-middle">
                    <span className="badge bg-primary fs-6 py-2 px-3 shadow">
                      {item.duration}
                    </span>
                  </div>
                </div>
                
                <div className="card-body">
                  <h5 className="h6 text-center text-muted mb-3">Services Provided</h5>
                  <div className="d-flex flex-wrap justify-content-center gap-2">
                    {item.services.map((service, i) => (
                      <span key={i} className="badge bg-light text-dark border py-2">
                        {service}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="bg-primary rounded-4 p-4 p-lg-5 shadow-lg position-relative overflow-hidden">
          <div className="position-absolute top-0 end-0 opacity-25">
            <i className="bi bi-quote display-1 text-white"></i>
          </div>
          
          <div id="testimonialCarousel" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index} 
                  className={`carousel-item ${index === activeIndex ? 'active' : ''}`}
                >
                  <div className="text-center text-white px-4 px-md-5 mx-auto" style={{maxWidth: '800px'}}>
                    <i className="bi bi-quote display-4 text-white opacity-50 mb-4"></i>
                    <p className="fs-3 fst-italic mb-4 position-relative z-1">
                      "{testimonial.quote}"
                    </p>
                    <div className="fw-bold fs-5">— {testimonial.author}</div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Carousel Controls */}
            <button 
              className="carousel-control-prev" 
              type="button" 
              data-bs-target="#testimonialCarousel" 
              data-bs-slide="prev"
              onClick={() => setActiveIndex(activeIndex === 0 ? testimonials.length - 1 : activeIndex - 1)}
            >
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button 
              className="carousel-control-next" 
              type="button" 
              data-bs-target="#testimonialCarousel" 
              data-bs-slide="next"
              onClick={() => setActiveIndex(activeIndex === testimonials.length - 1 ? 0 : activeIndex + 1)}
            >
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}