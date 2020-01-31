import React, { Component } from 'react';
import Skycons from 'react-skycons';
import _ from 'lodash';
import PropTypes from 'prop-types';
import Loader from 'react-loader-spinner';
import CustomDate from '../customDate';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWind, faThermometerFull } from '@fortawesome/free-solid-svg-icons'
import {timeStampDate} from '../../helpers';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import './weather.scss';

class Weather extends Component {

  state = {
    isIconVisible: true
  };

  renderWeatherDetails = (contClassName,label, icon, iconClassName, data) => {
    return (
      <div className={contClassName}>
        <div className='label'>{label}</div>
        <FontAwesomeIcon className={iconClassName} color='#00BFFF' icon={icon} />
        <div>{data}</div>
      </div>
    )
  };

  renderCloudIcon = (cloudIcon) => {
    if(cloudIcon.icon === undefined){
      return 'CLEAR_DAY'
    }else {

      if(cloudIcon.icon.includes('-')) {
        const IconName = cloudIcon.icon.replace(/-/g, '_');
        return _.upperCase(IconName).replace(/\s/g, '_');
      }
      return _.upperCase(cloudIcon.icon)
    }

  };
  renderDaySection = () => {
    const { weatherReport: { timezone, currently, currently : {time} } } = this.props;
    return (
      <div className="day-section">
        <div className='day'>{timeStampDate(time)}</div>
        <div className='weather-icon'>
          <Skycons color='#00BFFF' icon={currently !== undefined ? this.renderCloudIcon(currently): ''} autoplay={true}/>
        </div>
        <div className='timezone'>{timezone}</div>
      </div>
    )
  };

  calculateCelsius = (fahrenheit) => {
    return Math.round((fahrenheit-32)*5/9).toFixed(2)
  };

  renderTempSection = () => {
    const { weatherReport: { currently, currently: {summary, apparentTemperature, windSpeed} }} = this.props;
    if(currently !== undefined) {
      return (
        <div className="temp-section">
          <div className='temp'>{this.calculateCelsius(currently.temperature)}</div>
          <span className='celsius'>&#8451;</span>
          <div className='weather-summary'>{summary}</div>
          <div className='extra-details'>
            {this.renderWeatherDetails('wind-speed-cont','Wind speed',
              faWind, 'wind-speed', windSpeed)}
            {this.renderWeatherDetails('temp-cont','Max-temp',
              faThermometerFull, 'therm', this.calculateCelsius(apparentTemperature))}
          </div>
        </div>
      )
    }
  };
  render() {
    const { weatherReport, checkWeather } = this.props;
    if(Object.entries(weatherReport).length !== 0 && weatherReport.constructor === Object) {
      return (
        <div className="weather-cont">
          {this.renderDaySection()}
          {this.renderTempSection()}
          <div className="extra-desc" />
          <div className='check-weather'>
            <CustomDate checkWeather={checkWeather} />
          </div>
        </div>
      );
    }
    return <Loader className='loader' type="BallTriangle" color="#00BFFF" height={100} width={100}/>

  }
}

Weather.propTypes = {
  weatherReport: PropTypes.object,
};

export default Weather;
