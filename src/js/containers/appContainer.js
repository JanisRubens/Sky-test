import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions';
import MainTemplate from '../templates/MainTemplate';

function mapStateToProps(state) {
  return {
    idle: state.idle,
    products: state.products,
    user: state.user
  }
}

function mapDispachToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

const App = connect(mapStateToProps, mapDispachToProps)(MainTemplate);

export default App;
