import React, { Component } from 'react'


class EditFishForm extends Component {

  handleChange = event => {
    const updatedFish = { 
      ...this.props.fish,
      [event.currentTarget.name]: event.currentTarget.value
    };

    this.props.updateFish(this.props.index, updatedFish);
  }

  render() {
    return (
      <div className="fish-edit">
        <input 
          type="text" 
          name="name" 
          onChange={this.handleChange} 
          value={this.props.fish.name} 
        />
        <input 
          type="text" 
          name="price" 
          onChange={this.handleChange} 
          value={this.props.fish.price} 
        />
        <select 
          type="text" 
          name="status" 
          onChange={this.handleChange} 
          value={this.props.fish.status}
        >
          <option value="available">Fresh!</option>
          <option value="unavailable">Sold out!</option>
        </select>
        <textarea 
          name="desk" 
          onChange={this.handleChange} 
          value={this.props.fish.desk}
        >
        </textarea>
        <input 
          type="text" 
          onChange={this.handleChange} 
          value={this.props.fish.text} 
          name="image" 
        />
      </div>
    )
  }
}

export default EditFishForm;