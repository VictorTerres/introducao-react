export const loadPosts = async () => {
  const postsResponse = fetch('https://jsonplaceholder.typicode.com/posts');
  const photosResponse = fetch('https://picsum.photos/v2/list?page1&limit=100');

  const [posts, photos] = await Promise.all([postsResponse, photosResponse]);

  const postsJson = await posts.json();
  const photosJson = await photos.json();

  const postsAndPhotos = postsJson.map((post, index) => {
    return { ...post, cover: photosJson[index] ? photosJson[index].download_url : 'https://picsum.photos/id/0/5000/3333' }
  });

  return postsAndPhotos;
};
