import React, { Component } from 'react';
import axios from 'axios';

export default class CreateLabtest extends Component {
  constructor(props) {
    super(props);
    this.state = {
        SpecimenType:"",
        PlateletCount:"",
        Haemoglobin:"",
        RBC:"",
        WBC:""
    };
  }
  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      ...this.state,
      [name]: value,
    });
  };
  //validate function is the newly added function for validation of SpecimenType
//   validate = () => {
  validate = () => {
    let isError = false;

    if (this.state.SpecimenType.length < 5) {
      isError = true;
    }
    this.setState({
      ...this.state,
    });
    return isError;
  };

  onSubmit = (e) => {
    e.preventDefault();
    //declaring error variable as err
    const err = this.validate();

    const {
      SpecimenType,
      PlateletCount,
      Haemoglobin,
      RBC,
      WBC,
    } = this.state;

    const data = {
      SpecimenType:SpecimenType,
      PlateletCount:PlateletCount,
      Haemoglobin:Haemoglobin,
      RBC:RBC,
      WBC:WBC
    };

    console.log(data);

    //assuming the speciman type name cannot be less than 5 characters
    if (!err) {
      axios.post('http://localhost:8000/labtest/save', data).then((res) => {
        if (res.data.success) {
          this.setState({
            SpecimenType:"",
            PlateletCount:"",
            Haemoglobin:"",
            RBC:"",
            WBC:"",
          });
        }
      });
    } else {
      alert('SpecimenType should be atleast 5 characters');//if the specimen is having a name which is having less than 5 characters they are not saving as a valid speciman type and displaying an error message
    }
  };
  render() {
    return (
      <div className='col-md-8 mt-4 mx-auto'>
        <h1 className='h3 mb-3 font-weight-normal'>Create new Labtest</h1>
        <form className='needs-validation' noValidate>
          <div className='form-group' style={{ marginBottom: '15px' }}>
            <label style={{ marginBottom: '5px' }}>SpecimenType</label>
            <input
              type='text'
              className='form-control'
              name='SpecimenType'
              placeholder='Enter SpecimenType'
              value={this.state.SpecimenType}
              onChange={this.handleInputChange}
            />
          </div>

          <div className='form-group' style={{ marginBottom: '15px' }}>
            <label style={{ marginBottom: '5px' }}>PlateletCount</label>
            <input
              type='number'
              className='form-control'
              name='PlateletCount'
              placeholder='Enter PlateletCount'
              value={this.state.PlateletCount}
              onChange={this.handleInputChange}
            />
          </div>
          <div className='form-group' style={{ marginBottom: '15px' }}>
            <label style={{ marginBottom: '5px' }}>Haemoglobin</label>
            <input
              type='number'
              className='form-control'
              name='Haemoglobin'
              placeholder='Enter Haemoglobin'
              value={this.state.Haemoglobin}
              onChange={this.handleInputChange}
            />
          </div>
          <div className='form-group' style={{ marginBottom: '15px' }}>
            <label style={{ marginBottom: '5px' }}>RBC</label>
            <input
              type='number'
              className='form-control'
              name='RBC'
              placeholder='Enter RBC'
              value={this.state.RBC}
              onChange={this.handleInputChange}
            />
          </div>
          <div className='form-group' style={{ marginBottom: '15px' }}>
            <label style={{ marginBottom: '5px' }}>WBC</label>
            <input
              type='number'
              className='form-control'
              name='WBC'
              placeholder='Enter WBC'
              value={this.state.WBC}
              onChange={this.handleInputChange}
            />
          </div>
          
          <button
            className='btn btn-success'
            type='submit'
            style={{ marginTop: '15px' }}
            onClick={this.onSubmit}
          >
            <i className='far fa-check-square'></i>
            &nbsp; Save
          </button>
        </form>
      </div>
    );
  }
}
