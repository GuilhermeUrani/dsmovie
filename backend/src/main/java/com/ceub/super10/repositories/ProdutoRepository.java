package com.ceub.super10.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ceub.super10.entity.Produto;

public interface ProdutoRepository extends JpaRepository<Produto, Long>{

	
}
