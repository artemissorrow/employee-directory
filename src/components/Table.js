import React from 'react'
import TableRow from './Row'
import Filter from './Filter'
import API from '../utils/API'

class Table extends React.Component {
  state = {
    employees: [],
    search: null
    // sort: []
  }

  componentDidMount () {
    this.generateRoster()
  }

  generateRoster = () => {
    API.search()
      .then(res => this.setState({ employees: res.data.results }))
      .catch(err => console.log(err))
  }

  searchSpace = event => {
    let keyword = event.target.value
    this.setState({ search: keyword })
  }

  sortFirst = () => {
    this.setState(
      this.state.employees.sort((a, b) => {
        let nameA = a.name.first.toLowerCase()
        let nameB = b.name.first.toLowerCase()

        if (nameA < nameB) {
          return -1
        }
        if (nameA > nameB) {
          return 1
        }

        return 0
      })
    )
  }

  sortLast = () => {
    this.setState(
      this.state.employees.sort((a, b) => {
        let nameA = a.name.last.toLowerCase()
        let nameB = b.name.last.toLowerCase()

        if (nameA < nameB) {
          return -1
        }
        if (nameA > nameB) {
          return 1
        }

        return 0
      })
    )
  }

  render () {
    return (
      <div className='container bg-dark p-2'>
        <Filter event={e => this.searchSpace(e)} />
        <table className='table table-dark table-striped'>
          <thead>
            <tr>
              <th scope='col'>Photo</th>
              <th scope='col'>
                First Name{' '}
                <button onClick={this.sortFirst} className='btn btn-secondary btn-sm'>
                  <i className='fas fa-sort'></i>
                </button>
              </th>
              <th scope='col'>
                Last Name{' '}
                <button onClick={this.sortLast} className='btn btn-secondary btn-sm'>
                  <i className='fas fa-sort'></i>
                </button>
              </th>
              <th scope='col'>Email</th>
              <th scope='col'>Phone</th>
            </tr>
          </thead>
          <tbody>
            {this.state.employees
              .filter(person => {
                if (this.state.search == null) return person
                else if (
                  person.name.first
                    .toLowerCase()
                    .includes(this.state.search.toLowerCase()) ||
                  person.name.last
                    .toLowerCase()
                    .includes(this.state.search.toLowerCase())
                ) {
                  return person
                }
              })
              .map(person => (
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
      </div>
    )
  }
}

export default Table
