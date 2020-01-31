import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import { Button } from 'react-bootstrap';
import toastr from 'toastr';
import 'react-datepicker/dist/react-datepicker.css';
import './customDate.scss'
import 'toastr/toastr.scss'

class CustomDate extends Component {
  state = {
    date: ''
  };
  onChange = date => {
    this.setState({
      date
    })
  };

  submitDate = () => {
    const {date} = this.state;
    const { checkWeather } = this.props;
    if(!date) {
      return toastr.error('You have not selected a date');
    }
    checkWeather(new Date(date).getTime()/1000);
  };
  render() {
    return (
      <div className='date-container'>
        <div className='date-header'>
          Select date to display weather for that day
        </div>
        <DatePicker
          className='date-picker'
          selected={this.state.date}
          onChange={this.onChange}
          popperPlacement="bottom"
          placeholderText='yyyy/mm/dd'
          dateFormat='yyyy/MM/dd'
        />
        <div className='check-button'>
          <Button variant="primary" onClick={this.submitDate}>Check Weather</Button>
        </div>
      </div>
    );
  }
}

export default CustomDate;
