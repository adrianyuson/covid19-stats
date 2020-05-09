import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import WorldStats from './components/WorldStats';
import Table from './components/Table';
import './index.css';
const API_BASE = "https://coronavirus-monitor.p.rapidapi.com/coronavirus";
const details = {
        "headers": {
            "x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
            "x-rapidapi-key": "0897a6fcd9mshc9309b55be773acp196fd4jsnb89d70783070"
    }
}
const p1 = fetch(`${API_BASE}/worldstat.php`, details);
const p2 = fetch(`${API_BASE}/cases_by_country.php`, details);

class App extends Component {
    state = {
        totalStats: [],
        totalCases: 0,
        newCases: 0,
        totalDeaths: 0,
        newDeaths: 0,
        totalRecovered: 0,
        countries: [],
        updateTime: '',
    }
  
    componentDidMount() {
        Promise.all([
            p1, p2
        ])
        .then(responses => {
            responses[0].json().then(data => { //world stats
                this.setState({
                    totalStats: data
                })
            })
            .catch(err => {
                console.log(err);
            });
            responses[1].json().then(data => { //cases by country
                this.setState({
                    countries: data.countries_stat,
                    updateTime: data.statistic_taken_at,
                })
            })
            .catch(err => {
                console.log(err);
            });
        })
    }
  
    render() {
        const { totalStats, countries, updateTime } = this.state;
        console.log(totalStats);
        // console.log(countries);
        return (
            <div className="App">
            <header className="App-header">
                <h2>Covid-19 Global Stats</h2>
            </header>
            <div className="container">
                <p>Updated on <strong>{updateTime} (UTC)</strong></p>
                <WorldStats totalStats = { totalStats }/>
                <Table countryData = { countries }/>
            </div>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));