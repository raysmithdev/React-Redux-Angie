import UserWidgetView from '../components/UserWidgetView'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
  return {
    users: state.user.users
  }
}

export default connect(mapStateToProps)(UserWidgetView)
