import { useState } from 'react'
import './Login.css'

// Name
// Email
// Password

export function Login() {
  const [user, setUser] = useState({ email: '', password: '' })
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
        return response.json()
      })
      .then((jsonResponse) => {
        console.log(jsonResponse)
      })
      .catch((err) => {
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
