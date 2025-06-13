import React from 'react';

export default function Booking({ data }) {
  const { title, description, formFields, benefits, featureImage } = data;

  return (
    <section className="py-5" style={{ 
     
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center'
    }} id='booking'>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="bg-white rounded-4 shadow-lg overflow-hidden">
              <div className="row g-0">
                {/* Form Column */}
                <div className="col-md-7 p-4 p-md-5">
                  <h2 className="mb-4 fw-bold text-primary">{title}</h2>
                  <p className="text-muted mb-4">{description}</p>
                  
                  <form>
                    {formFields.map((field, index) => (
                      <div className="mb-3" key={index}>
                        <label className="form-label fw-medium">{field.label}</label>
                        
                        {field.type === 'text' && (
                          <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder={field.placeholder}
                          />
                        )}
                        
                        {field.type === 'select' && (
                          <select className="form-select form-select-lg">
                            {field.options.map((option, i) => (
                              <option key={i} value={option}>
                                {option}
                              </option>
                            ))}
                          </select>
                        )}
                        
                        {field.type === 'datetime-local' && (
                          <input
                            type="datetime-local"
                            className="form-control form-control-lg"
                          />
                        )}
                      </div>
                    ))}
                    
                    <button 
                      type="submit" 
                      className="btn btn-primary btn-lg w-100 mt-3 fw-bold"
                    >
                      Book Appointment
                    </button>
                  </form>
                </div>
                
                {/* Benefits Column */}
                <div className="col-md-5 bg-light p-4 p-md-5 d-flex flex-column">
                  <h3 className="mb-4 fw-bold">Benefits</h3>
                  <ul className="list-unstyled mb-auto">
                    {benefits.map((benefit, index) => (
                      <li key={index} className="mb-3 d-flex">
                        <span className="text-success me-2">✓</span>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  <img src={featureImage} width={250} height={250}  />
                  <div className="mt-4 pt-3 border-top">
                    <div className="d-flex mb-2">
                      <i className="bi bi-telephone text-primary me-3 fs-5"></i>
                      <span>24/7 Customer Support</span>
                    </div>
                    <div className="d-flex">
                      <i className="bi bi-shield-check text-primary me-3 fs-5"></i>
                      <span>Certified Professionals</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}