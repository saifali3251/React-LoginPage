import {useState, useRef } from 'react';

const SimpleInput = (props) => {
  const [enteredName,setEnteredName] = useState('');
  const nameInputRef = useRef();
  const [enteredNameIsValid, setEnteredNameIsValid] = useState(false)

  const getEnterendName = (event) =>{
    console.log(event.target.value);
    setEnteredName(event.target.value)
    // console.log(enteredName);
  };

  const formSubmitHandler = event =>{
    event.preventDefault();
    console.log(enteredName);
    const enteredValue = nameInputRef.current.value;
    console.log(enteredValue);
  }

  return (
    <form>
      <div className='form-control'>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name'
        onChange={getEnterendName}
        />
      </div>
      <div className="form-actions">
        <button onClick={formSubmitHandler}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
