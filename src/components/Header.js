const Header = () => {
  return (
    <header>
      <div className="container navbar flex">
        <h1 className="logo">Online Chess</h1>
        <ul className="flex">
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
      </div>
    </header>
  );
};

export default Header;
