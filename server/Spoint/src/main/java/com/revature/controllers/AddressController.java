package com.revature.controllers;


import com.revature.daos.AddressDAO;
import com.revature.models.Address;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("")
public class AddressController {


    private AddressDAO aDAO;

    @Autowired
    public AddressController(AddressDAO aDAO) {
        this.aDAO = aDAO;
    }

    //HTTP Requests

    //Add Address
    @PostMapping(value="/address")
    public ResponseEntity addAddress(@RequestBody Address a) {


        Address newAddress = aDAO.save(a);

        if(newAddress == null){

            return ResponseEntity.badRequest().build();

        }

        return ResponseEntity.accepted().body(newAddress);

    }
}
