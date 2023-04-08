import { useState } from 'react'
import './Signup.css'

// Name
// Email
// Password

export function SignUp() {
  const [user, setUser] = useState({ name: '', email: '', password: '' })
  // bind/linking this user with individual fields of form.
  // From JS=> HTML
  // HTML=> JS ?

  function handleSignUp() {
    console.log(user)
  }

  return (
    <div className="container">
      <div className="row">
        {/* 1 row is divided in 12 columns. */}
        <div className="col-md-6"></div>
        <div className="col-md-6">
          <h3>Please register to get started.</h3>
          <hr></hr>
          <form className="signupform">
            <div class="mb-3">
              <label for="name" class="form-label">
                Name
              </label>
              <input
                type="text"
                onInput={(event) => {
                  setUser({ ...user, name: event.target.value })
                }}
                value={user.name}
                class="form-control"
                id="name"
                placeholder="Your name"
              ></input>
            </div>
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
              onClick={handleSignUp}
              className="btn btn-success float-end"
            >
              Signup{' '}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
