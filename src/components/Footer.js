const Footer = () => {
  return (
    <footer className="footer">
      <div className="container grid grid-3">
        <div>
          <h2 className="text-dark">Online Chess</h2>
          <p>Copyright &copy; 2021 RomanJ55</p>
        </div>
        <nav>
          <ul>
            <li>
              <a href="index.html">Play</a>
            </li>
            <li>
              <a
                href="https://en.wikipedia.org/wiki/Rules_of_chess"
                target="_blank"
                rel="noopener noreferrer"
              >
                Chess rules
              </a>
            </li>
            <li>
              <a href="contact.html">Contact</a>
            </li>
          </ul>
        </nav>
        <div className="social">
          <a
            href="https://github.com/RomanJ55"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github fa-2x"></i>
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-facebook fa-2x"></i>
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-instagram fa-2x"></i>
          </a>
          <a
            href="https://twitter.com/home"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-twitter fa-2x"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
