import React from "react"
import { useRef } from "react"
import { signup } from "./firebase"


export const Auth = () => {

  const emailRef = useRef();
  const passwordRef = useRef();

  async function handleSignup() {
    await signup(emailRef.current.value, passwordRef.current.value)
  }

  return (
    <React.Fragment>
      <div className="container">
        <div>
          <input  ref={emailRef} placeholder="Email" />
          <input  ref={passwordRef} type="password" placeholder="Password" />
        </div>

        <button onClick={handleSignup}>Sign Up</button>
      </div>

    </React.Fragment>
  )
}
