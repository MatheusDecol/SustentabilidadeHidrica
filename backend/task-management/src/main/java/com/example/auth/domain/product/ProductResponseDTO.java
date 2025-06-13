package com.example.auth.domain.product;

public class ProductResponseDTO {
    private String id;
    private String name;
    private Integer price;

    public ProductResponseDTO() {
    }

    public ProductResponseDTO(String id, String name, Integer price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }

    public ProductResponseDTO(Product product) {
        this(product.getId(), product.getName(), product.getPrice());
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Integer getPrice() {
        return price;
    }

    public void setPrice(Integer price) {
        this.price = price;
    }
}
