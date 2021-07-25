import { createStyles, makeStyles, Theme } from "@material-ui/core";
import { DataGrid, GridColDef } from "@material-ui/data-grid";
import { FC, ReactElement, useEffect, useState } from "react";
import { getPosts } from "../networking/getPosts";
import { Post } from "../types/Posts";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flex: 1,
      display: "flex",
      height: 400,
      justifyContent: "center",
    },
  })
);

interface Props {}

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", flex: 0.2 },
  {
    field: "title",
    headerName: "Post Name",
    flex: 0.7,
  },
  {
    field: "body",
    headerName: "Post Details",
    flex: 1.3,
  },
];

export const Posts: FC<Props> = (props): ReactElement => {
  const styles = useStyles();
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    getPostDetails();
  }, []);

  const getPostDetails = async () => {
    try {
      const responsePost = await getPosts();
      setPosts(responsePost?.data);
    } catch (e) {}
  };

  return (
    <div className={styles.root}>
      <DataGrid
        columns={columns}
        loading={posts?.length === 0}
        rows={posts}
        pageSize={5}
        disableSelectionOnClick
      />
    </div>
  );
};
