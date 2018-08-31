import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loginUser } from '../../actions/authActions';
import { getSearchedTributes } from '../../actions/searchActions'
import TextFieldGroup from '../common/TextFieldGroup';
import Spinner from '../common/Spinner';
import searchReducer from '../../reducers/searchReducer';
import ProfileItem from '../profiles/ProfileItem';
import { Link } from 'react-router-dom';
import profileReducer from '../../reducers/profileReducer';


class Search extends Component {
  constructor() {
    super();
    this.state = {
      search: '',
      haveSearched: false,
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
    console.log('clicked')
    console.log(this.state.search)
    this.props.getSearchedTributes(this.state.search);
    this.state.haveSearched = true;
    console.log(this.state.haveSearched);
    const search = {
      name: this.state.name
    }

  }

  onChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  render() {
    const { errors } = this.state;

    let searchResults;

    const { searchedTributes } = this.props.searchedTributes;

    console.log(searchedTributes);

    if ((searchedTributes === null || searchedTributes.length < 0) && this.state.haveSearched === true) {
      searchResults = (
        <h6>No results found</h6>
      )
    } else if (searchedTributes !== null && this.state.haveSearched === true) { 
      searchResults = (
        <div>
        <h6>Results:</h6>
        { searchedTributes.map(tribute => (
          <ProfileItem key={profileReducer._id} profile={tribute} />
      ))}
      </div>
      )
    }
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
              { searchResults }
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
  searchedTributes: state.searchedTributes,
  // auth: state.auth,
  // errors: state.errors,
})
export default connect(mapStateToProps, { getSearchedTributes })(Search);