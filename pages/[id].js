import axios from "axios";

export const getStaticPaths = async () => {
  const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
  const paths = res.data.map((e) => ({ params: { id: e.id.toString() } }));
  return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await axios.get(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  return { props: { data: res.data } };
};
const Id = ({ data }) => {
  console.log(data);
  return (
    <div>
      <h1>{data.title}</h1>
      <h1>{data.body}</h1>
    </div>
  );
};

export default Id;
