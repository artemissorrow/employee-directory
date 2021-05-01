import React from 'react'

function Filter(props) {
  return (
    <form className='d-flex'>
      <input
        className='form-control me-2'
        type='search'
        placeholder='Filter by First or Last Name'
        aria-label='Filter'
        onChange={props.event}
      />
      <button className='btn btn-secondary' type='submit'>
        Filter
      </button>
    </form>
  )
}

export default Filter;