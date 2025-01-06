import React, { useState } from "react";
const FormValidation = () => {
  //! 1]. Initializing state
  let [formData, setFormData] = useState({
    requireField: "",
    email: "",
    password: "",
    confirmpass: "",
    url: "",
    digits: "",
    number: "",
    alphanum: "",
    textarea: "",
  });

  let handleReset = () => {
    e.preventDefault();
    setFormData({
      requireField: "",
      email: "",
      password: "",
      confirmpass: "",
      url: "",
      digits: "",
      number: "",
      alphanum: "",
      textarea: "",
    });
  };
  let {requiredField, email, password, confirmpass, url, digits, number, alphanum, textarea} = formData

  //! 3].State updation{onchange event}
  let handleChange = (e) => {
    let { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  };
  let [errors, setErrors] = useState({})

  //! 4].Onsubmit Event with e.preventDefault()
  let handleSubmit = (e) => {
    e.preventDefault()


    let validationErrors = {}

    //reqiredField
    if (requiredField == "") {
      //objectname.keyname="value"
      validationErrors.requiredField = "This field is required"
    }

    //email
    let regexEmail = /\S+@\S+\.\S+/
    if (email == "") {
      validationErrors.email = "This  field is required"
    } else if (!regexEmail.test(email)) {
      validationErrors.email = "This should be  a valid email"
    }

    //password
    if (password == "") {
      validationErrors.password = "This field is required"
    }
    // confirmpassword
    if (confirmpass == "") {
      validationErrors.confirmpass = "This field is required"
    } else if (password!=confirmpass) {
      validationErrors.confirmpass = "The password is not matching";
    }


    // url
    let regexUrl =/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/
    if (url == "") {
      validationErrors.url = "this field is required"
    } else if (!regexUrl.test(url)) {
      validationErrors.url = "this should be url"
    }

    // digits
    let regexDigits = /^[0-9]+$/
    if (digits=="") {
      validationErrors.digits = "This field is required"
    } else if (!regexDigits.test(digits)) {
      validationErrors.digits = "Decimal number not allowed"
    }

    // number
    let regexNumbers = /^-?\d+(?:\.\d+)?$/;
    if (number == "") {
      validationErrors.number = "This field is required";

    } else if (!regexNumbers.test(number)) {
      validationErrors.number = "This value should be a number";
    }

    //alphanum
    let regexAlphanum = /^[a-zA-Z0-9\s]+$/ 
    if ((alphanum = "")) {
      validationErrors.alphanum = "This field is required";
    } else if (!regexAlphanum.test(alphanum)) {
      validationErrors.alphanum = "This value should be a alphanum";
    }
    //text area
    if (textarea == "") {
      validationErrors.textarea = "this field is required";
    }
    setErrors(validationErrors);
  }
  return (
    <>
      {/* w-1/3 with of your window ml-4 is marigin line */}
      <form className="w-1/3 ml-4">
        <legend className="text-2xl font-bold text-red-800 border-b-[3.5px]">
          Form Validation
        </legend>

        {/* required filed */}

        <section className="form-group p-[1.5px] my-3">
          <label>Required Field</label>
          <div className="inp mt-2">
            {/* //! 2]. Pass the value and name prop to the input field */}
            <input
              type="text"
              placeholder="required field"
              className="border bg-slate-50 p-2 w-full"
              name="requiredField"
              value={requiredField}
              onChange={handleChange}
            ></input>
            <div className="form-error text-red-600 text-sm">
              {errors.requiredField && <span>{errors.requiredField}</span>}
            </div>
          </div>
        </section>

        {/* Email */}
        <section className="form-group p-[1.5px] my-3">
          <label>Email</label>
          <div className="inp mt-2">
            <input
              type="text"
              placeholder="Enter your email"
              className="border bg-slate-50 p-2 w-full"
              name="email"
              value={email}
              onChange={handleChange}
            ></input>
            <div className="form-error text-red-700 text-sm">
              {errors.email && <span>{errors.email}</span>}
            </div>
          </div>
        </section>

        {/* password */}

        <section className="form-group p-[1.5px] my-3">
          <label>Password</label>
          <div className="inp mt-2">
            <input
              type="password"
              placeholder="enter your password"
              className="border bg-slate-50 p-2 w-full"
              name="password"
              value={password}
              onChange={handleChange}
            ></input>
            <div className="form-error text-red-600 text-sm">
              {errors.password && <span>{errors.password}</span>}
            </div>
          </div>
        
        {/* confirm password */}      
          <div className="inp mt-2">
            <input
              type="password"
              placeholder="confirm password"
              className="border bg-slate-50 p-2 w-full"
              name="confirmpass"
              value={confirmpass}
              onChange={handleChange}
            ></input>
            <div className="form-error text-red-600 text-sm">
              {errors.confirmpass && <span>{errors.confirmpass}</span>}
            </div>
          </div>
        </section>

        {/* url */}

        <section className="form-group  p-[1.5px] my-3">
          <label> URL</label>
          <div className="inp  mt-2">
            <input
              type="text"
              placeholder="enter url"
              className="border bg-slate-50 p-2 w-full"
              name="url"
              value={url}
              onChange={handleChange}
            ></input>
            <div className="form-error text-red-600 text-sm">
              {errors.url && <span>{errors.url}</span>}
            </div>
          </div>
        </section>

        {/* digits */}

        <section className="form-group p-[1.5px] my-3">
          <label> Digits</label>
          <div className="inp  mt-2">
            <input
              type="text"
              placeholder="enter digits"
              className="border bg-slate-50 p-2 w-full"
              name="digits"
              value={digits}
              onChange={handleChange}
            ></input>
            <div className="form-error text-red-600 text-sm">
              {errors.digits && <span>{errors.digits}</span>}
            </div>
          </div>
        </section>

        {/* number */}

        <section className="form-group p-[1.5px] my-3">
          <label> Number</label>
          <div className="inp mt-2">
            <input
              type="text"
              placeholder="enter number"
              className="border bg-slate-50 p-2 w-full"
              name="number"
              value={number}
              onChange={handleChange}
            ></input>
            <div className="form-error text-red-600 text-sm">
              {errors.number && <span>{errors.number}</span>}
            </div>
          </div>
        </section>

        {/* alphanumeric */}

        <section className="form-group p-[1.5px] my-3">
          <label> Alphanumeric</label>
          <div className="inp mt-2">
            <input
              type="text"
              placeholder="enter alphanumeric"
              className="border bg-slate-50 p-2 w-full"
              name="alphanum"
              value={alphanum}
              onChange={handleChange}
            ></input>
            <div className="form-error text-red-600 text-sm">
              {errors.alphanum && <span>{errors.alphanum}</span>}
            </div>
          </div>
        </section>

        {/* Text area */}

        <section className="form-group p-[1.5px] my-3">
          <label> Textarea</label>
          <div className="inp mt-2">
            <textarea
              rows={5}
              cols={20}
              className="border bg-slate-50 p-2 w-full"
              name="textarea"
              value={textarea}
              onChange={handleChange}
            ></textarea>
          </div>
        </section>

        <section className="form-group">
          <button
            className="bg-red-800 text-white px-4 py-2 rounded-md"
            onClick={handleSubmit}
          >
            Submit
          </button>
          <button className="bg-red-800 text-white px-6 py-2 rounded-md" onClick={handleReset}>
            Reset
          </button>
        </section>
      </form>
    </>
  );
};

export default FormValidation;
