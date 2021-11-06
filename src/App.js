import React, { useState } from "react";
import logo from './logo.svg';
import './App.css';
import { Container, Row, Col } from 'reactstrap';
import Form from './components/contacts/Form';
import Results from './components/contacts/Results';


function App() {
  const [state, setState] = useState({
    name: "",
    lastname: "",
    email: "",
    phone: "",
    password: "",
    confirmpassword: "",
  });

  return <>
    <Form inputs={state} setInputs={setState} />
    <Results data={state} />
</>
}

export default App;
