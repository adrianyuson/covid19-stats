import React, { Component } from 'react';

const TableHeader = () => {
    return (
      <thead>
        <tr>
          <th>Country</th>
          <th>Cases</th>
          <th>Deaths</th>
          <th>Region</th>
          <th>Total Recovered</th>
          <th>New Deaths</th>
          <th>New Cases</th>
          <th>Serious Critial Condition</th>
        </tr>
      </thead>
    )
}

const TableBody = props => {
    const rows = props.countryData.map((row, index) => {
                return (
                    <tr key={index}>
                        <td>{row.country_name}</td>
                        <td>{row.cases}</td>
                        <td>{row.deaths}</td>
                        <td>{row.region}</td>
                        <td>{row.total_recovered}</td>
                        <td>{row.new_deaths}</td>
                        <td>{row.new_cases}</td>
                        <td>{row.serious_critical}</td>
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