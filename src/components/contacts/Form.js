import React from 'react';
import { Row, Button, Container, Col, Label, FormGroup } from 'reactstrap';

const Form = (props) => {
  const {inputs, setInputs} = props;

  const onChange = e => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value
    });
  };

return (
  <div>
     <form>
     <h1>Formulario con Hooks</h1>
        <label htmlFor="firstName">Nombre:
        <input onChange={onChange} type="text" name="firstName" />
        </label>
      

        <label htmlFor="lastName">Apellido:
        <input onChange={onChange} type="text" name="lastName" />
        </label>

        <label htmlFor="email">Email:
        <input onChange={onChange} type="text" name="email" />
        </label>

        <label htmlFor="password">Contraseña:
        <input onChange={onChange} type="password" name="password" />
        </label>

        <label htmlFor="confirmPassword">Confirma Contraseña:
        <input onChange={onChange} type="password" name="confirmPassword" />
        </label>
  </form>
  </div>

  );
};

export default Form;
