import React from 'react'
import { PiNumberSquareOneFill, PiNumberSquareThreeFill, PiNumberSquareTwoFill } from 'react-icons/pi'

const Use = () => {
  return ( <section className="about-steps">

        <h2 className="steps-title">How It <span>Works</span></h2>

        <div className="steps-container">

          <div className="step">
            <h3><PiNumberSquareOneFill /> Upload Resume</h3>
            <p>Upload your resume in PDF or text format.</p>
          </div>

          <div className="step">
            <h3><PiNumberSquareTwoFill /> AI Analysis</h3>
            <p>Our AI scans your resume and analyzes its structure and content.</p>
          </div>

          <div className="step">
            <h3><PiNumberSquareThreeFill /> Get Improvements</h3>
            <p>Receive detailed feedback and suggestions to improve it.</p>
          </div>
          
        </div>
      </section>
  )
}

export default Use
