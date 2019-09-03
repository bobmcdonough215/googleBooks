import React, { Component } from "react"
import { Link, Redirect } from "react-router-dom";
import Jumbotron from "../../components/Jumbotron";
import Card from "../../components/Card";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import { List } from "../../components/List";
import Form from "../../components/Form";
import Book from "../../components/Book";
import Footer from "../../components/Footer";


class Search extends Component {
  state = {
    title: "",
    toResults: false,
    results: []

  };


  handleInputChange = event => {
    // Destructure the name and value properties off of event.target
    // Update the appropriate state
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  getBooks = () => {
    API.getBooks(this.state.q)
      .then(res => this.setState({books: res.data }))
      .catch(() =>
      this.setState({
        books:[],
        message: "No books found, try again"
      })
      );
  };


  handleFormSubmit = event => {
    event.preventDefault();
    API.getNewBooks(title)
    .then(res => {
      console.log(res.data.items);
      this.setState({
        toResults: true,
        results: res.data.items
      });
    })
  };

  handleSave = id => {
    const book = this.state.books.find(book => book.id === id);
    API.saveBook({
      title: book.volumeInfo.title,
      authors: book.volumeInfo.authors,
      description: book.volumeInfo.description,
      image: book.volumeInfo.imageLinks.thumbnail,
      link: book.volumeInfo.infoLink,
      googleId: book.id
    }).then(() => this.getBooks());
  };

  render() {
    return (
      <div>
        <Jumbotron>
          <h1 className="text-center"><strong>Google Books Search</strong></h1>
          <Link className="btn btn-default btn-lg" to="/" role="button">New Search</Link>
          <Link className="btn btn-default btn-lg" to="/saved" role="button">Saved Books</Link>
        </Jumbotron>
        <Container>
        <form>
            <Input
              value={this.state.title}
              onChange={this.handleInputChange}
              name="title"
              label="Book Title"
              placeholder="The Great Gatsby"
            />
            <FormBtn         
              onClick={this.handleFormSubmit}
              className="btn btn-info"
            >
              Search
            </FormBtn>
          </form>
        </Container>
      </div>
    );
  }
}

    export default Search;
