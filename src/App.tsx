import React from 'react';
import './App.css';
import NextForm from './components/Forms/NextForm';
import { StepStatus } from './components/Step/Step';

const steps = [
  { id: '1', title: 'Stage #1', status: StepStatus.Inactive },
  { id: '2', title: 'Stage #2', status: StepStatus.Inactive },
  { id: '3', title: 'Stage #3', status: StepStatus.Inactive },
  { id: '4', title: 'Stage #4', status: StepStatus.Inactive },
];

function App() {
  return (
    <main className="App">
      <NextForm steps={steps} />
    </main>
  );
}

export default App;
