import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loginUser } from '../../actions/authActions';
import { getSearchedTributes } from '../../actions/searchActions'
import TextFieldGroup from '../common/TextFieldGroup';


class Search extends Component {
  constructor() {
    super();
    this.state = {
      search: '',
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

  }

  // componentDidMount() {
  //   if(this.props.auth.isAuthenticated) {
  //     this.props.history.push('/dashboard');
  //   }
  // }

  // componentWillReceiveProps(nextProps) {
  //   if(nextProps.auth.isAuthenticated) {
  //     this.props.history.push('/dashboard');
  //   }

  //   if(nextProps.errors) {
  //     this.setState({errors: nextProps.errors});
  //   }
  // }

  onSubmit(e) {
    e.preventDefault();

    const search = {
      name: this.state.name
    }

    this.props.loginUser(search);
  }

  onChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  render() {
    const { errors } = this.state;

    return (
      <div className="login">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Search Tributes</h1>
              <p className="lead text-center"></p>
              <form onSubmit={this.onSubmit}>
                <TextFieldGroup
                  placeholder="Search by name"
                  name="search"
                  type="text"
                  value={this.state.search}
                  onChange={this.onChange}
                  error={errors.search}
                />
                <input type="submit" className="btn btn-info btn-block mt-4" />
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

Search.propTypes = {
  getSearchedTributes: PropTypes.func.isRequired,
  searchResults: PropTypes.object.isRequired
  // loginUser: PropTypes.func.isRequired,
  // auth: PropTypes.object.isRequired,
  // errors: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  searchResults: state.searchResults
  // auth: state.auth,
  // errors: state.errors,
})
export default connect(mapStateToProps, { getSearchedTributes })(Search);