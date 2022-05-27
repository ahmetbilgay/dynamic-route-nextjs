import React from "react";
import axios from "axios";
import Link from "next/link";

const App = ({ data }) => {
  return (
    <div>
      {data.map((e) => (
        <div className="item">
          <Link href={"/" + e.id} key={e.id}>
            <div>
              <h1>{e.title}</h1>
              <p>{e.body}</p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export async function getServerSideProps() {
  const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
  return { props: { data: res.data } };
}

export default App;
