import Plant2 from "../assets/Hanging-Plants.jpeg";
import Plant3 from "../assets/oasis.jpeg";
import { useState } from "react";

/*
    Keep working on the CSS/styles
    Adding React Context
    Using external API to display some data (like a weather API)
    Trying to build a small API with NodeJS and Express (that will work with this app)
*/

const Contact = () => {
  // const [state, setState] = useState({});
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    const { firstName, lastName, email } = event.target;

    console.log(firstName.value, lastName.value, email.value);

    // fetch
    // localStorage
    setSuccess(true);
  };

  const checkRequired = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    if (!value) {
      setErrors({
        ...errors,
        [name]: "This field is required",
      });
    } else {
      const { firstName, lastName, ...otherErrors } = errors;
      setErrors(otherErrors);
    }
  };

  const checkPhoneNumber = (event) => {
    const value = event.target.value;
    if (!value.match(/^[0-9]+$/)) {
      setErrors({
        ...errors,
        phoneNumber: "This number is invalid.",
      });
    } else {
      const { phoneNumber, ...otherErrors } = errors;
      setErrors(otherErrors);
    }
  };

  return (
    <div>
      {/*<h1>Contact</h1>*/}
      <div
        className="background-banner"
        style={{ backgroundImage: `url(${Plant2})` }}
      ></div>
      <form onSubmit={handleSubmit}>
        <h2>Personal Information</h2>
        <br></br>
        <label>
          First Name (required)
          <input
            onChange={checkRequired}
            name="firstName"
            placeholder="Firstname"
          />
          {errors.firstName}
        </label>
        <label>
          Last Name (required)
          <input
            onChange={checkRequired}
            name="lastName"
            placeholder="Lastname"
          />
          {errors.lastName}
        </label>
        <label>
          Email
          <input name="email" placeholder="Email" />
        </label>
        <label>
          Phone Number
          <input
            onChange={checkPhoneNumber}
            name="phoneNumber"
            placeholder="Phone Number"
          />
          {errors.phoneNumber}
        </label>
        <h2>Address</h2>
        <br></br>
        <label>
          Street
          <input name="street" placeholder="Street" />
        </label>
        <label>
          City
          <input name="city" placeholder="City" />
        </label>
        <label>
          State
          <input name="state" placeholder="State" />
        </label>
        <label>
          Zip Code
          <input name="zipCode" placeholder="Zip Code" />
        </label>
        <label>
          Country
          <input name="country" placeholder="Country" />
        </label>
        <br></br>
        <div>
          <button class="btn-submit">Submit</button>
        </div>
      </form>
      <footer>
        <p>Plants in the room bring life into the air.</p>
      </footer>
    </div>
  );
};

export default Contact;
