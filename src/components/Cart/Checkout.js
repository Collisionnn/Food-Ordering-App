import { useRef, useState } from "react";
import styles from "./Checkout.module.css";

//basic validation helper functions
const isEmpty = (value) => value.trim() === "";
const fiveChars = (value) => value.trim().length === 5;

const Checkout = (props) => {
  const [formInputValidity, setFormInputValidity] = useState({
    name: true,
    address: true,
    city: true,
    postcode: true,
  });

  const nameInputRef = useRef();
  const addressInputRef = useRef();
  const cityInputRef = useRef();
  const postcodeInputRef = useRef();

  //confirm and input validation
  const confirmHandler = (event) => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredCity = cityInputRef.current.value;
    const enteredPostcode = postcodeInputRef.current.value;

    const validName = !isEmpty(enteredName);
    const validAddress = !isEmpty(enteredAddress);
    const validCity = !isEmpty(enteredCity);
    const validPostcode = fiveChars(enteredPostcode);

    setFormInputValidity({
      name: validName,
      address: validAddress,
      city: validCity,
      postcode: validPostcode,
    });

    const formValid = validName && validAddress && validCity && validPostcode;

    if (!formValid) {
      return;
    }

    props.onConfirm({
      name: enteredName,
      address: enteredAddress,
      city: enteredCity,
      postcode: enteredPostcode,
    });
  };

  return (
    <form className={styles.form} onSubmit={confirmHandler}>
      <div
        className={`${styles.control} ${
          formInputValidity.name ? "" : styles.invalid
        }`}
      >
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" ref={nameInputRef} />
        {!formInputValidity.name && <p>Please Enter a valid Name</p>}
      </div>

      <div
        className={`${styles.control} ${
          formInputValidity.address ? "" : styles.invalid
        }`}
      >
        <label htmlFor="street">Address</label>
        <input type="text" id="street" ref={addressInputRef} />
        {!formInputValidity.address && <p>Please Enter a valid Address</p>}
      </div>

      <div
        className={`${styles.control} ${
          formInputValidity.city ? "" : styles.invalid
        }`}
      >
        <label htmlFor="city">City</label>
        <input type="text" id="city" ref={cityInputRef} />
        {!formInputValidity.city && <p>Please Enter a valid City</p>}
      </div>
      <div
        className={`${styles.control} ${
          formInputValidity.postcode ? "" : styles.invalid
        }`}
      >
        <label htmlFor="postcode">Potcode</label>
        <input type="text" id="postcode" ref={postcodeInputRef} />
        {!formInputValidity.postcode && (
          <p>Please Enter a valid Postcode (5 Caracters)</p>
        )}
      </div>
      <div className={styles.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button className={styles.submit} onClick={confirmHandler}>
          Place Order
        </button>
      </div>
    </form>
  );
};

export default Checkout;
