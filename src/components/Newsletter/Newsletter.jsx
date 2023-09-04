import React, { useRef, useState } from "react";
import "./Newsletter.scss";
import ErroIcon from "../../images/icon-error.svg";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const inputRef = useRef();

  const handleInput = (e) => {
    setEmail(e.target.value);
    setErrorMessage(false);
    setError(false);
  };

  const isValidEmail = (email) =>{
    return /\S+@\S+\.\S+/.test(email)
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === "") {
      setError(true);
      setErrorMessage("Enter your email address");
    } else if (!isValidEmail(email)) {
      setError(true);
      setErrorMessage("Whoops, make sure its an email");
    } else {
      setError(false);
      setErrorMessage("");
      setEmail("");
    }
  };

  return (
    <section className="newsletter">
      <div className="container">
        <span> 35,000+ already joined</span>
        <h2>Stay up-to-date with what we’re doing</h2>

        <form onSubmit={handleSubmit}>
          <div className={`inputWrapper ${error ? "error" : ""}`}>
            <input
              ref={inputRef}
              type="text"
              placeholder="Enter your email address"
              value={email}
              onChange={handleInput}
            />
            <p>{errorMessage}</p>
            <img src={ErroIcon} alt="icon" />
          </div>

          <button className="redBtn" onClick={() => inputRef.current.focus()}>
            {" "}
            Contact Us
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
