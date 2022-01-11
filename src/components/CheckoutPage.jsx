import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@material-ui/core/Paper";
import Grid from "@mui/material/Grid";
import Product from "./Product";
import products from "../product-data";
import { Typography } from "@mui/material";
import CheckoutCard from "./CheckoutCard";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
const CheckoutPage = () => {
  function FormRow() {
    return (
      <React.Fragment>
        <Grid container spacing={3}>
          {products.map((item) => (
            <Grid item xs={12} sm={8} md={6} lg={4}>
              <CheckoutCard key={item.id} product={item} />
            </Grid>
          ))}
        </Grid>
      </React.Fragment>
    );
  }
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Typography align="center" gutterBottom variant="h4">
          shopping Card
        </Typography>
      </Grid>
      <Grid item xs={12} sm={8} md={9} container spacing={2}>
        <FormRow />
      </Grid>
      <Grid item xs={12} sm={4} md={3}>
        <Typography align="center" gutterBottom variant="h4">
          total
        </Typography>
      </Grid>
    </Grid>
  );
};

export default CheckoutPage;
