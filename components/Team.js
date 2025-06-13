import React from 'react';

export default function Team({ data }) {
  const { title, team, facility } = data;

  return (
    <section className="py-5 bg-light" id="team">
      <div className="container py-lg-5">
        <div className="text-center mb-5 animate__animated animate__fadeInDown">
          <h2 className="display-5 fw-bold text-primary mb-3">{title}</h2>
          <p className="lead text-muted mx-auto" style={{ maxWidth: '700px' }}>
            Meet our certified professionals dedicated to providing exceptional care for your pets
          </p>
        </div>

        {/* Team Members */}
        <div className="row g-4">
          {team.map((member, index) => (
            <div
              key={index}
              className="col-md-6 col-lg-4 animate__animated animate__zoomIn animate__delay-1s"
            >
              <div className="card h-100 border-0 shadow-lg rounded-4 overflow-hidden">
                <div className="position-relative">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="card-img-top object-fit-cover"
                    style={{ height: '320px' }}
                  />
                  <div className="position-absolute bottom-0 start-0 bg-primary text-white py-2 px-4">
                    <span className="fs-5 fw-bold">{member.specialty}</span>
                  </div>
                </div>

                <div className="card-body p-4">
                  <div className="d-flex justify-content-between align-items-start mb-3">
                    <div>
                      <h5 className="card-title fw-bold mb-1">{member.name}</h5>
                      <h6 className="text-muted mb-0">{member.role}</h6>
                    </div>
                    <div className="bg-light rounded-circle p-2">
                      <i className="bi bi-chat-dots-fill text-primary fs-5"></i>
                    </div>
                  </div>

                  <ul className="list-unstyled mb-4">
                    {member.credentials.map((item, i) => (
                      <li key={i} className="d-flex mb-2">
                        <i className="bi bi-patch-check-fill text-primary me-2 mt-1"></i>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <p className="card-text">{member.bio}</p>
                </div>

                <div className="card-footer bg-transparent border-top-0 py-3">
                  <div className="d-flex gap-3">
                    <a href="#" className="text-primary fs-5">
                      <i className="bi bi-linkedin"></i>
                    </a>
                    <a href="#" className="text-primary fs-5">
                      <i className="bi bi-envelope-fill"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Facility Section */}
       </div>
    </section>
  );
}
