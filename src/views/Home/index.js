import React, { Component, Fragment } from 'react';
import WeatherComponent from '../../components/weather';
import ForecastComponent from '../../components/weather/forecast';
import weatherService, {selectedDayWeather} from '../../services/weather';
import { NavBar } from '../../components/navBar';
import './home.scss';

class Home extends Component {
  state = {
    weatherReport: {}
  };
  async componentDidMount() {
    this.setState({weatherReport: await weatherService()});
  }

  checkWeather = async (Time) => {
    console.log('time', Time);
    const {temperature, icon, time, summary } = await selectedDayWeather(Time);
    this.setState(prevState => ({
      ...prevState,
      weatherReport: {
        ...prevState.weatherReport, currently: {
          ...prevState.weatherReport.currently, temperature, icon, time: time||'', summary
        }
      }
    }))
  };

  renderSection = (className) => {
    const { weatherReport } = this.state;
    return (
      <div className={className}>
        <div className='forecast-sect'>
          <ForecastComponent weatherReport={weatherReport} />
        </div>
        <div className='weather-desc-sect'>
          <WeatherComponent weatherReport={weatherReport} checkWeather={this.checkWeather}/>
        </div>
      </div>
    )
  };
  render(){
    return (
      <Fragment>
        <NavBar/>
        <div className="home">
          {this.renderSection('top-container')}
        </div>
      </Fragment>
    );
  }

}

export default Home;
