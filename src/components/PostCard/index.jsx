import './styles.css';
export const PostCard = ({ post }) => {
  return (
    <article className="post-card">
      <img src={post.cover} alt="" />
      <h3>{post.title}</h3>
      <p><strong>Author:</strong> User {post.userId}</p>
      <p>{post.body}</p>
    </article>
  )
}