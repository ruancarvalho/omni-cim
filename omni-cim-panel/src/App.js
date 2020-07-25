import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { Button, Form, FormGroup, Label, Input, FormFeedback } from 'reactstrap';

function App() {
  
  const [customer, setCustomer] = useState({});
  const [address, setAddress] = useState({});
  const [validZip, setValidZip] = useState(undefined);

  function handleChange(event) {
    const value = event.target.value;
    const name = event.target.name;

    setCustomer({[name]: value});
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const response = await fetch('/api/customers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(customer),
    });
    const body = await response.text();
    
    setCustomer(emptyCustomer);
    setAddress(emptyAddress);
  };

  function renderForm() {

    return (
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label for="name">Nome</Label>
          <Input type="text" name="name" id="name" value={customer.name}  onChange={handleChange} required />
        </FormGroup>
        <FormGroup>
          <Label for="zipcode">CEP</Label>
          {validZip === undefined 
            ? <Input type="text" name="zipcode" id="zipcode" onBlur={checkZipcode} required />
            : <Input type="text" name="zipcode" id="zipcode" onBlur={checkZipcode} valid={validZip} invalid={!validZip} required />
          }
          <FormFeedback>Formato de CEP inválido</FormFeedback>
        </FormGroup>
        <FormGroup>
          <Label for="street">Logradouro</Label>
          <Input type="text" name="street" id="street" value={address.logradouro} disabled />
        </FormGroup>
        <FormGroup>
          <Label for="complement">Complemento</Label>
          <Input type="text" name="complement" id="complement" value={address.complemento} onChange={handleChange} />
        </FormGroup>
        <FormGroup>
          <Label for="hood">Bairro</Label>
          <Input type="text" name="hood" id="hood" value={address.bairro} disabled />
        </FormGroup>
        <FormGroup>
          <Label for="city">Município</Label>
          <Input type="text" name="city" id="city" value={address.localidade} disabled />
        </FormGroup>
        <FormGroup>
          <Label for="state">UF</Label>
          <Input type="text" name="state" id="state" value={address.uf} disabled />
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    )
  }

  return (
    <div className="app">
      <header className="container my-5">
        <h1>Customer Interactions</h1>
      </header>
      <main className="container">
        <h2>Criar Conta</h2>
        {renderForm()}
      </main>
    </div>
  );

  function viacepCallback(json) {
    if ("erro" in json) {
      setValidZip(false)
      setAddress(emptyAddress);
    }
    else {      
      setAddress(json)
      setValidZip(true);
    }
  }

  function checkZipcode(e) {
    const zip = e.target.value.replace(/\D/g, '');
    const zipRegex = /^[0-9]{8}$/;

    if (zip !== "") {
      if (zipRegex.test(zip)) {

        fetch(`https://viacep.com.br/ws/${zip}/json/`)
          .then(response => response.json())          
          .then(data => viacepCallback(data));
      } else {
          setValidZip(false)
          setAddress(emptyAddress);
      }
    } else {
      setValidZip(false)
      setAddress(emptyAddress());
    }
  }
}

const emptyAddress = () => {
  return {
    "cep": "",
    "logradouro": "",
    "complemento": "",
    "bairro": "",
    "localidade": "",
    "uf": "",
  }
}

const emptyCustomer = () => {
  return {
    "name": "",    
  }
}

export default App;