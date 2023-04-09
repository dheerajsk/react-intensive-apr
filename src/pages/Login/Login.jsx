import { useState } from 'react'
import './Login.css'
import { useNavigate } from 'react-router-dom'

// Name
// Email
// Password

export function Login() {
  const [user, setUser] = useState({ email: '', password: '' })
  const [hasError, setError] = useState(false)
  const navigate = useNavigate()
  // bind/linking this user with individual fields of form.
  // From JS=> HTML
  // HTML=> JS ?

  function handleSignIn() {
    console.log(user)
    fetch('http://localhost:4100/api/auth/login', {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      // here we receive
      .then((response) => {
        if (response.status == 400) {
          setError(true)
        } else {
          setError(false)
        }
        return response.json()
      })
      .then((jsonResponse) => {
        console.log(jsonResponse)
        localStorage.setItem('userDetails', JSON.stringify(jsonResponse))
        navigate('/')
      })
      .catch((err) => {
        console.log('Error occurred')
        console.log(err)
      })
  }

  return (
    <div className="container">
      <div className="row">
        {/* 1 row is divided in 12 columns. */}
        <div className="col-md-6"></div>
        <div className="col-md-6">
          <h3>Please login to get started.</h3>
          <hr></hr>

          {hasError && (
            <div class="alert alert-danger" role="alert">
              Invalid Credentials
            </div>
          )}

          <form className="signupform">
            <div class="mb-3">
              <label for="email" class="form-label">
                Email address
              </label>
              <input
                value={user.email}
                type="email"
                class="form-control"
                id="email"
                placeholder="Your email"
                onInput={(event) => {
                  setUser({ ...user, email: event.target.value })
                }}
              ></input>
            </div>
            <div class="mb-3">
              <label for="password" class="form-label">
                Password
              </label>
              <input
                type="password"
                onInput={(event) => {
                  setUser({ ...user, password: event.target.value })
                }}
                value={user.password}
                class="form-control"
                id="password"
                placeholder="Your password"
              ></input>
            </div>
            <button
              type="button"
              onClick={handleSignIn}
              className="btn btn-success float-end"
            >
              Login{' '}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
