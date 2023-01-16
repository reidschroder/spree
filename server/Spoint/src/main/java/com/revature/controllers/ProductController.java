package com.revature.controllers;


import com.revature.daos.ProductDAO;
import com.revature.models.Product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin
@RequestMapping(value = "")
public class ProductController {

    private ProductDAO pDAO;


    @Autowired
    public ProductController(ProductDAO pDAO) {
        this.pDAO = pDAO;
    }


    //HTTP Requests===================================

    //Get All Products
    @GetMapping(value = "/products")
    public ResponseEntity<List<Product>> getAllProducts(){
        return ResponseEntity.ok(pDAO.findAll());
    }

    //Get Product By ID
    @GetMapping(value = "/products/{id}")
    public ResponseEntity<Product> findById(@PathVariable int id){
        Optional<Product> productOptional = pDAO.findById(id);

        if(productOptional.isPresent()){
            Product extractedProduct = productOptional.get();

            return ResponseEntity.ok(extractedProduct);
        }
        return ResponseEntity.badRequest().build();
    }

    //Create Product (For Devs only)
    @PostMapping(value = "/newproduct")
    public ResponseEntity addProduct(@RequestBody Product p){
        Optional<Product> productOptional = pDAO.findByProductName(p.getProductName());

        if(productOptional.isPresent()){
            return ResponseEntity.status(406).body("This product already exists!");
        }

        Product newProduct = pDAO.save(p);

        if(newProduct == null){
            return ResponseEntity.badRequest().build();
        }

        return ResponseEntity.accepted().body(newProduct);
    }



}
