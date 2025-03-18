import './styles.css';

import { Component } from "react";
import { Header } from '../../components/Header';
import { TextInput } from '../../components/TextInput';
import { Body } from '../../components/Body';
import { Button } from '../../components/Button';
import { fetchPosts } from '../../functions/fetchPosts';

class Home extends Component {
  state = {
    posts: [],
    allPosts: [],
    page: 0,
    postsPerPage: 5,
    searchValue: ''
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

  handleSearch = (event) => {
    const { value } = event.target;
    this.setState({ searchValue: value });
  }

  render() {
    const { posts, page, postsPerPage, allPosts, searchValue } = this.state;
    const noMorePosts = page + postsPerPage >= allPosts.length;

    const filteredPosts = !!searchValue ? allPosts.filter(post => {
      return post.title.toLowerCase().includes(searchValue.toLowerCase());
    }) : posts;

    return (
      <div className="App">
        <Header />
        <TextInput searchValue={searchValue} handleSearch={this.handleSearch} />
        {filteredPosts.length === 0 ? <p className="post-message">Nenhum Post Localizado!</p> : <Body posts={filteredPosts} />}
        {!searchValue && (
          <Button text="Load more posts" onClick={this.loadMorePosts} hidden={noMorePosts} />
        )}
      </div >
    );
  }
}

export default Home;