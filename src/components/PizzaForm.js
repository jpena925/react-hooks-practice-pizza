import React, { useState } from "react";

function PizzaForm({ formData, setFormData, handleEditPzza }) {


  function handleChange(e){
    const changeValue= e.target.value
    const changeType= e.target.name
    setFormData((formData) => ({...formData, [changeType]: changeValue}))
  }

  // function handleVegChange(e){
  //   setFormData((formData) => ({...formData, vegetarian: e.target.value === 'Vegetarian'}))
  // }

  function handleFormSubmit(e){
    e.preventDefault()
    
    const formattedData = {
      topping: formData.topping,
      size: formData.size,
      vegetarian: formData.vegetarian === 'Vegetarian' ? true : false
    }

    handleEditPzza(formattedData)
  }

  console.log(formData)
  return (
    <form onSubmit={handleFormSubmit}>
      <div className="form-row">
        <div className="col-5">
          <input
            className="form-control"
            type="text"
            value={formData.topping}
            name="topping"
            placeholder="Pizza Topping"
            onChange={handleChange}
          />
        </div>
        <div className="col">
          <select className="form-control" name="size" value={formData.size} onChange={handleChange}>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="vegetarian"
              value="Vegetarian"
              onChange={handleChange}
              checked={formData.vegetarian === 'Vegetarian'}
            />
            <label className="form-check-label">Vegetarian</label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="vegetarian"
              value="Not Vegetarian"
              onChange={handleChange}
              checked={formData.vegetarian === 'Not Vegetarian'}
            />
            <label className="form-check-label">Not Vegetarian</label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}

export default PizzaForm;
