import { connect } from 'react-redux';
import Component from '../components/NewTaskForm';
import * as actionCreators from '../actions';

const mapStateToProps = ({ taskCreatingState }) => {
  const props = {
    taskCreatingState,
  };
  return props;
};

const Container = connect(
  mapStateToProps,
  actionCreators,
)(Component);

export default Container;
