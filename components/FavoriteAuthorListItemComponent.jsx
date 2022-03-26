import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ListItemComponent from "./ListItemComponent";

const FavoriteAuthorListItemComponent = (props) => {
  const { favoriteList, handleClick } = props;

  return (
    <div>
      <Container>
        <Row>
          {favoriteList && favoriteList.length > 0 ? (
            favoriteList.map((author) => {
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
          ) : (
            <p>No Data Found</p>
          )}
        </Row>
      </Container>
    </div>
  );
};

export default FavoriteAuthorListItemComponent;
