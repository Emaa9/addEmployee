import './App.css';
import { useState } from "react";
import axios from 'axios';

function App() {

  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [country, setCountry] = useState("");
  const [position, setPosition] = useState("");
  const [wage, setWage] = useState(0);
  const [employeeList, setEmplyeeList]= useState([]);

 const addEmployee = () => {
  axios.post("http://localhost:3001/create", {
  name: name, 
  age: age, 
  country: country, 
  position: position, 
  wage: wage,
}).then(() =>{
  setEmplyeeList([
    ...employeeList,
    {
    name: name, 
    age: age, 
    country: country, 
    position: position, 
    wage: wage,
  },
])
});
 };

 const getEmployees = ()=> {
  axios.get("http://localhost:3001/employees").then((response)=>{
    setEmplyeeList(response.data)
  });
 };

  return (
    <div className="App">
      <div className="information">
      <label>Name </label>
      <input type="text" 
      onChange={(e)=> {
        setName(e.target.value);
        } } 
        />
      <label>Age </label>
      <input type="number" 
      onChange= {(e)=> {
        setAge(e.target.value);
            }}
            />
      <label>Country </label>
      <input type="text" 
      onChange= {(e)=> {
        setCountry(e.target.value);
            }}
      />
      <label>Position </label>
      <input type="text"
      onChange= {(e)=> {
        setPosition(e.target.value);
            }}
      />
      <label>Wage </label>
      <input type="number"
      onChange= {(e)=> {
        setWage(e.target.value);
            }}
      />
      <button onClick= {addEmployee}>Add employee</button>
      <button onClick={getEmployees}>Show</button>
      {employeeList.map((val, key)=> {
           return <div>{val.name}</div>
      })}
      </div>
    </div>
  );
}

export default App;
