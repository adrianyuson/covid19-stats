import React from 'react';

const WorldStats = (props) => {
    const { totalStats } = props;
    let mortality;
    if(totalStats.total_cases && totalStats.total_deaths) {
        mortality = (parseFloat(totalStats.total_deaths.replace(/,/g, '')) /
                    parseFloat(totalStats.total_cases.replace(/,/g, '')) *
                    100).toPrecision(3) + '%';
    }
    return (
        // <h2> { totalStats.total_cases }</h2>
        <table>
            <thead>
                <tr>
                    <th>Total Cases</th>
                    <th>Total Deaths</th>
                    <th>Total Recovered</th>
                    <th>Mortality Rate</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th>{ totalStats.total_cases }</th>
                    <th className="deaths">{ totalStats.total_deaths }</th>
                    <th className="recovered">{ totalStats.total_recovered }</th>
                    <th className="mortality">{ mortality } </th>
                </tr>
            </tbody>
        </table>
    )
}

export default WorldStats