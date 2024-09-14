// src/components/PostForm.js
import React, { useState } from 'react';
 // Inclua este arquivo CSS se você quiser adicionar mais estilos

const PostForm = ({ onPostCreated }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    const post = {
      title: title,
      content: content,
      author: author
    };

    try {
      const response = await fetch('http://15.228.234.79:80/posts/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(post),
      });

      if (response.ok) {
        const data = await response.json();
        setMessage('Post criado com sucesso!');
        console.log('Resposta do backend:', data);
        onPostCreated(); // Atualiza a lista de posts
        setTitle('');
        setContent('');
        setAuthor('');
      } else {
        setMessage('Erro ao criar o post.');
      }
    } catch (error) {
      setMessage('Erro na comunicação com o backend.');
      console.error('Erro:', error);
    }
  };

  return (
    <div className="post-form">
      <h1>Assuntos</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Título:</label>
          <input 
            type="text" 
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label>Conteúdo:</label>
          <textarea 
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <div>
          <label>Autor:</label>
          <input 
            type="text" 
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
        <button type="submit">Criar Post</button>
      </form>
      <p>{message}</p>
    </div>
  );
};

export default PostForm;
