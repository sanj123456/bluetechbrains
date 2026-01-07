import React from 'react'
import './jobdetailsection.scss'

export default function JobDetailSection({data}) {
  return (
    <div id="job-detail-section">
        <div className="info-box">
          <h2 className="title">Job Description</h2>
          <p>{data.jobDescription}</p>
        </div>
        <div className="info-box">
          <h2 className="title">Minimum Qualifications</h2>
          <p>{data.minimumQualification}</p>
        </div>
        <div className="responsibility-box">
          <h2 className="title">Roles and Responsibilities</h2>
          <div className="grid-box">
            <div className="box">
              <ul>
                {data.roles.map((item) => {
                  return <li>{item}</li>;
                })}
              </ul>
            </div>
            <div className="box">
              <ul>
                {data.responsibility.map((item) => {
                  return <li>{item}</li>;
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
  )
}
