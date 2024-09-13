// src/App.js
import React, { useState, useEffect } from 'react';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import './App.css';

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Função para carregar posts (opcional, se você quiser carregar posts existentes)
    const fetchPosts = async () => {
      const response = await fetch('http://backend:8080/posts');
      const data = await response.json();
      setPosts(data);
    };

    fetchPosts();
  }, []);

  const handlePostCreated = async () => {
    // Atualiza a lista de posts após a criação
    const response = await fetch('http://backend:8080/posts');
    const data = await response.json();
    setPosts(data);
  };

  return (
    <div className="App">
      <PostList posts={posts} />
      <PostForm onPostCreated={handlePostCreated} />
    </div>
  );
}

export default App;
