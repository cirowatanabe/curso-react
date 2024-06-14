import { PostCard } from '../PostCard';
import './styles.css';

export const Posts = ({posts = []}) => {
  return (
    <div className="posts">
      {posts.map((post) => (
        <PostCard
          key={post.id}
          id={post}
          cover={post.cover}
          title={post.title}
          body={post.body}
        />
      ))}
    </div>
  );
};
