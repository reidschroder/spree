package com.revature.daos;


import com.revature.models.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ProductDAO extends JpaRepository<Product, Integer> {



    //havent written out this controller yet
    Optional<Product> findByProductName(String productName);


}
