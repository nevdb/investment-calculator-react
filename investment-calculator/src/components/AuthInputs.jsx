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
        <h1 className="mb-2 text-amber-300 text-xl">User</h1>
        <p>
          <label className={`label ${emailNotValid ? "invalid" : ""}`}>
            Email
          </label>
          <input
            type="email"
            // style={{ backgroundColor: emailNotValid ? "#fed2d2" : "30677e" }}
            className={emailNotValid ? "invalid" : undefined}
            onChange={(event) => handleInputChange("email", event.target.value)}
          />
        </p>
        <p>
          <label className={`label ${passwordNotValid ? "invalid" : ""}`}>
            Password
          </label>
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
