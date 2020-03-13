import React, { Component } from 'react';

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
    const rows = props.countryData.map((row, index) => {
                return (
                    <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{row.country_name}</td>
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

class Table extends Component {
    render() {
        const { countryData } = this.props;
        return (
            <table>
                <TableHeader />
                <TableBody countryData={ countryData }/>
            </table>
        )
    }
}

// const Table = (props) => {
//     const { characterData, removeCharacter } = props;
  
//     const rows = characterData.map((row, index) => {
//                 return (
//                     <p key={index}>
//                         {row.country_name} the {row.cases}
//                         <button onClick={() => removeCharacter(index)}>Delete</button>
//                     </p>
                    
//                   )
//             })
//     return <line>{rows}</line>
//   }

export default Table