const Header = () => {
  return (
    <header className="absolute">
      <nav className="container flex">
        <h1>
          <a href="#">Bakery</a>
        </h1>
        <ul className="flex gap-1">
          <li><a className="anchor" href="#">Home</a></li>
          <li><a className="anchor" href="#">About Us</a></li>
          <li><a className="anchor" href="#">Reservation</a></li>
          <li><a className="anchor" href="#">Backers</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header