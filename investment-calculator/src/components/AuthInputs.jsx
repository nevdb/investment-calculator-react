import { useState } from "react";

export default function AuthInputs() {
  const [submitted, setSubmitted] = useState(false);
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");

  const emailNotValid = submitted && !enteredEmail.includes("@");
  const passwordNotValid = submitted && enteredPassword.trim().length < 6;

  function handleInputChange(identifier, value) {
    if (identifier === "email") {
      setEnteredEmail(value);
    } else {
      setEnteredPassword(value);
    }
  }
  function handleLogin() {
    setSubmitted(true);
  }

  return (
    <div>
      <div>
        <p>
          <label>Email</label>
          <input
            type="email"
            style={{ backgroundColor: emailNotValid ? "#fed2d2" : "30677e" }}
            // className={emailNotValid ? "invalid" : undefined}
            onChange={(event) => handleInputChange("email", event.target.value)}
          />
        </p>
        <p>
          <label>Password</label>
          <input
            type="password"
            className={passwordNotValid ? "invalid" : undefined}
            onChange={(event) =>
              handleInputChange("password", event.target.value)
            }
          />
        </p>
      </div>
      <div>
        <button type="button" onClick={handleLogin}>
          Sign In
        </button>
      </div>
    </div>
  );
}
