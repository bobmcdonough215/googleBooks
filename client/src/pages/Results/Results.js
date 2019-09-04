
import React, { Component } from "react";
import { Link } from 'react-router-dom';
import Jumbotron from "../../components/Jumbotron";
import Card from "../../components/Card";
import { List, ListItem } from "../../components/List";
import ClickBtn from "../../components/ClickBtn";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";


class Results extends Component {
  state = {
    books: [],
    target: "",
  };

  componentDidMount() {
    const data = this.props.location.data
    if (data && data.results.length > 0) {

    this.setState({
      books: data.results.filter((value, index) => index < 5),
      target: "_blank"
    });
  }else{
    this.setState({
      noResults:true
    });
  }
}

saveBook = book => {
  API.saveBook(book)
    .then(res => {
      const currentBooks = this.state.books;
      const filterBooks = currentBooks.filter(book => book.id !== res.data.id);
      this.setState({
        books: filterBooks
      });
    })
    .catch(err => console.log(err));
}

  //   title: book.volumeInfo.title,
  //   authors: book.volumeInfo.authors,
  //   description: book.volumeInfo.description,
  //   image: book.volumeInfo.imageLinks.thumbnail,
  //   link: book.volumeInfo.infoLink,
  //   googleId: book.id
  // }).then(() => this.getBooks());


render(){
    if (this.state.noResults) {
      return (
        <div>
          <Jumbotron>
            <h1 className="display-4"> Google Books Search</h1>
            <hr className="my-4" />
            <p className="lead">
              <Link className="btn btn-default btn-lg" to="/" role="button">New Search</Link>
              <Link className="btn btn-default btn-lg" to="/saved" role="button">Saved Books</Link>
            </p>
          </Jumbotron>
          <Container>
            <Link to="/">No results - click here to search again.</Link>
          </Container>
        </div>
      )
    }


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
              <ClickBtn
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
                  </ClickBtn>
            </div>
          </ListItem>
        ))}
      </List>
    </Container>
  </div>
);
              }
            }

export default Results;

