import {
  AppBar,
  createStyles,
  makeStyles,
  Theme,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { FC, memo, ReactElement } from "react";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    titleStyle: {
      color: "white",
    },
    root: {
      position: "fixed",
      bottom: 8,
      flex: 1,
      width: "99%",
    },
  })
);

interface Props {
  footerText: string;
}

const Footer: FC<Props> = ({ footerText }): ReactElement => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant={"body1"} className={classes.titleStyle}>
            {footerText}
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default memo(Footer);
