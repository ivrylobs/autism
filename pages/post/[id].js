import axios from "axios";
import { fetchAPI } from "../../lib/api";
import ReactMarkdown from "react-markdown";

const instance = axios.create({
  baseURL: "http://localhost:1337",
});

const Post = ({ post }) => {
  return (
    <div>
      Test {post.id}
      <ReactMarkdown
        transformImageUri={(uri) => {
          console.log(uri);
          return "http://localhost:1337" + uri;
        }}
        children={post.content}
      />
    </div>
  );
};

export async function getStaticPaths() {
  const blogs = await fetchAPI("/blogs");
  return {
    paths: blogs.map((blog) => ({
      params: {
        id: blog.id.toString(),
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const post = await instance.get(`/blogs/${params.id}`);

  return {
    props: {
      post: post.data,
    },
  };
}

export default Post;
