import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import Table from './Table';
import './index.css';

class App extends Component {
    state = {
      countries: [],
      updateTime: '',
    }
  
    componentDidMount() {
      fetch("https://coronavirus-monitor.p.rapidapi.com/coronavirus/cases_by_country.php", {
        "method": "GET",
        "headers": {
          "x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
          "x-rapidapi-key": "0897a6fcd9mshc9309b55be773acp196fd4jsnb89d70783070"
        }
      })
      .then(response => response.json())
      .then(response => {
        // console.log(response.countries_stat[0].country_name); //test
        this.setState({
          countries: response.countries_stat,
          updateTime: response.statistic_taken_at,
        })
      })
      .catch(err => {
        console.log(err);
      });
    }
  
    render() {
      const { countries, updateTime } = this.state
      return (
        <div className="App">
          <header className="App-header">
            <h2>Covid-19 Global Stats</h2>
          </header>
          <div className="container">
            <p>Updated at <strong>{updateTime}</strong></p>
            <Table countryData={ countries }/>
          </div>
        </div>
      );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));