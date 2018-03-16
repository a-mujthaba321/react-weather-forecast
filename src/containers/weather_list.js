import React, {Component} from 'react';
import {connect} from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';


class WeatherList extends Component {

    renderWeather(cityData){
        if(cityData){

            const temps = cityData.list.map(weather => { 
                return weather.main.temp - 273 
            });

            const pressures = cityData.list.map(weather => { 
                return weather.main.pressure
            });

            const humidities = cityData.list.map(weather => { 
                return weather.main.humidity
            });

            const {lon, lat} = cityData.city.coord;

            const population = cityData.city.population;
            
            return (
                    <tr key={cityData.city.name}>
                        <td><GoogleMap lon={lon} lat={lat}/></td>
                        <td>
                            {population}
                        </td>
                        <td>
                            <Chart data={temps} color="red" units=" degree celcius"/>
                        </td>
                        <td>
                            <Chart data={pressures} color="green" units="hPa"/>
                        </td>
                        <td>
                            <Chart data={humidities} color="blue" units="%"/>
                        </td>
                    </tr>
            );
        }
    }

    render() {
        return (
            <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>City</th>
                            <th>Population</th>
                            <th>Temperature (Degree Celcius)</th>
                            <th>Pressure(hPa)</th>
                            <th>Humidity(%)</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.weather.map(this.renderWeather)}
                    </tbody>
            </table>
        );

    }
}

function mapStateToProps({weather}){
    return {
        weather
    };
}

export default connect(mapStateToProps)(WeatherList);