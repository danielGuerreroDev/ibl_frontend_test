import React, { Fragment, useState } from "react";
import Avatar from "@mui/material/Avatar";
import Container from "@mui/material/Container";
import UserDetails from "./InfoTabs";
import Typography from "@mui/material/Typography";

function Profile({ data, width }) {
  const isMobile = width <= 425;

  const styles = {
    avatar: {
      height: isMobile ? 100 : 200,
      marginBottom: 3,
      marginTop: 3,
      width: isMobile ? 100 : 200,
    },
    container: {
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      justifyContent: "center",
      backgroundImage: "linear-gradient(transparent 50px, #fff 10px)",
    },
  };

  const displayUser = data?.map((user) => {
    const name = `${user.name.title} ${user.name.first}`;
    const location = `${user.location.city}, ${user.location.country}`;
    const bday = new Date(user.dob.date);
    const region = new Intl.DisplayNames(["en"], { type: "region" });

    return (
      <Fragment key={user.id.value}>
        <Avatar
          alt={user.id.name}
          src={user.picture.medium}
          sx={styles.avatar}
        />
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography gutterBottom variant="caption" component="div">
          {location}
        </Typography>
        <UserDetails
          bday={bday}
          email={user.email}
          nat={user.nat}
          phone={user.phone}
          region={region}
        />
      </Fragment>
    );
  });

  return (
    <Container lg={12} sx={styles.container}>
      {displayUser}
    </Container>
  );
}

export default Profile;
