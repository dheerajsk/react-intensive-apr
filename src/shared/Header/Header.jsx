import { useNavigate } from 'react-router-dom'
import './Header.css'
import { useEffect, useState } from 'react'

export function Header() {
  const [isLoggedIn, setLoggedInStatus] = useState(false)
  // get data from localStorage.

  useEffect(() => {
    const userDetails = localStorage.getItem('userDetails')
    if (userDetails) {
      setLoggedInStatus(true)
    }
  }, [])

  const cartItems = localStorage.getItem('cartItems')

  if (cartItems) {
    var cartItemsLength = JSON.parse(cartItems).length
  }

  const navigate = useNavigate()

  return (
    <nav className="navbar bg-dark" data-bs-theme="dark">
      <div className="container-fluid">
        <a id="anchor" className="navbar-brand">
          M-Cart
        </a>
        <div className="btn_container">
          {!isLoggedIn && (
            <div>
              <a href="/register" className="btn btn-warning">
                Register
              </a>
              &nbsp; &nbsp;
              <button
                onClick={() => {
                  navigate('login')
                }}
                className="btn btn-warning"
              >
                Login
              </button>
            </div>
          )}

          {isLoggedIn && (
            <div>
              <button className="btn btn-info">
                Cart&nbsp;
                {cartItemsLength && (
                  <span class="badge bg-secondary">{cartItemsLength}</span>
                )}
              </button>
              &nbsp;&nbsp;
              <button
                onClick={() => {
                  localStorage.removeItem('userDetails')
                  navigate('login')
                }}
                className="btn btn-warning"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}
