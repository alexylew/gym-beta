import React, { Component } from 'react';
import './GradeList.css'
import axios from 'axios'

let VGrades = ['V0', 'V1', 'V2'];

class GradeList extends Component {
  constructor() {
    super();
    this.state = {
      sessionGradeCount: [],
    }
  }

  componentDidMount() {
    axios.get('state')
      .then(response => {
        this.setState(response);
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    const gradeCounters = _.map(VGrades, grade => <div>${grade}</div>)
    return (
      <div>
        ${gradeCounters}
      </div>
    )
  }
}