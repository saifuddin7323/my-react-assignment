import { AxiosPromise } from "axios";
import { Post } from "../types/Posts";
import { client } from "./Client";

export const getPosts = (): AxiosPromise<Post[]> => {
  return client({
    method: "GET",
    url: "posts",
  });
};
