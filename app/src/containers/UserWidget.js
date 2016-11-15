import React from 'react'
import UserWidgetView from './../components/UserWidgetView'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
  return {
    name: state.user.name,
    age: state.user.age
  }
}

export default connect(mapStateToProps)(UserWidgetView)
