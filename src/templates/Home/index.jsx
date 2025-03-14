import './styles.css';

import { Component } from "react";
import { Header } from '../../components/Header';
import { Body } from '../../components/Body';
import { Button } from '../../components/Button';
import { fetchPosts } from '../../functions/fetchPosts';

class Home extends Component {
  state = {
    posts: [],
    allPosts: [],
    page: 0,
    postsPerPage: 50
  }

  async componentDidMount() {
    await this.fetchPosts();
  }

  fetchPosts = async () => {
    const { page, postsPerPage } = this.state;
    const postAndPhotos = await fetchPosts();
    this.setState({
      posts: postAndPhotos.slice(page, postsPerPage),
      allPosts: postAndPhotos
    });
  }

  loadMorePosts = () => {
    const {
      page,
      postsPerPage,
      allPosts,
      posts
    } = this.state;

    const nextPage = page + postsPerPage;
    const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage);
    posts.push(...nextPosts);

    this.setState({ posts, page: nextPage });
  }

  render() {
    const { posts, page, postsPerPage, allPosts } = this.state;
    const noMorePosts = page + postsPerPage >= allPosts.length;

    return (
      <div className="App">
        <Header />
        <Body posts={posts} />
        <Button text="Load more posts" onClick={this.loadMorePosts} hidden={noMorePosts} />
      </div >
    );
  }
}

export default Home;