export const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-brand">
          <h2>Resume<span>IQ</span></h2>
          <p>
            AI powered resume analyzer that helps you improve your resume,
            optimize keywords and increase your chances of getting interviews.
          </p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>
          <a href="/">Home</a>
          <a href="/features">Features</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </div>

        <div className="footer-social">
          <h3>Follow Us</h3>
          <a href="https://github.com/Shuhel15">Github</a>
          <a href="https://www.linkedin.com/in/shuhel-ahmed-ba47332a5/">LinkedIn</a>
          <a href="mailto:shuhelahmed3789@mail.com">Email Me</a>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 ResumeIQ. All Rights Reserved.</p>
      </div>

    </footer>
  );
};
