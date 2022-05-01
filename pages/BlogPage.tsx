import React, { useCallback, useEffect, useState } from 'react'
import Header from '../components/Layout/Header';

const BlogPage = () => {
  const [posts, setPosts] = useState([]);

  const getPosts = useCallback(async() => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const json = await res.json();
    setPosts(json);
  }, []);

  useEffect(() => {
    getPosts();
  }, [getPosts]);
  
  return (
    <div>
      <Header />
      <ol>
        {posts.map(post => {
          return <li key={post.id}>{post.title}</li>;
        })}
      </ol>
    </div>
  );
}
export default BlogPage;