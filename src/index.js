import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import Table from './Table';
import './index.css';

class App extends Component {
    state = {
      countries: [],
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
        })
      })
      .catch(err => {
        console.log(err);
      });
    }
  
    render() {
      const { countries } = this.state
      return (
        <div className="App">
          <header className="App-header">
            <p>Placeholder</p>
          </header>
          <h1>List</h1>
          <div class="container">
            <Table countryData={ countries }/>
          </div>
        </div>
      );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));