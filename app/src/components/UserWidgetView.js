import React from 'react'
import { Grid, Row, Col, Thumbnail } from 'react-bootstrap'

const UserWidgetView = ({ users }) => {
  return (
    <Grid>
      {users.map((user, index) =>
        <Row key={index}>
          <Col md={12}>
            <Thumbnail src={user.picture.medium} alt="242x200">
              <h3>{user.name.title} {user.name.first} {user.name.last}</h3>
              <p>{user.email}</p>
            </Thumbnail>
          </Col>
        </Row>
      )}
    </Grid>
  )
}

export default UserWidgetView
