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
  })
);

interface Props {
  title: string;
}

const Header: FC<Props> = ({ title }): ReactElement => {
  const classes = useStyles();
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Typography variant={"h6"} className={classes.titleStyle}>
          {title}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default memo(Header);
