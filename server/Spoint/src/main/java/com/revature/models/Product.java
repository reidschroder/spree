package com.revature.models;


import org.springframework.stereotype.Component;

import javax.persistence.*;

@Entity
@Table(name="products")
@Component
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int productId;

    private String productName;

    private double productPrice;

    private String productDescription;

    private String productType;

    private String productSize;

    public Product() {
    }

    public Product(int productId, String productName, double productPrice, String productDescription, String productType, String productSize) {
        this.productId = productId;
        this.productName = productName;
        this.productPrice = productPrice;
        this.productDescription = productDescription;
        this.productType = productType;
        this.productSize = productSize;
    }

    public Product(String productName, double productPrice, String productDescription, String productType, String productSize) {
        this.productName = productName;
        this.productPrice = productPrice;
        this.productDescription = productDescription;
        this.productType = productType;
        this.productSize = productSize;
    }

    public Product(String productName, double productPrice, String productDescription, String productType) {
        this.productName = productName;
        this.productPrice = productPrice;
        this.productDescription = productDescription;
        this.productType = productType;
    }

    public int getProductId() {
        return productId;
    }

    public void setProductId(int productId) {
        this.productId = productId;
    }

    public String getProductName() {
        return productName;
    }

    public void setProductName(String productName) {
        this.productName = productName;
    }

    public double getProductPrice() {
        return productPrice;
    }

    public void setProductPrice(double productPrice) {
        this.productPrice = productPrice;
    }

    public String getProductDescription() {
        return productDescription;
    }

    public void setProductDescription(String productDescription) {
        this.productDescription = productDescription;
    }

    public String getProductType() {
        return productType;
    }

    public void setProductType(String productType) {
        this.productType = productType;
    }

    public String getProductSize() {
        return productSize;
    }

    public void setProductSize(String productSize) {
        this.productSize = productSize;
    }

    @Override
    public String toString() {
        return "Product{" +
                "productId=" + productId +
                ", productName='" + productName + '\'' +
                ", productPrice=" + productPrice +
                ", productDescription='" + productDescription + '\'' +
                ", productType='" + productType + '\'' +
                ", productSize='" + productSize + '\'' +
                '}';
    }
}
