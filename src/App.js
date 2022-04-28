import { useState } from 'react';
import './App.css';
import BtnKeys from './components/BtnKeys';
import ButtonBox from './components/ButtonBox';
import Container from './components/Container';
import Screen from './components/Screen';

const Calculator = () => {

  const keypad = [
    [1, 2, 3, "+"],
    [4, 5, 6, "-"],
    [7, 8, 9, "*"],
    [0, "AC", "=", "/"],
  ];

  const [numbers, setNumbers] = useState(0);
  const [sign, setSign] = useState('');
  const [result, setResult] = useState(0);

  const handleReset = () =>{
    setNumbers(0);
    setSign('');
    setResult(0);
  }

  const handleEqual = () => {
    switch (sign) {
      case '+':
        let math = numbers + result;
        console.log(math);
        // return a + b;
        break;
      case '-':
        console.log(numbers - result);
        break;
      case '*':
        console.log(numbers * result);
        break;
      case '/':
        console.log(numbers / result);
        break;
      default:
        break;
    }
  }

  const handleNumber = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;
    if(numbers === 0){
      setNumbers(parseInt(value));
    }
    else{
      setNumbers(parseInt(numbers + value));
    }
  }

  const handleSign = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;
    setSign(value);
    setResult(parseInt(numbers));
    setNumbers(0);
  }

  return (
    <div className='wrapper'>
      <Container >
        <Screen value = {numbers ? numbers : result}/>
        <ButtonBox>
          {
            keypad.flat().map((btnkey, i) => {
            
              return(
                <BtnKeys
                  key = {i}
                  btnkey = {btnkey} 
                  onClick = {
                    btnkey === 'AC' 
                    ? handleReset 
                    : btnkey === '=' 
                    ? handleEqual
                    : btnkey === '+' ||  btnkey === '-' ||  btnkey === '*' ||  btnkey === '/'
                    ? handleSign
                    : handleNumber
                  }
                />
              )
            })
          }
        </ButtonBox>
      </Container>
    </div>
  );
}

export default Calculator;
