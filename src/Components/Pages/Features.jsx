import React from 'react'

const Features = () => {
  return(<>
  <div className="features-section">
    <h1 className="features-text"><span>Powerful</span> Features to Improve Your Resume</h1>
    <p className='sub-heading'>Our AI-powered resume analyzer helps you identify mistakes, optimize keywords, and improve your resume to stand out to recruiters.</p>
        </div>

    <div className="box-container">
      <div className="box left">
        <div className="img"><img src='/Image6.png' className='images'/></div>
        <div className="feature-text">
      <h2>Instant Resume Analysis</h2>
      <p>Improve your resume for Applicant Tracking Systems (ATS) used by companies to filter candidates.</p>
      </div>
    </div>

      <div className="box right">
        <div className="img"><div className="img"><img src='/Image5.png' className='images'/></div></div>
        <div className="feature-text">
      <h2>Smart Suggestions</h2>
      <p>Get AI-powered tips to improve wording, formatting, and keywords.</p>
    </div>
    </div>

      <div className="box left">
         <div className="img"><div className="img"><img src='/Image3.png' className='images'/></div></div>
         <div className="feature-text">
      <h2>Resume Score</h2>
      <p>Receive a clear score and detailed report to understand how strong your resume is.</p>
    </div>
    </div>
  </div>
  </>)
}

export default Features
