import React from "react";
import ListItemComponent from "../components/ListItemComponent";
import { Tab, Nav, Container, Row, Col } from "react-bootstrap";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
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
                    <ListItemComponent />
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">World</Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </Container>
      </main>
    </div>
  );
}
