import React, { Component } from 'react';
import axios from 'axios';

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      labtest: [],
    };
  }
  componentDidMount() {
    this.retrieveLabtest();
  }
  retrieveLabtest() {
    axios.get('http://localhost:8000/labtest').then((res) => {
      if (res.data.success) {
        this.setState({
          labtest: res.data.existingLabtest,
        });
        console.log(this.state.labtest);
      }
    });
  }
  onDelete = (id) => {
    axios.delete(`http://localhost:8000/labtest/delete/${id}`).then((res) => {
      alert('Deleted successfully');
      this.retrieveLabtest();
    });
  };

  filterData(labtest, searchKey) {
    const result = labtest.filter(
      (labtest) =>
      labtest.SpecimenType.toLowerCase().includes(searchKey) 
       
    );
    this.setState({ labtest: result });
  }
  handleSearchArea = (e) => {
    const searchKey = e.currentTarget.value;
    axios.get('http://localhost:8000/labtest').then((res) => {
      if (res.data.success) {
        this.filterData(res.data.existingLabtest, searchKey);
      }
    });
  };
  render() {
    return (
      <div className='container'>
        <p>All LabTests</p>
        <div className='col-lg-3 mt-2 mb-2'>
          <input
            className='form-control'
            type='search'
            placeholder='Search'
            name='searchQuery'
            onChange={this.handleSearchArea}
          ></input>
        </div>
        <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet"/>
        <table className='table table-condensed table table-hover'>
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Specimen Type</th>
              <th scope="col">PlateletCount</th>
              <th scope="col">Haemoglobin</th>
              <th scope="col">RBC</th>
              <th scope="col">WBC</th>
            </tr>
          </thead>
          <tbody>
            {this.state.labtest.map((labtest, index) => (
              <tr key={index}>
                <th scope='row'>{index + 1}</th>
                <td>
                  <a
                    href={`/labtest/${labtest._id}`}
                    style={{ textDecoration: 'none' }}
                  >
                    {labtest.SpecimenType}
                  </a>
                </td>
                  <td>{labtest.PlateletCount}</td>
                  <td>{labtest.Haemoglobin}</td>
                  <td>{labtest.RBC}</td>
                  <td>{labtest.WBC}</td>
                <td>
                  <a className='btn btn-warning' href={`/edit/${labtest._id}`}>
                    <i className='fas fa-edit'></i>&nbsp;Edit
                  </a>
                  <br></br>
                  &nbsp;
                  <br></br>
                  <a
                    className='btn btn-danger'
                    href='#'
                    onClick={() => this.onDelete(labtest._id)}
                  >
                    <i className='far fa-trash-alt'></i>&nbsp;Delete
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button className='btn btn-success'>
          <a href='/add' style={{ textDecoration: 'none', color: 'white' }}>
          Create New Labtest
          </a>
        </button>
      </div>
    );
  }
}
