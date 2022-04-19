import './App.css';
import BtnKeys from './components/BtnKeys';
import ButtonBox from './components/ButtonBox';
import Container from './components/Container';
import Screen from './components/Screen';

const Calculator = () => {
  return (
    <div className='wrapper'>
      <Container >
        <Screen />
        <ButtonBox>
          <BtnKeys />
        </ButtonBox>
      </Container>
    </div>
  );
}

export default Calculator;
