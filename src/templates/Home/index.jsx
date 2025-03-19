import './styles.css';

import { useEffect, useState, useCallback } from "react";
import { Header } from '../../components/Header';
import { TextInput } from '../../components/TextInput';
import { Body } from '../../components/Body';
import { Button } from '../../components/Button';
import { loadPosts } from '../../functions/loadPosts';

export const Home = () => {

  const [posts, setPosts] = useState([]);
  const [allPosts, setAllPosts] = useState([]);
  const [page, setPage] = useState(0);
  const [postsPerPage] = useState(10);
  const [searchValue, setSearchValue] = useState('');

  const noMorePosts = page + postsPerPage >= allPosts.length;
  const filteredPosts = !!searchValue ? allPosts.filter(post => {
    return post.title.toLowerCase().includes(searchValue.toLowerCase());
  }) : posts;

  const handleLoadPosts = useCallback(async (page, postsPerPage) => {
    const postAndPhotos = await loadPosts();
    setPosts(postAndPhotos.slice(page, postsPerPage));
    setAllPosts(postAndPhotos);
  }, []);

  useEffect(() => {
    handleLoadPosts(0, postsPerPage);
  }, [handleLoadPosts, postsPerPage]);

  const loadMorePosts = () => {
    const nextPage = page + postsPerPage;
    const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage);
    posts.push(...nextPosts);

    setPosts(posts);
    setPage(nextPage);
  }

  const handleSearch = (event) => {
    const { value } = event.target;
    setSearchValue(value);
  }

  return (
    <div className="App">
      <Header />
      <TextInput searchValue={searchValue} handleSearch={handleSearch} />
      {filteredPosts.length === 0 ? <p className="post-message">Nenhum Post Localizado!</p> : <Body posts={filteredPosts} />}
      {!searchValue && (
        <Button text="Load more posts" onClick={loadMorePosts} hidden={noMorePosts} />
      )}
    </div >
  );
}

export default Home;