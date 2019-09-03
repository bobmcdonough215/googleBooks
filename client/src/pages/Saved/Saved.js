import React, { Component } from "react";
import { Link } from "react-router-dom";
import Jumbotron from "../../components/Jumbotron";
import Card from "../../components/Card";
import Book from "../../components/Book";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import ClickBtn from "../../components/ClickBtn";



class Saved extends Component {
  state = {
    books: [],
    target: ""
  };

  componentDidMount() {
    this.getSavedBooks();
  }

  getSavedBooks = () => {
    API.getSavedBooks()
      .then(res =>
        this.setState({
          books: res.data,
          target: "_blank"
        })
      )
      .catch(err => console.log(err));
  };

  handleBookDelete = id => {
    API.deleteBook(id).then(res => this.getSavedBooks())
      .catch(err => console.log(err));


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
          <h2>Search Results</h2>
          <List>
            {this.state.books.map(book => (
              <ListItem key={book._id}>
                <div className="date-div">
                  <a
                    key={book._id + "link"}
                    href={book.link}
                    target={this.state.target}
                  >
                    {book.title}
                  </a>
                  <p>{book.volumeInfo.authors[0]}</p>
                  <p>{book.volumeInfo.description}</p>
                  <p>{book.volumeInfo.imageLinks.thumbnail}</p>
                </div>
                <ClickBtn
                  key={book_id + Btn}
                  btntype="info"
                  id={book._id}
                  disabled={book.link === "/"}
                  onClick={() => this.deleteBook(book._id)}

                >
                  Delete Book
                    </ClickBtn>
                    </ListItem>
            ))}
        </List>
        </Container>
      </div>
    );
  }
}
export default Saved;