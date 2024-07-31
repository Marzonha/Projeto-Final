import styles from '../NavBar/navbar.module.css';

export default function Navbar() {
  return (
    <div>
        <nav className="navbar">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
  
    </div>
  )
}
