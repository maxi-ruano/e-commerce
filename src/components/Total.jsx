import React from "react";
import accounting from "accounting";
import { Button, makeStyles } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "20vh",
  },
  button: {
    color: "red",
    marginTop: "20px",
  },
}));

const Total = () => {
  const classes = useStyle();

  return (
    <div className={classes.root}>
      <h5>total items: 3</h5>
      <h5>{accounting.formatMoney(50, "€")}</h5>
      <Button className={classes.button} variant="contained">
        Checkout
      </Button>
    </div>
  );
};

export default Total;
