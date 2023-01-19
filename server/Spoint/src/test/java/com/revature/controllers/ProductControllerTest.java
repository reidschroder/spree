package com.revature.controllers;

import static org.mockito.Mockito.any;
import static org.mockito.Mockito.when;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.revature.daos.ProductDAO;
import com.revature.models.Product;

import java.util.ArrayList;
import java.util.Optional;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.test.web.servlet.ResultActions;
import org.springframework.test.web.servlet.request.MockHttpServletRequestBuilder;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

@ContextConfiguration(classes = {ProductController.class,
        Product.class})
@ExtendWith(SpringExtension.class)
class ProductControllerTest {
    @Autowired
    private Product product;

    @Autowired
    private ProductController productController;

    @MockBean
    private ProductDAO productDAO;

    @Test
    void testAddProduct() throws Exception {
        Product product1 = new Product();
        product1.setProductDescription("Product Description");
        product1.setProductId(11);
        product1.setProductImgUrl("https://imagelink.com");
        product1.setProductName("Product Name");
        product1.setProductPrice(19.99d);
        product1.setProductType("Product Type");

        Product product2 = new Product();
        product2.setProductDescription("Product Description");
        product2.setProductId(11);
        product2.setProductImgUrl("https://imagelink.com");
        product2.setProductName("Product Name");
        product2.setProductPrice(19.99d);
        product2.setProductType("Product Type");
        Optional<Product> ofResult = Optional.of(product2);
        when(productDAO.save(any())).thenReturn(product1);
        when(productDAO.findByProductName(any())).thenReturn(ofResult);

        String content = (new ObjectMapper()).writeValueAsString(product2);
        MockHttpServletRequestBuilder requestBuilder = MockMvcRequestBuilders.post("/newproduct")
                .contentType(MediaType.APPLICATION_JSON)
                .content(content);
        ResultActions actualPerformResult = MockMvcBuilders.standaloneSetup(productController)
                .build()
                .perform(requestBuilder);
        actualPerformResult.andExpect(MockMvcResultMatchers.status().is(406))
                .andExpect(MockMvcResultMatchers.content().contentType("text/plain;charset=ISO-8859-1"))
                .andExpect(MockMvcResultMatchers.content().string("This product already exists!"));
    }


    @Test
    void testFindById() throws Exception {
        Product product = new Product();
        product.setProductDescription("Product Description");
        product.setProductId(8);
        product.setProductImgUrl("https://imagelink.com");
        product.setProductName("Product Name");
        product.setProductPrice(25.99d);
        product.setProductType("Product Type");
        Optional<Product> ofResult = Optional.of(product);
        when(productDAO.findById((Integer) any())).thenReturn(ofResult);
        MockHttpServletRequestBuilder requestBuilder = MockMvcRequestBuilders.get("/products/{id}", 8);
        MockMvcBuilders.standaloneSetup(productController)
                .build()
                .perform(requestBuilder)
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andExpect(MockMvcResultMatchers.content().contentType("application/json"))
                .andExpect(MockMvcResultMatchers.content()
                        .string(
                                "{\"productId\":8,\"productName\":\"Product Name\",\"productPrice\":25.99,\"productDescription\":\"Product"
                                        + " Description\",\"productType\":\"Product Type\",\"productImgUrl\":\"https://imagelink.com\"}"));
    }

    @Test
    void testGetAllProducts() throws Exception {
        when(productDAO.findAll()).thenReturn(new ArrayList<>());
        MockHttpServletRequestBuilder requestBuilder = MockMvcRequestBuilders.get("/products");
        MockMvcBuilders.standaloneSetup(productController)
                .build()
                .perform(requestBuilder)
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andExpect(MockMvcResultMatchers.content().contentType("application/json"))
                .andExpect(MockMvcResultMatchers.content().string("[]"));
    }

}

