import React from 'react'

const UserWidgetView = ({ name, age }) => {
  return (
    <div>
      <h1>Hello { name }</h1>
      <p>your age is { age }</p>
    </div>
  )
}

export default UserWidgetView
