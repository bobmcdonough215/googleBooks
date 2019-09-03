
import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import Card from "../components/Card";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { List } from "../components/List";
import SearchForm from "../components/SearchForm";
import Book from "../components/Book";
import Footer from "../components/Footer";

class Search extends Component {
  state = {
    books: [],
    q: "",

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
    this.getBooks();
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
        <Container>
          <Row>
            <Col size="md-12">
              <Jumbotron>
                <h1 className="text-center"><strong>Google Books Search</strong></h1>
              </Jumbotron>
            </Col>
            <Col size="md-12">
              <Card title="Book Search" icon="<fas fa-book-reader">
              <SearchForm
                  handleInputChange={this.handleInputChange}
                  handleFormSubmit={this.handleFormSubmit}
                  q={this.state.q}
                />
              </Card>
            </Col>
          </Row>
          <Row>
            <Col size="md-12">
              <Card title="Results">
                {!this.state.books.length ? (
                  <List>
                    {this.state.books.map(book => (
                      <Book
                        key={book.id}
                        title={book.volumeInfo.title}
                        link={book.volumeInfo.infoLink}
                        authors={book.volumeInfo.authiors.join(", ")}
                        description={book.volumeInfo.description}
                        image={book.volumeInfo.imageLinks.thumbnail}
                        Button={() => (
                          <button
                            onClick={() => this.handleSave(book.id)}
                            className="btn btn-success ml-2"
                          >
                            Save Book
                          </button>
                        )}
                      />
                    ))}
                </List>
              ) : (
                <h2 className="text-center">{this.state.message}</h2>
              )}
            </Card>
            </Col>
          </Row>
          <Footer />
        </Container>       
         );
      }
    }
    export default Search;
