
import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import Card from "../../components/Card";
import { List, ListItem } from "../../components/List";

import Book from "../../components/Book";
import Footer from "../../components/Footer";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import { List } from "../../components/List";
import Navbar from "../../components/Nav";


class Results extends Component {
  state = {
    books: [],
    target: ""
  };

  componentDidMount() {
    const data = this.props.location.data
    this.setState({
      books: data.results,
      target: "_blank"
    });
  }
}

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


return (
  <div>
    <Jumbotron>
      <h1 className="text-center"><strong>Google Books Search</strong></h1>
      <Link className="btn btn-default btn-lg" to="/" role="button">New Search</Link>
      <Link className="btn btn-default btn-lg" to="/saved" role="button">Saved Books</Link>
    </Jumbotron>
    <Container>
      <h2>Search Results</h2>
      <List>
        {this.state.books.map((book, index) => (
          <ListItem key={book.id}>
            <div className="date-div">
              <a
                key={"" + index + book.id}
                href={book.volumeInfo.infoLink}
                target={this.state.target}
              >
                {book.volumeInfo.title}
              </a>
              {book.volumeInfo.authors[0]}
              {book.volumeInfo.description}
              {book.volumeInfo.imageLinks.thumbnail}
              <SaveBtn
                key={"" + book.id + index}
                btntype="info"
                disabled={book.volumeInfo.infoLink === "/"}
                onClick={() => this.saveBook({
                  title: book.volumeInfo.title,
                  link: book.volumeInfo.infoLink,
                  authors: book.volumeInfo.authors.join(", "),
                  description: book.volumeInfo.description,
                  image: book.volumeInfo.imageLinks.thumbnail,
                  _id: book.id
                })}
              >
                Save Book
                  </SaveBtn>
            </div>
          </ListItem>
        ))}
      </List>
    </Container>
  </div>
);

export default Results;

