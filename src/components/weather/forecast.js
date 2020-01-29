import React, { Component } from 'react';
import Skycons from 'react-skycons';
import Loader from 'react-loader-spinner';
import {Button} from 'react-bootstrap';
import _ from 'lodash';
import './forecast.scss';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

class Forecast extends Component{

  renderDiv = (className, component) => (
    <div className={className}>{component}</div>
  );
  weekForecast = () => {
    window.location.reload();
  };

  renderHeader = () => (
    <div className='header-cont'>
      {this.renderDiv('week-header',
        <Button variant="primary" size='sm' onClick={this.weekForecast}>Week</Button>)}
      {this.renderDiv('icon-header')}
      {this.renderDiv('desc-header')}
    </div>
  );

  renderCloudIcon = (cloudIcon) => {
    if(cloudIcon.includes('-')) {
      const IconName = cloudIcon.replace(/-/g, '_');
      return _.upperCase(IconName).replace(/\s/g, '_');
    }
    return _.upperCase(cloudIcon)
  };

  renderWeekForecast = () => {
    const { weatherReport }  = this.props;
    const weekDays = ["Sunday", "Monday",
      "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    if(Object.entries(weatherReport).length !== 0 && weatherReport.constructor === Object) {
      const { daily: { data }} = weatherReport;
      return data.map((day, index) => {
        return (
          <div className='day-cont' key={index}>
            <div className='days'>{weekDays[new Date(day.time * 1000).getDay()]}</div>
            <div className='weather-icon'>
              <Skycons
                color='#00BFFF'
                icon={this.renderCloudIcon(day.icon)}
              />
            </div>
            <div className='weather-summary'>{day.summary}</div>
          </div>
        )
      });
    }
    return <Loader className='forecast-loader' type="Puff" color="#00BFFF" height={100} width={100}/>
  };
  render() {
    return (
      <div className='forecast-cont'>
        {this.renderHeader()}
        {this.renderWeekForecast()}
      </div>
    );
  }
}

export default Forecast
