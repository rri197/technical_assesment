import "../../styles/input_card.css";
import {formText, formAuxilliaryText, formHeader, formPlaceHolderText, formFooterText, formNavigationButtonsText} from "../../utils/data/data";
import { useState } from "react";

function InputCard() {
  const [inValidEmail, setInValidEmail] = useState("");
  const [inValidSIN, setInValidSIN] = useState("");
  const [inValidName, setInValidName] = useState("");
  const [inValidAmount, setInValidAmount] = useState("");
  const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const SINformat = /^[0-9]{9}$/;
  const nameformat = /^[a-z]{1,100}$/;


  const emailValidation = evt => {
    if (evt.target.value.match(mailformat))
    {
      // Validated
      setInValidEmail("");
    } else {
      setInValidEmail("Invalid email address.");
    }
  };
  const emailChange = evt => {
    if (evt.target.value.match(mailformat))
    {
      // Validated
      setInValidEmail("");
    }
  };
  const sinValidation = evt => {
    if (evt.target.value.match(SINformat))
    {
      // Validated
      setInValidSIN("");
    } else {
      setInValidSIN("Invalid SIN.");
    }
  };
  const sinChange = evt => {
    if (evt.target.value.match(SINformat))
    {
      // Validated
      setInValidSIN("");
    }
  };

  const nameValidation = evt => {
    if (evt.target.value.match(nameformat))
    {
      // Validated
      setInValidName("");
    } else {
      setInValidName("Invalid Name");
    }
  };
  const nameChange = evt => {
    if (evt.target.value.match(nameformat))
    {
      // Validated
      setInValidName("");
    }
  };

  const amountValidation = evt => {
    if (evt.target.value >= 1 && evt.target.value <= 50000)
    {
      // Validated
      setInValidAmount("");
    } else {
      setInValidAmount("Must be $1 - $50,000.");
    }
  };
  const amountChange = evt => {
    if (evt.target.value >= 1 && evt.target.value <= 50000)
    {
      // Validated
      setInValidAmount("");
    }
  };

    return (
      <>
      <div className="input_card col-md-8">
        <div className="card text-center mb-3">
          <div className="card-body">

         <div className="title">
          <span>
          {formHeader[0]}
          </span>
          <span className="title-sub-text">
          {formHeader[1]}
          </span>
         </div>

         <div className="details row text-left mt-3">
          <div className="col-md-2"></div>
          <div className="col-md-8">
          
          {/* {formText.map((context, index) => (
            <div className="details_form"> 
            <label className="form-label-text">
              {context}
            </label>
            <span className="auxilliary-text">
            {formAuxilliaryText[index]}
            </span>
            {index === 3 ? ( <div className="input-group">
              <div className="input-group-prepend col-md-1"><span className="input-group-text">$</span></div>
            <input className="col-md-11" placeholder={formPlaceHolderText[index]}
           required maxLength={60}>
            </input>
            </div>) : (<input placeholder={formPlaceHolderText[index]}></input>)}
          </div>
          ))} */}

          <form>
          <div className="details_form"> 
            <label className="form-label-text">
              {formText[0]}
            </label>
            <span className="auxilliary-text">
            {formAuxilliaryText[0]}
            </span>  
           <input className={Boolean(inValidEmail) ? "invalid-input-border" : "" } placeholder={formPlaceHolderText[0]} onBlur={emailValidation} onChange={emailChange} aria-invalid="true"></input>
             <span className="invalid-input">{inValidEmail}</span>
          </div>

          <div className="details_form"> 
            <label className="form-label-text">
              {formText[1]}
            </label>
            <span className="auxilliary-text">
            {formAuxilliaryText[1]}
            </span>
            <input placeholder={formPlaceHolderText[1]} className={Boolean(inValidSIN) ? "invalid-input-border" : "" }
            onBlur={sinValidation} onChange={sinChange}></input>
            <span className="invalid-input">{inValidSIN}</span>
          </div>

          <div className="details_form"> 
            <label className="form-label-text">
              {formText[2]}
            </label>
            <span className="auxilliary-text">
            {formAuxilliaryText[2]}
            </span>
            <input className={Boolean(inValidName) ? "invalid-input-border" : "" } placeholder={formPlaceHolderText[2]}
            onBlur={nameValidation} onChange={nameChange}></input>
            <span className="invalid-input">{inValidName}</span>
          </div>

          <div className="details_form"> 
            <label className="form-label-text">
              {formText[3]}
            </label>
            <span className="auxilliary-text">
            {formAuxilliaryText[3]}
            </span>
            <div className="input-group">
              <div className="input-group-prepend col-md-1"><span className="input-group-text" style={{flexFlow: "column"}}>$</span></div>
            <input className={Boolean(inValidAmount) ? "invalid-input-border col-md-11" : "col-md-11" } placeholder={formPlaceHolderText[3]}
            onBlur={amountValidation} onChange={amountChange}>
            </input>
            <span className="invalid-input">{inValidAmount}</span>
            </div>
          </div>

          </form>
          
          </div>

          <div className="form-text col-md-12">
          <span className="form-text text-muted text-center">
          {formFooterText[0]}
          </span>
          <span className="form-text text-center terms">
          {formFooterText[1]} <a href="https://paysimply.paymentsource.ca/terms-and-conditions" target="_blank" rel="noreferrer"
           className="terms-link">{formFooterText[2]}</a>
          </span>
         </div>

         </div>

        
         </div>

        </div>
        <div className="form_navigation_buttons row mt-3 halfBtnRow">
          {formNavigationButtonsText.map((content, index) => (<div className="col-6 halfBtn" key={index}>
            <button className="nav_button btn btn-primary btn-block btn-lg" onClick={() => window.open("https://paysimply.ca")}> {content} </button>
            </div>))}
        </div>
      </div>
      </>
    )
  }
  
  export default InputCard;