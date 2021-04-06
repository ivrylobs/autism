import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:1337",
});

const Post = ({ post }) => {
  return <div>Test</div>;
};

export async function getStaticPaths() {
  const blogs = await instance.get("/blogs");
  console.log(blogs);
  return {
    paths: blogs.map((item) => ({
      params: {
        id: item.id,
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const post = await instance.get("/blogs/1");
  console.log(post);

  return {
    props: {
      post: post,
    },
  };
}

export default Post;
