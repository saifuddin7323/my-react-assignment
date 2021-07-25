import { Container, createStyles, makeStyles, Theme } from "@material-ui/core";
import React, { FC, ReactElement } from "react";
import Footer from "../component/Footer";
import Header from "../component/Header";
import { Posts } from "../component/Posts";
import appStrings from "../strings/appStrings.json";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
    },
    dataTableStyle: {
      flex: 1,
      display: "flex",
      marginTop: 40,
    },
  })
);

interface Props {}

export const HomePage: FC<Props> = (props): ReactElement => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Header title={appStrings.headerText} />
      <main>
        <div className={classes.dataTableStyle}>
          <Container>
            <Posts />
          </Container>
        </div>
      </main>
      <Footer footerText={appStrings.footerText} />
    </div>
  );
};
