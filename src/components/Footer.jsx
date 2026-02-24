const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p> {new Date().getFullYear()} Grocery Group 1. All rights reserved.</p>
        <div className="footer-links">
          <a href="#">Contact Us</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
