import React from 'react'
import { Button } from 'react-bootstrap'

const DataButtonView = ({ getUsersFromApi }) => {
  return (
    <Button
      bsStyle="primary"
      onClick={ () => getUsersFromApi() }
    >
        Get me some data
    </Button>
  )
}

export default DataButtonView
