import React, { useState, useEffect } from "react";
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import { useDispatch } from "react-redux";
import "./Memoreis.css";
import Posts from "../Posts/Posts";
import Form from "../Form/Form";
import { getPosts } from "../../actions/posts";
import useStyles from "../../styles";
import memories from "../../images/memories.png";
import { Navigate, useNavigate } from "react-router-dom";
import { removeUserSession } from "../../utils/common";

export default function Memories() {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();
  const classes = useStyles();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);
  const handleLogout = () => {
    removeUserSession();

    navigate("/");
  };

  return (
    <div>
      <Container maxWidth="lg">
        <AppBar className={classes.appBar} position="static" color="inherit">
          <Typography className={classes.heading} variant="h2" align="center">
            Memories
          </Typography>
          <img
            className={classes.image}
            src={memories}
            alt="icon"
            height="60"
          />{" "}
          <div>
            <input
              type="button"
              className="logout_btn"
              value="Logout"
              onClick={handleLogout}
            />
          </div>
        </AppBar>

        <Grow in>
          <Container>
            <Grid
              container
              justify="space-between"
              alignItems="stretch"
              spacing={3}
            >
              <Grid item xs={12} sm={7}>
                <Posts setCurrentId={setCurrentId} />
              </Grid>
              <Grid item xs={12} sm={4}>
                <Form currentId={currentId} setCurrentId={setCurrentId} />
              </Grid>
            </Grid>
          </Container>
        </Grow>
      </Container>
    </div>
  );
}
