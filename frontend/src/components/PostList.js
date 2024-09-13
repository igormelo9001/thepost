// src/components/PostList.js
import React from 'react';

const PostList = ({ posts }) => {
  return (
    <div className="post-list">
      {posts.length > 0 ? (
        posts.map(post => (
          <div className="post-card" key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            <small>Autor: {post.author}</small>
          </div>
        ))
      ) : (
        <p>Nenhum post encontrado.</p>
      )}
    </div>
  );
};

export default PostList;
