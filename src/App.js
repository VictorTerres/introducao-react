import { Component } from "react";
import './App.css';


class App extends Component {
  state = {
    posts: []
  }

  componentDidMount() {
    this.fetchPosts();
  }

  componentDidUpdate() {
  }

  componentWillUnmount() {
  }

  fetchPosts = async () => {
    const postsResponse = await fetch('https://jsonplaceholder.typicode.com/posts');
    const photosResponse = await fetch('https://picsum.photos/v2/list?page1&limit=100');

    const postJson = await postsResponse.json();
    const photosJson = await photosResponse.json();

    const postAndPhotos = postJson.map((post, index) => {
      return { ...post, cover: photosJson[index] ? photosJson[index].download_url : 'https://picsum.photos/id/0/5000/3333' }
    });

    this.setState({ posts: postAndPhotos });
  }

  render() {
    const { posts } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <h1>Blog Inicial - React</h1>
        </header>
        <main>
          <h2>Posts</h2>
          <section className="posts-section">
            {posts.map(post => (
              <article key={post.id} className="post-card">
                <img src={post.cover} alt="" />
                <h3>{post.title}</h3>
                <p><strong>Author:</strong> User {post.userId}</p>
                <p>{post.body}</p>
              </article>
            ))}
          </section>
        </main>
        <footer className="App-footer">
          <p>&copy; 2025. All rights reserved.</p>
        </footer>
      </div>
    );
  }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
