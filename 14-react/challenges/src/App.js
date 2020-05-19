import React from 'react';
import './App.css';
import BasicInfo from './BasicInfo/BasicInfo';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      person : [
        {
          name : 'Mayara Caldeira Smith',
          phone: '704-798-9025',
          dob: '08/10/1998'
        },
        {
          name : 'Carolina Mata',
          phone: '910-476-2645',
          dob: '03/15/1991'
        },
        {
          name : 'Karol Gomes',
          phone: '980-785-5706',
          dob: '11/11/1993'
        }
      ]
    }
  }
  render() {
    return (
    <BasicInfo person={this.state.person} />
    )
  }
}

export default App;