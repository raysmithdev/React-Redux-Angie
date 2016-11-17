import { connect } from 'react-redux'
import DataButtonView from '../components/DataButtonView'
import { fetchData } from '../actions'

const mapStateToProps = (state) => {
  console.log(state);
  return {
    loading: state.user.loading
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getUsersFromApi: () =>  {
      return dispatch(fetchData())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DataButtonView)
