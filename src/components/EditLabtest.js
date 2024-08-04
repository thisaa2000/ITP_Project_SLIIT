import React, { Component } from 'react';
import axios from 'axios';

export default class EditLabtest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      SpecimenType:'',
      PlateletCount:'',
      Haemoglobin:'',
      RBC:'',
      WBC:'',
    };
  }
  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      ...this.state,
      [name]: value,
    });
  };
  onSubmit = (e) => {
    e.preventDefault();
    const id = this.props.match.params.id;
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
            WBC:WBC,
    };
    console.log(data);

    axios.put(`http://localhost:8000/labtest/update/${id}`, data).then((res) => {
      if (res.data.success) {
        alert('labtest updated successfully');
        this.setState({
                SpecimenType: '',
                PlateletCount: '',
                Haemoglobin: '',
                RBC: '',
                WBC: '',
        });
      }
    });
  };

  componentDidMount() {
    const id = this.props.match.params.id;

    axios.get(`http://localhost:8000/labtest/${id}`).then((res) => {
      if (res.data.success) {
        this.setState({
          SpecimenType:res.data.labtest.SpecimenType,
          PlateletCount:res.data.labtest.PlateletCount,
          Haemoglobin:res.data.labtest.Haemoglobin,
          RBC:res.data.labtest.RBC,
          WBC:res.data.labtest.WBC
        });
        console.log(this.state.labtest);
      }
    });
  }
  render() {
    return (
      <div className='col-md-8 mt-4 mx-auto'>
        <h1 className='h3 mb-3 font-weight-normal'>Edit Labtest</h1>
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
              type='text'
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
            &nbsp; Update
          </button>
        </form>
      </div>
    );
  }
}
