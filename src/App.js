import { Component } from "react";
import './App.css';


class App extends Component {
  state = {
    posts: [
      {
        id: 1,
        title: 'Titulo 1',
        body: 'Corpo 1'
      },
      {
        id: 2,
        title: 'Titulo 2',
        body: 'Corpo 2'
      },
      {
        id: 3,
        title: 'Titulo 3',
        body: 'Corpo 3'
      }
    ]
  }

  componentDidMount() {
    this.handleTimeout();
  }

  componentDidUpdate() {
    console.log('Atualizou');
  }

  componentWillUnmount() {
    console.log('Desmontou');
  }

  handleTimeout = () => {
    const { posts } = this.state;

    setTimeout(() => {
      posts[0].title = 'Titulo 1 alterado';

      this.setState({ posts });
    }, 2000);
  }

  render() {
    const { posts } = this.state;

    return (
      <div className="App" >
        <h1>Posts</h1>
        {posts.map(post => (
          <div key={post.id}>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
          </div>
        ))
        }
      </div >
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
