import React, {useState, useEffect} from "react";
import Header from "./Header";
import PizzaForm from "./PizzaForm";
import PizzaList from "./PizzaList";

const URL = 'http://localhost:3001/pizzas'

function App() {
  const [pizzas, setPizzas] = useState([])
  const [formData, setFormData] = useState({})

  useEffect(() => {
    fetch(URL)
    .then(res => res.json())
    .then(data => setPizzas(pizzas => data))
  }, [])

  function onEditPizza(pizza){
    setFormData(formData => ({...pizza, vegetarian: pizza.vegetarian? 'Vegetarian' : 'Not Vegetarian'}))
  
  }

  function handleEditPizzaBoy(pizza){
    let pizzaWID = [...pizzas].filter(elem => elem.topping === pizza.topping)
    let pizzaID = pizzaWID[0].id
    
    fetch(`http://localhost:3001/pizzas/${pizzaID}`, {
       method: 'PATCH',
       headers: {
         'Content-Type': 'application/json'
       },
       body: JSON.stringify(pizza)
    })
    .then(res => res.json())
    .then(data => setPizzas(pizzas => pizzas.map(elem => elem.topping === data.topping ? data : elem)))
  }

  return (
    <>
      <Header />
      <PizzaForm formData={formData} setFormData={setFormData} handleEditPzza={handleEditPizzaBoy}/>
      <PizzaList pizzas={pizzas} handleEditPizza={onEditPizza}/>
    </>
  );
}

export default App;
