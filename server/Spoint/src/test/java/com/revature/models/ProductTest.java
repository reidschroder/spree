package com.revature.models;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.Test;

class ProductTest {

    @Test
    void testProduct() {
        Product product = new Product("Product Name", 550.0d, "Product Description", "Product Type",
                "https://imagelink.com");
        product.setProductDescription("Product Description");
        product.setProductId(87);
        product.setProductImgUrl("https://imagelink.com");
        product.setProductName("Product Name");
        product.setProductPrice(550.0d);
        product.setProductType("Product Type");
        String actualToStringResult = product.toString();
        assertEquals("Product Description", product.getProductDescription());
        assertEquals(87, product.getProductId());
        assertEquals("https://imagelink.com", product.getProductImgUrl());
        assertEquals("Product Name", product.getProductName());
        assertEquals(550.0d, product.getProductPrice());
        assertEquals("Product Type", product.getProductType());
        assertEquals(
                "Product{productId=87, productName='Product Name', productPrice=550.0, productDescription='Product"
                        + " Description', productType='Product Type', productImgUrl='https://imagelink.com'}",
                actualToStringResult);
    }
}

