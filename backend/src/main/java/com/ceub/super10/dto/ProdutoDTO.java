package com.ceub.super10.dto;

import com.ceub.super10.entity.Produto;

public class ProdutoDTO {
	
	private Long id;
	private String title;
	private Integer count;
	private String image;
	
	public ProdutoDTO() {
		
	}

	public ProdutoDTO(Long id, String title, Double score, Integer count, String image) {
		this.id = id;
		this.title = title;
		this.count = count;
		this.image = image;
	}
	
	public ProdutoDTO(Produto produto) {
		id = produto.getId();
		title = produto.getTitle();
		count = produto.getCount();
		image = produto.getImage();
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public Integer getCount() {
		return count;
	}

	public void setCount(Integer count) {
		this.count = count;
	}

	public String getImage() {
		return image;
	}

	public void setImage(String image) {
		this.image = image;
	}
	
}
