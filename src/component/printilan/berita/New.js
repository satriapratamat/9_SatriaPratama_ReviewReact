import React from "react";
import classes from "./new.css";
import Card from "./Card";

function New({ author, title, image }) {
  return (
    <li className={classes.list}>
      <Card>
        <div className={classes.contain}>
          <div className={classes.wrapper}>
            <img src={image} alt="new" />
          </div>
          <h3>{title}</h3>
          <p>Author : {author}</p>
        </div>
      </Card>
    </li>
  );
}

export default New;
