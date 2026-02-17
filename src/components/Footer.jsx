const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p>&copy; {new Date().getFullYear()} GroceryMVP. All rights reserved.</p>
        <div className="footer-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Contact Us</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
