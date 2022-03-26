import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Oval } from "react-loader-spinner";
import styles from "../styles/Home.module.css";
import ListItemComponent from "./ListItemComponent";

const AuthorListItemComponent = (props) => {
  const { responseData, handleClick, isLoading } = props;

  return (
    <div>
      <Container>
        <Row>
          {responseData && responseData.length > 0 ? (
            responseData.map((author) => {
              return (
                <Col xl={6} lg={6} md={12} sm={12} xs={12} key={author.link}>
                  <ListItemComponent
                    name={author.name}
                    bio={author.bio}
                    link={author.link}
                    variant={author.isFavorite ? "danger" : "success"}
                    buttonName={
                      author.isFavorite ? "Remove Favorite" : "Add Favorite"
                    }
                    onButtonClick={() => handleClick(author)}
                  />
                </Col>
              );
            })
          ) : isLoading ? (
            <div className={styles.loader}>
              <Oval
                ariaLabel="loading-indicator"
                height={100}
                width={100}
                strokeWidth={3}
                color="blue"
                secondaryColor="grey"
              />
            </div>
          ) : (
            <p>No Data Found</p>
          )}
        </Row>
      </Container>
    </div>
  );
};

export default AuthorListItemComponent;
