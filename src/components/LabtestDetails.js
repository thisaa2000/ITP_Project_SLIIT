import React, { Component } from 'react';
import axios from 'axios';

export default class LabtestDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      labtest: {},
    };
  }
  componentDidMount() {
    const id = this.props.match.params.id;

    axios.get(`http://localhost:8000/labtest/${id}`).then((res) => {
      if (res.data.success) {
        this.setState({
          labtest: res.data.labtest,
        });
        console.log(this.state.labtest);
      }
    });
  }
  render() {
    const{SpecimenType,PlateletCount,Haemoglobin,RBC,WBC} =this.state.labtest;
   
    return (
      <div style={{ marginTop: '20px' }}>
        <h4>{SpecimenType}</h4>
        <hr />
        <d1 className='row'>
          <dt className='col-sm-4'>PlateletCount</dt>
          <dd className='col-sm-10'>{PlateletCount}</dd>

          <dt className='col-sm-4'>Haemoglobin</dt>
          <dd className='col-sm-10'>{Haemoglobin}</dd>

          <dt className='col-sm-4'>RBC</dt>
          <dd className='col-sm-10'>{RBC}</dd>

          <dt className='col-sm-4'>WBC</dt>
          <dd className='col-sm-10'>{WBC}</dd>

           
        </d1>
      </div>
    );
  }
}
