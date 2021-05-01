import React from 'react'

function Filter(props) {
  return (
    <form className='d-flex'>
      <input
        className='form-control me-2'
        type='search'
        placeholder='Search'
        aria-label='Search'
        onChange={props.event}
      />
      <button className='btn btn-outline-success' type='submit'>
        Search
      </button>
    </form>
  )
}

export default Filter;