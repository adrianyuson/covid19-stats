import React from 'react';

const TableHeader = () => {
    return (
      <thead>
        <tr>
          <th>Rank</th>
          <th>Country</th>
          <th>Cases</th>
          <th>Deaths</th>
          {/* <th>Region</th> */}
          <th>Recovered</th>
          {/* <th>New Deaths</th> */}
          {/* <th>New Cases</th> */}
          <th>Serious Critial Condition</th>
        </tr>
      </thead>
    )
}

const TableBody = props => {
    props.countryData.sort(function(a, b){
        return parseInt(b.cases.replace(/,/g, '')) - 
               parseInt(a.cases.replace(/,/g, '')); //API data is not sorted
    });
    const rows = props.countryData.map((row, index) => {
        return (
            <tr key={index}>
                <td className="rank">{index + 1}</td>
                { row.country_name === "Canada" 
                    ? <td className="canada">{row.country_name}</td>
                    : <td>{row.country_name}</td>
                }
                {/* <td>{row.country_name}</td> */}
                <td>{row.cases}</td>
                <td className="deaths">{row.deaths}</td>
                {/* <td>{row.region}</td> */}
                <td className="recovered">{row.total_recovered}</td>
                {/* <td classNaime="deaths">{row.new_deaths}</td> */}
                {/* <td>{row.new_cases}</td> */}
                <td className="criticalCondition">{row.serious_critical}</td>
            </tr>
        )
            })
    return <tbody>{rows}</tbody>
}

// class Table extends Component { // class component version
//     render() {
//         const { countryData } = this.props;
//         return (
//             <table>
//                 <TableHeader />
//                 <TableBody countryData={ countryData }/>
//             </table>
//         )
//     }
// }

const Table = (props) => { // functional component version
    const { countryData } = props;
    return (
        <table>
            <TableHeader />
            <TableBody countryData={ countryData }/>
        </table>
    )
}

export default Table