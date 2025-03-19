export const loadPosts = async () => {
  const postsResponse = await fetch('https://jsonplaceholder.typicode.com/posts');
  const photosResponse = await fetch('https://picsum.photos/v2/list?page1&limit=100');

  const postJson = await postsResponse.json();
  const photosJson = await photosResponse.json();

  const postAndPhotos = postJson.map((post, index) => {
    return { ...post, cover: photosJson[index] ? photosJson[index].download_url : 'https://picsum.photos/id/0/5000/3333' }
  });

  return postAndPhotos;
}