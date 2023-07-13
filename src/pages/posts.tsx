// import { createClient } from "contentful";
import { PostType } from "@/types/PostType";
import Post from "@/components/Post";

export async function getStaticProps() {
  // const client = createClient({
  //   space: "tt7atva7xy5o",
  //   accessToken: "xCw1D9u20ncH5qtp6n_9CGTJFWYZQ5ItciQLgmQ7ldE",
  // });

  // const res = await client.getEntries({ content_type: "post" });

  return {
    props: {
      // posts: res.items.map((el) => el.fields),
    },
  };
}

export default function Posts({ posts }: { posts: PostType[] }) {
  console.log(posts);
  return (
    <div>
      {posts.map((el, i) => {
        console.log(el);
        return <Post key={i} data={el} />;
      })}
    </div>
  );
}
