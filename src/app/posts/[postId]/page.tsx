import axios from 'axios';
type PostType = {
  body: string;
  title: string;
  id: number;
  userId: number;
};

type PostDetailProps = {
  params: { postId: string };
};

export default async function PostDetail({ params }: PostDetailProps) {
  const response = await axios.get(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}`
  );
  const post: PostType = response.data;
  console.log(response);
  return (
    <div>
      <h1>post details {params.postId}</h1>
      <p>Title : {post.title}</p>
      <p>Body : {post.body}</p>
      <p>Usr id : {post.userId}</p>
    </div>
  );
}
