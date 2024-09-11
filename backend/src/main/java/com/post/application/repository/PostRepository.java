package com.post.application.repository;

import com.post.application.model.Post;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PostRepository extends JpaRepository<Post, Long> {
    // Métodos personalizados de consulta podem ser adicionados aqui
}
