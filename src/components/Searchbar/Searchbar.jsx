import Container from 'components/Container/Container';
import { Component } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import css from './Searchbar.module.css';

class Searchbar extends Component {
  state = {
    query: '',
  };

  handleChange = e => {
    this.setState({ query: e.currentTarget.value.toLowerCase().trim() });
  };

  handleSubmit = e => {
    e.preventDefault();

    if (!this.state.query) {
      toast.error('Please, enter your name image!', {
        autoClose: 3000,
        theme: 'dark',
      });
      return;
    }
    this.props.onSubmit(this.state.query);
    this.setState({ query: '' });
  };

  render() {
    return (
      <Container>
        <header className={css.searchbar}>
          <form onSubmit={this.handleSubmit} className={css.form}>
            <input
              className={css.input}
              type="text"
              autoсomplete="off"
              autoFocus
              placeholder="Search images and photos"
              onChange={this.handleChange}
              value={this.state.query}
            />
            <button type="submit" className={css.button}>
              <span className="button-label">Search</span>
            </button>
          </form>
        </header>
      </Container>
    );
  }
}

export default Searchbar;

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
