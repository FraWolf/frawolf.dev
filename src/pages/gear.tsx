import { Heading } from "@chakra-ui/layout";
import CommentsContainer from "../components/Comment/CommentsContainer";

import comments_data from "../components/Comment/example.json";
import ExampleComment from "../components/Comment/ExampleComment";

export default function Gear() {
  return (
    <>
      <Heading size={"lg"}>What I use for coding</Heading>
      <CommentsContainer comment_datas={comments_data} />
      {/* <ExampleComment /> */}
    </>
  );
}
