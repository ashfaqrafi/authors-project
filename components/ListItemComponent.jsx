import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Card, Button } from "react-bootstrap";
import styles from "../styles/Home.module.css";

const buttonType = (variant) => {
  switch (variant) {
    case "success":
      return "btn-success";
    case "danger":
      return "btn-danger";
    default:
      return null;
  }
};

const ListItemComponent = (props) => {
  const { name, bio, link, buttonName, variant, onButtonClick } = props;
  return (
    <div>
      <Card className={styles.author__list}>
        <Card.Body className={styles.author__card}>
          <p>
            <b>Name: </b>
            {name}
          </p>
          <p>
            <b>Bio: </b>
            {bio}
          </p>
          <a href={link}>Link</a>
          <Button
            className={classNames(styles.author__button, buttonType(variant))}
            onClick={onButtonClick}
          >
            {buttonName}
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

ListItemComponent.defaultProps = {
  name: null,
  bio: null,
  link: null,
  buttonName: null,
  variant: "success",
  onButtonClick: () => {},
};

Button.propTypes = {
  name: PropTypes.string,
  bio: PropTypes.string,
  link: PropTypes.string,
  buttonName: PropTypes.string,
  variant: PropTypes.string.isRequired,
  onButtonClick: PropTypes.func,
};

export default ListItemComponent;
