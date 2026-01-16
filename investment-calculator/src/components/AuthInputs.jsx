import { useState } from "react";
import BaseInput from "./base/BaseInput";

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
    <div className="max-w-lg mx-auto my-4 shadow-md bg-gradient-to-b from-zinc-700 to-zinc-800">
      <div>
        <h1 className="mb-2 text-amber-300 text-xl">User</h1>

        <BaseInput
          label={"Email"}
          invalid={emailNotValid}
          onChange={(event) =>
            handleInputChange("password", event.target.value)
          }
        />
        <BaseInput
          label={"Password"}
          invalid={passwordNotValid}
          onChange={(event) =>
            handleInputChange("password", event.target.value)
          }
        />
      </div>
      <div className="my-4">
        <button
          type="button"
          className="text-amber-300 hover:text-amber-500 mr-2"
        >
          Create a new account
        </button>
        <button
          className="border border-amber-200 text-amber-300 hover:text-amber-500 px-4 py-2 rounded-md "
          type="button"
          onClick={handleLogin}
        >
          Sign In
        </button>
      </div>
    </div>
  );
}
