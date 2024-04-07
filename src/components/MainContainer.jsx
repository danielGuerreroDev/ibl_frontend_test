import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

const styles = {
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  grid: {
    background: "#254DEF"
  }
};

function BaseContainer({ component }) {
  return (
    <Grid sx={styles.grid}>
      <Container sx={styles.container}>{component}</Container>
    </Grid>
  );
}

export default BaseContainer;
