import React, { Component } from 'react';
import { Container } from './App.styled';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  hendlerInputChange = event => {
    this.setState({ name: event.currentTarget.value });
  };
  render() {
    return (
      <Container>
        <form>
          <label>
            Name
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              value={this.state.name}
              onChange={this.hendlerInputChange}
            />
          </label>
          <button type="submit">Add contact</button>
        </form>
      </Container>
    );
  }
}
