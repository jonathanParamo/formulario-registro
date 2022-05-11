import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { CHANGE_EMAIL, CHANGE_NAME, CHANGE_PHONENUMBER } from "./store"
import { CHANGE_SURNAME } from "./store"
import Button from "./Button"
import './App.css'

const Form = () => {
  const dispatch = useDispatch()
  const {
    name, surname, email, phoneNumber
  } = useSelector( rootReducer  => ({
    name: rootReducer.name,
    surname: rootReducer.surname,
    email: rootReducer.email,
    phoneNumber: rootReducer.phoneNumber,
  }))

  const validationData = () => {
    if(name === '' && surname === '') {
      alert('name or surname required')
    }
    if(email === '' && phoneNumber === '') {
      alert('email or phone number is required')
    }
  }

  return (
    <div className="containerForm">
      <p className="tittle">SING UP FOR FREE</p>
      <div className="name-surname">
        <input
          className="input-name"
          placeholder="Name:"
          type="text"
          id='name'
          onChange={(e) => dispatch({ type: CHANGE_NAME, payload: e.target.value })}
        />
        <input
          placeholder="Surname:"
          type="text"
          id='surname'
          onChange={(e) => dispatch({ type: CHANGE_SURNAME, payload: e.target.value })}
          />
      </div>
      <br/>
      <div>
        <input
          classname="email-phone"
          placeholder="Email"
          type="text"
          id='email'
          onChange={(e) => dispatch({ type: CHANGE_EMAIL, payload: e.target.value })}
          />
      </div>
      <br/>
      <div>
        <input
          classname="email-phone"
          placeholder="Phone number:"
          type="text"
          id='phone_number'
          onChange={(e) => dispatch({ type: CHANGE_PHONENUMBER, payload: e.target.value })}
          />
      </div>
      <Button onclick={() => validationData()}/>
    </div>
  )
}

export default Form