import React from "react";

export default function Project({ title, demoLink, githubLink, projectImg }) {
  return (
    <React.Fragment>
      <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
        <div className="card-flyer">
          <div className="text-box">
            <div className="image-box">
              {demoLink.length > 1 ? (
                <div>
                  <a href={demoLink} target="_blank">
                    <img src={projectImg} alt="Screenshot of BTS Quiz" />
                  </a>
                </div>
              ) : (
                <a href="javascript:void(0)">
                  <img src={projectImg} alt="Img of Coming Soon"></img>
                </a>
              )}
            </div>
            {githubLink.length > 1 ? (
              <div>
                <div className="text-container">
                  <h6>{title}</h6>
                  <p>
                    Click
                    <a href={githubLink} target="_blank">
                      here
                    </a>
                    to check out the repository!
                  </p>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
