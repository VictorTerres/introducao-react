import { PostCard } from '../PostCard';

export const Body = ({ posts }) => {
  return (
    <main>
      <h2>Posts</h2>
      <section className="posts-section">
        {posts.map(post => (
          <PostCard post={post} key={post.id} />
        ))}
      </section>
    </main>
  )
}