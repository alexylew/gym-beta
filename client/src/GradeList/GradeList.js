import React, { Component } from 'react';
import './GradeList.css'
import axios from 'axios'

import { GradeCounter } from '../GradeCounter/GradeCounter'

let VGrades = ['V0', 'V1', 'V2'];

class GradeList extends Component {
  constructor() {
    super();
    this.state = {
      sessionGradeCount: [{ grade: 'V0', count: 5 }],
    }
    console.log('we have initializedgradelist', this.state);
  }

  componentDidMount() {
    // axios.get('state')
    //   .then(response => {
    //     this.setState(response);
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });
  }

  render() {
    const gradeCounters = VGrades.map(grade => {
      const storedGrade = this.state.sessionGradeCount.find(elem => elem.grade === grade);
      const count = storedGrade ? storedGrade.count : 0;
      return <GradeCounter text={grade} count={count}/>;
    })
    console.log('our counters', gradeCounters);
    return (
      <div>
        {gradeCounters}
      </div>
    )
  }
}

export { 
  GradeList,
}