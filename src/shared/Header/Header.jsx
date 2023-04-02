
import "./Header.css";

export function Header(){

    return(
        <nav className="navbar bg-dark" data-bs-theme="dark">
  <div className="container-fluid">
    <a className="navbar-brand">M-Cart</a>
    <div className="btn_container">
    <button className="btn btn-warning">Register</button>
    <button className="btn btn-warning">Login</button>
    </div>
    
  </div>
</nav>
    )
}