import logo from './logo.svg';
import './App.css';
import { UncontrollerdForm } from './components/uncontrolled-form';
import { ControlledForm } from './components/controlled-form';
import { ControlledModal } from './components/controlled-modal';
import { useState } from 'react';
import { UncontrolledFlow } from './components/uncontrolled-flow';

function App() {
  const [shouldDisplay,setShouldDisplay] = useState(false)
  const StepOne = ({goNext}) =>{
    <>
      <h1>Step #1</h1>
      <button onClick={goNext}>NExt</button>
    </>
  }
  const StepTwo = ({goNext}) =>{
    <>
      <h1>Step #2</h1>
      <button onClick={goNext}>NExt</button>
    </>
  }
  const StepThree = ({goNext}) =>{
    <>
      <h1>Step #3</h1>
      <button onClick={goNext}>NExt</button>
    </>
  }
  const StepFour= ({goNext}) =>{
    <>
      <h1>Step #4</h1>
      <button onClick={goNext}>NExt</button>
    </>
  }
  return (
    <div >
 
       {/* <UncontrollerdForm/> */}
      {/* <ControlledModal
      shouldShow={shouldDisplay}
      onClose={() => setShouldDisplay(false)}
      >
        <h3>I am tbe body of the modal!!!</h3>
      </ControlledModal>
      <button onClick={() =>setShouldDisplay(true)}>
        {shouldDisplay ? "Hide modal" : "Display modal"}
      </button> */}
      <UncontrolledFlow>
        <StepOne/>
        <StepTwo/>
        <StepThree/>
        <StepFour/>
      </UncontrolledFlow>
  
    </div>
  );
}

export default App;
