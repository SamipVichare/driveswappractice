import Link from 'next/link';
type PostProps = {
  post: {
    body: string;
    title: string;
    id: number;
    userId: number;
  };
};

const Post = ({ post }: PostProps) => {
  return (
    <div>
      <h3>
        <Link href={`/posts/${post.id}`}>View details</Link> {post.id} -
        {post.title}
      </h3>
    </div>
  );
};

export default Post;
