import React, { useState, useEffect } from "react";
import AuthorListItemComponent from "../components/AuthorListItemComponent";
import FavoriteAuthorListItemComponent from "../components/FavoriteAuthorListItemComponent";
import { Tab, Nav, Container, Row, Col } from "react-bootstrap";
import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  let [responseData, setResponseData] = useState([]);
  let [favoriteList, setFavoriteList] = useState([]);
  let [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://api.quotable.io/authors?limit=10&skip=20")
      .then((res) => res.json())
      .then((data) => {
        setIsLoading(false);
        setResponseData(
          data.results.map((result) => ({ ...result, isFavorite: false }))
        );
      });
  }, []);

  const handleClick = (a) => {
    const author = responseData.find((el) => el._id === a._id);
    author.isFavorite = !author.isFavorite;
    const list = responseData.map((el) =>
      author._id === el._id ? author : el
    );
    setResponseData(list);
    const favoriteAuthor = list.filter(function (el) {
      return el.isFavorite === true;
    });
    setFavoriteList(favoriteAuthor);
  };

  useEffect(() => {
    localStorage.setItem("favoriteList", JSON.stringify(favoriteList));
  }, [favoriteList]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Authors List</title>
      </Head>

      <main className={styles.main}>
        <Container>
          <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <Row>
              <Col sm={3}>
                <Nav variant="pills" className="flex-column">
                  <Nav.Item className={styles.nav__item}>
                    <Nav.Link eventKey="first">Author</Nav.Link>
                  </Nav.Item>
                  <Nav.Item className={styles.nav__item}>
                    <Nav.Link eventKey="second">Favorite Author</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
              <Col sm={9}>
                <Tab.Content>
                  <Tab.Pane eventKey="first">
                    <AuthorListItemComponent
                      responseData={responseData}
                      handleClick={handleClick}
                      isLoading={isLoading}
                    />
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">
                    <FavoriteAuthorListItemComponent
                      favoriteList={favoriteList}
                      handleClick={handleClick}
                      isLoading={isLoading}
                    />
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </Container>
      </main>
    </div>
  );
}
