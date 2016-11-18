import { connect } from 'react-redux'
import LoaderView from '../components/LoaderView'

const mapStateToProps = (state) => {
  return {
    isLoading: state.user.loading
  }
}

export default connect(mapStateToProps)(LoaderView)
