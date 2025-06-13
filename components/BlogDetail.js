import React from 'react';

export default function BlogDetail({ data }) {
  return (
    <div className="container py-5" id='blogDetail'>
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <article className="bg-white rounded-4 shadow-sm overflow-hidden">
            {/* Featured Image */}
            <img 
              src={data.featuredImage} 
              className="img-fluid w-100 object-fit-cover" 
              alt={data.title}
              style={{ height: "450px" }}
            />
            
            <div className="p-4 p-md-5">
              {/* Title */}
              <h1 className="display-5 fw-bold mb-3">{data.title}</h1>
              
              {/* Metadata */}
              <div className="d-flex flex-wrap align-items-center gap-4 mb-4">
                <div className="d-flex align-items-center">
                  <img 
                    src={data.author.avatar} 
                    className="rounded-circle me-2" 
                    width="40" 
                    height="40" 
                    alt={data.author.name}
                  />
                  <div>
                    <span className="d-block fw-medium">{data.author.name}</span>
                    <small className="text-muted">{data.author.role}</small>
                  </div>
                </div>
                
                <div className="d-flex gap-3">
                  <div>
                    <i className="bi bi-calendar me-1 text-primary"></i>
                    <span>{data.date}</span>
                  </div>
                  <div>
                    <i className="bi bi-clock me-1 text-primary"></i>
                    <span>{data.readingTime} read</span>
                  </div>
                </div>
              </div>
              
              {/* Categories */}
              <div className="mb-4">
                {data.categories.map((category, index) => (
                  <span 
                    key={index} 
                    className="badge bg-light text-primary border border-primary me-2 mb-2"
                  >
                    {category}
                  </span>
                ))}
              </div>
              
              {/* Content */}
              <div className="blog-content">
                {data.content.map((section, index) => (
                  <div key={index} className="mb-4">
                    <h3 className="mb-3">{section.heading}</h3>
                    <p className="lead">{section.paragraph}</p>
                    
                    {section.image && (
                      <figure className="my-4 text-center">
                        <img 
                          src={section.image} 
                          className="img-fluid rounded-3 shadow-sm" 
                          alt={section.heading} 
                        />
                        <figcaption className="mt-2 text-muted">
                          {section.caption}
                        </figcaption>
                      </figure>
                    )}
                  </div>
                ))}
              </div>
              
              {/* Tags */}
              <div className="py-4 border-top border-bottom">
                <h5 className="d-inline-block me-2">Tags:</h5>
                {data.tags.map((tag, index) => (
                  <a 
                    key={index} 
                    href="#" 
                    className="btn btn-sm btn-outline-secondary me-2 mb-2"
                  >
                    #{tag}
                  </a>
                ))}
              </div>
              
              {/* Author Bio */}
              <div className="my-5 p-4 bg-light rounded-3">
                <div className="d-flex align-items-center mb-3">
                  <img 
                    src={data.author.avatar} 
                    className="rounded-circle me-3" 
                    width="80" 
                    height="80" 
                    alt={data.author.name}
                  />
                  <div>
                    <h4 className="mb-0">{data.author.name}</h4>
                    <p className="text-muted mb-0">{data.author.bio}</p>
                  </div>
                </div>
                <div className="d-flex gap-3 mt-3">
                  <a href="#" className="text-primary">
                    <i className="bi bi-twitter fs-5"></i>
                  </a>
                  <a href="#" className="text-primary">
                    <i className="bi bi-facebook fs-5"></i>
                  </a>
                  <a href="#" className="text-primary">
                    <i className="bi bi-linkedin fs-5"></i>
                  </a>
                </div>
              </div>
            </div>
          </article>
          
          {/* Related Articles */}
          <section className="mt-5">
            <h3 className="mb-4 fw-bold">Related Articles</h3>
            <div className="row">
              {data.relatedArticles.map((article, index) => (
                <div key={index} className="col-md-6 mb-4">
                  <div className="card border-0 h-100 shadow-sm">
                    <img 
                      src={article.image} 
                      className="card-img-top object-fit-cover" 
                      alt={article.title}
                      style={{ height: "200px" }}
                    />
                    <div className="card-body">
                      <div className="d-flex gap-3 mb-2">
                        <small className="text-primary fw-medium">{article.category}</small>
                        <small className="text-muted">{article.date}</small>
                      </div>
                      <h5 className="card-title">{article.title}</h5>
                      <p className="card-text">{article.excerpt}</p>
                      <a href="#" className="btn btn-link px-0 text-primary fw-medium">
                        Read more <i className="bi bi-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}