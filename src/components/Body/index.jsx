import './styles.css';
import { PostCard } from '../PostCard';

export const Body = ({ posts }) => {
  return (
    <main>
      <section className="posts-section">
        {posts.map(post => (
          <PostCard post={post} key={post.id} />
        ))}
      </section>
    </main>
  )
}