import './styles.css';

import { Component } from "react";
import { Header } from '../../components/Header';
import { Body } from '../../components/Body';
import { Footer } from '../../components/Footer';
import { fetchPosts } from '../../functions/fetchPosts';

class Home extends Component {
  state = {
    posts: []
  }

  async componentDidMount() {
    await this.fetchPosts();
  }

  fetchPosts = async () => {
    const postAndPhotos = await fetchPosts();
    this.setState({ posts: postAndPhotos });
  }

  render() {
    const { posts } = this.state;

    return (
      <div className="App">
        <Header />
        <Body posts={posts} />
        <Footer />
      </div >
    );
  }
}

export default Home;