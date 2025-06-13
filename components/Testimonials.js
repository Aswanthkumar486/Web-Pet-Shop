import React from 'react';

export default function Testimonials({ data }) {
  if (!Array.isArray(data) || data.length === 0) {
    return null; // Or return a placeholder section if needed
  }

  return (
    <section className="container my-5" id="testimonials">
      <h2 className="text-center mb-4">Client Testimonials</h2>

      <div className="row justify-content-center">
        {data.map((testimonial, i) => (
          <div className="col-md-8" key={i}>
            <div className="border rounded shadow-sm p-4 bg-light">
              <blockquote className="blockquote mb-3">
                <p className="mb-0">"{testimonial.quote}"</p>
              </blockquote>
              <footer className="blockquote-footer">{testimonial.author}</footer>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
