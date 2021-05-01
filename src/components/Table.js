import React from 'react'
import TableRow from './Row'
import API from '../utils/API'

class Table extends React.Component {
  state = {
    employees: []
  }

  componentDidMount () {
    this.generateRoster()
  }

  generateRoster = () => {
    API.search()
      .then(res => this.setState({ employees: res.data.results }))
      .catch(err => console.log(err))
  }

  // this.setState({ employees: res.results })

  render () {
    return (
      <table className='table'>
        <thead>
          <tr>
            <th scope='col'>Photo</th>
            <th scope='col'>First Name</th>
            <th scope='col'>Last Name</th>
            <th scope='col'>Email</th>
            <th scope='col'>Phone</th>
          </tr>
        </thead>
        <tbody>
          {this.state.employees.map(person => (
            <TableRow
              img={person.picture.thumbnail}
              name={person.name}
              first={person.name.first}
              last={person.name.last}
              email={person.email}
              phone={person.phone}
            />
          ))}
        </tbody>
      </table>
    )
  }
}

export default Table
