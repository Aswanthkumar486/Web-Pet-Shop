import React from 'react';

export default function About({ data }) {
  return (
    <section className="py-5 bg-light">
      <div className="container py-lg-5">
        <div className="row g-5 align-items-center">
          {/* Image column */}
          <div className="col-lg-6 position-relative">
            <img 
              src={data.image} 
              alt="Pet care at Paws & Claws" 
              className="img-fluid rounded-3 shadow-lg"
            />
            <div className="position-absolute top-0 end-0 bg-primary text-white rounded-start py-2 px-3 shadow">
              <span className="fs-4 fw-bold">+{data.experience} Years</span>
            </div>
          </div>

          {/* Content column */}
          <div className="col-lg-6">
            <h2 className="display-5 fw-bold text-primary mb-3">{data.title}</h2>
            <h3 className="text-secondary mb-4">{data.subtitle}</h3>
            <p className="lead mb-5">{data.description}</p>

            {/* Values grid */}
            <div className="row g-4">
              {data.values.map((item, index) => (
                <div key={index} className="col-md-6">
                  <div className="bg-white p-4 rounded-3 h-100 shadow-sm">
                    <h4 className="h5 text-primary">{item.title}</h4>
                    <p className="mb-0">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats section */}
        <div className="row mt-6 pt-5 text-center">
  {data.stats.map((stat, index) => (
    <div
      key={index}
      className={`col-md-4 mb-4 mb-md-0 animate__animated animate__fadeInUp animate__delay-${index + 1}s`}
    >
      <div className="display-4 fw-bold text-primary">{stat.value}</div>
      <div className="fs-5 text-muted">{stat.label}</div>
    </div>
  ))}
</div>

      </div>
    </section>
  );
}