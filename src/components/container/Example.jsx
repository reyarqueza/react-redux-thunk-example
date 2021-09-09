import React, { Component } from 'react';
import { connect } from 'react-redux';
import List from '../presentational/List.jsx';
import { fetchHello } from '../../actions';
import isEmpty from 'lodash.isempty';

class Example extends Component {
  render () {

    if (this.props.isLoading) {
      return (
        <p>Loading...</p>
      )
    }

    if (!isEmpty(this.props.list)) {
      return (
        <div>
          <h2>The list below is being pulled via the usual http external api.</h2>
          <List list={this.props.list} />
        </div>
      )
    } else {
      return null;
    }

  }

  componentDidMount() {
    this.props.getHello();
  }
}

const mapStateToProps = (state) => {
  return {
    list: state.list,
    isLoading: state.isLoading
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getHello: () => {
      dispatch(fetchHello())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Example);
