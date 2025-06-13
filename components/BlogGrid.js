import React from 'react';

export default function BlogGrid({ data }) {
  return (
    <div className="container py-5" id='blogGrid'>
      <h2 className="fw-bold mb-4 text-center">Latest Blog Posts</h2>
      <div className="row">
        {data && Array.isArray(data) && data.map((post, index) => (
          <div className="col-md-6 col-lg-4 mb-4" key={index}>
            <div className="card h-100 border-0 shadow-sm">
              <img 
                src={post.image} 
                className="card-img-top object-fit-cover" 
                alt={post.title} 
                style={{ height: '200px' }}
              />
              <div className="card-body d-flex flex-column">
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <small className="text-muted">
                    <i className="bi bi-calendar2-week me-1 text-primary"></i>
                    {post.date}
                  </small>
                  <span className="badge bg-light text-primary border border-primary">
                    {post.category}
                  </span>
                </div>
                <h5 className="card-title fw-bold">{post.title}</h5>
                <p className="card-text">{post.excerpt}</p>
                <div className="mt-auto d-flex align-items-center gap-2 pt-3 border-top">
                  <img 
                    src={post.author.avatar} 
                    className="rounded-circle" 
                    width="35" 
                    height="35" 
                    alt={post.author.name} 
                  />
                  <span className="small text-muted">{post.author.name}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
        {!data && (
          <div className="col-12 text-center">
            <p className="text-muted">No blog data found.</p>
          </div>
        )}
      </div>
    </div>
  );
}
