import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

// import { Container } from './styles';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as FavoriteActions from '../../store/actons/favorite';

class Main extends Component {
  static propTypes = {
    addFavorite: PropTypes.func.isRequired,
    favorites: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        description: PropTypes.string,
        url: PropTypes.string,
      }),
    ).isRequired,
  };

  state = {
    repositoryInput: '',
  };

  onChange = (e) => {
    this.setState({ repositoryInput: e.target.value });
  };

  handleAddRepository = (event) => {
    event.preventDefault();
    const { addFavorite } = this.props;
    addFavorite();
  };

  render() {
    const { favorites } = this.props;
    const { repositoryInput } = this.state;
    return (
      <Fragment>
        <form onSubmit={this.handleAddRepository}>
          <input placeholder="user/repo" value={repositoryInput} onChange={this.onChange} />
          <button type="submit">Add</button>
        </form>

        <ul>
          {favorites.map(favorite => (
            <li key={favorite.id}>
              <p>
                <strong>{favorite.name} </strong>({favorite.description})
              </p>
              <a href={favorite.url}>Page</a>
            </li>
          ))}
        </ul>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  favorites: state.favorites,
});

const mapDispatchToProps = dispatch => bindActionCreators(FavoriteActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Main);
