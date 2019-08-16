import React from 'react';
import './App.css';
import DonutChart from './components/donut-chart';



function App() {
  const values = 123;
  const chartData= [];
  const colors= ["#6495ED", "goldenrod", "#cd5c5c", "thistle", "lightgray"];
  const cx= 80;
  const cy= 80;                      
  const radius= 60;
  const sortedValues= [];
  const strokeWidth= 30; 
  const initialValues = [230, 308, 520, 130, 200];   
  return (
    <div className="App">
      <DonutChart initial-values={values}/>
      
    </div>
  );
}

export default App;
