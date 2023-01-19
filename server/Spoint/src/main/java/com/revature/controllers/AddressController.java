package com.revature.controllers;


import com.revature.daos.AddressDAO;
import com.revature.models.Address;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

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

    @GetMapping(value="/address/{id}")
    public ResponseEntity getAddressById(@PathVariable int id){
        Optional<Address> addressOptional = aDAO.findById(id);
        if (addressOptional.isPresent()) {
            Address a = addressOptional.get();
            return ResponseEntity.ok(a);
        }
        return ResponseEntity.badRequest().body("Could not find an address with that ID!");
    }

    //Add Address
    @PostMapping(value="/address")
    public ResponseEntity addAddress(@RequestBody Address a) {

        List<Optional<Address>> addressOptionalList = aDAO.findByStreetName(a.getStreetName());
        for (int i = 0; i < addressOptionalList.size(); i++) {
            if (addressOptionalList.get(i).isPresent()){
                Address current = addressOptionalList.get(i).get();
                if (current.equals(a)){
                    return ResponseEntity.accepted().body(current);
                }
            }
        }

        Address newAddress = aDAO.save(a);

        if (newAddress == null) {
            return ResponseEntity.status(500).body("Address couldn't be inserted into database.");
        }
        return ResponseEntity.accepted().body(newAddress);

    }
}
