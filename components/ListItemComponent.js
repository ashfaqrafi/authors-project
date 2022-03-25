import React, { useState, useEffect } from "react";
import { Card, Container, Row, Col, Button } from "react-bootstrap";
import styles from "../styles/Home.module.css";

function ListItemComponent() {
  let [responseData, setResponseData] = useState([]);

  useEffect(() => {
    fetch("https://api.quotable.io/authors?limit=10&skip=20")
      .then((res) => res.json())
      .then((data) => {
        console.log("data", data);
        setResponseData(
          data.results.map((result) => ({ ...result, isFavorite: false }))
        );
      });
  }, []);

  const handleClick = (a) => {
    const author = responseData.find((el) => el._id === a._id);
    console.log("author", author);
    author.isFavorite = !author.isFavorite;
    const list = responseData.map((el) =>
      author._id === el._id ? author : el
    );
    console.log("list", list);
    setResponseData(list);
  };

  console.log("responseData", responseData);

  return (
    <div>
      <Container>
        <Row>
          {responseData && responseData.length > 0 ? (
            responseData.map((author) => {
              return (
                <Col xl={6} lg={6} md={12} sm={12} xs={12} key={author.link}>
                  <Card className={styles.author__list}>
                    <Card.Body className={styles.author__card}>
                      <p>
                        <b>Name:</b> {author.name}
                      </p>
                      <p>
                        <b>Bio:</b> {author.bio}
                      </p>
                      <a href={author.link}>Link</a>
                      {author.isFavorite ? (
                        <Button
                          variant="danger"
                          onClick={() => handleClick(author)}
                          className={styles.author__button}
                        >
                          Remove Favorite
                        </Button>
                      ) : (
                        <Button
                          variant="success"
                          onClick={() => handleClick(author)}
                          className={styles.author__button}
                        >
                          Add Favorite
                        </Button>
                      )}
                    </Card.Body>
                  </Card>
                </Col>
              );
            })
          ) : (
            <p>No Data Found</p>
          )}
        </Row>
      </Container>
    </div>
  );
}

export default ListItemComponent;
