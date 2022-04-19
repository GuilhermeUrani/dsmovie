package com.ceub.super10.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.ceub.super10.dto.ProdutoDTO;
import com.ceub.super10.entity.Produto;
import com.ceub.super10.repositories.ProdutoRepository;

@Service
public class ProdutoService {
	
	@Autowired
	private ProdutoRepository repository;
	
	@Transactional(readOnly = true)
	public Page<ProdutoDTO> findAll(Pageable pageable) {
		Page<Produto> result = repository.findAll(pageable);
		Page<ProdutoDTO> page = result.map(x -> new ProdutoDTO(x));
		return page;
	}

	@Transactional(readOnly = true)
	public ProdutoDTO findById(Long id) {
		Produto result = repository.findById(id).get();
		ProdutoDTO dto = new ProdutoDTO(result);
		return dto;
	}
}
