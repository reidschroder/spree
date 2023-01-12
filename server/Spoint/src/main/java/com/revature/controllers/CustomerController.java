package com.revature.controllers;

import com.revature.daos.CustomerDAO;
import com.revature.models.Customer;
import com.revature.models.LoginDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.xml.ws.Response;
import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin
@RequestMapping(value="")
public class CustomerController {

    private CustomerDAO cDAO;


    @Autowired
    public CustomerController(CustomerDAO cDAO){

        this.cDAO = cDAO;
    }

    //HTTP Requests ===========


    //New Customer
    @PostMapping(value = "/register")
    public ResponseEntity addCustomer(@RequestBody Customer c){
        Optional<Customer> customerOptional = cDAO.findByCustomerUsername(c.getCustomerUsername());
        Optional<Customer> customerEmailOptional = cDAO.findByCustomerEmail(c.getCustomerEmail());

        if(customerOptional.isPresent()){
            //Customer extractedCustomer = customerOptional.get();
            return ResponseEntity.status(406).body("Username Taken.");
        }

        if(customerEmailOptional.isPresent()){
            //Customer extractedCustomer = customerOptional.get();
            return ResponseEntity.status(406).body("Email Taken.");
        }

        Customer newCustomer = cDAO.save(c);

        if(newCustomer == null){
            return ResponseEntity.badRequest().build();
        }

        return ResponseEntity.accepted().body(newCustomer);
    }

    //Get All Customers
    @GetMapping
    public ResponseEntity<List<Customer>> getAllCustomers(){

        return ResponseEntity.ok(cDAO.findAll());
    }

    //Get Customer By ID
    @GetMapping(value="/{id}")
    public ResponseEntity<Customer> findById(@PathVariable int id){

        Optional<Customer> customerOptional = cDAO.findById(id);

        if(customerOptional.isPresent()){

            Customer extractedCustomer = customerOptional.get();

            return ResponseEntity.ok(extractedCustomer);
        }

        return ResponseEntity.badRequest().build();
    }


    @PostMapping(value = "/login")
    public ResponseEntity customerLogin(@RequestBody LoginDTO login){
        Optional<Customer> customerOptional = cDAO.findByCustomerUsername(login.getUsername());

        if(customerOptional.isPresent()){
            Customer extractedCustomer = customerOptional.get();

            if(extractedCustomer.getCustomerPassword().equals(login.getPassword())){
                return ResponseEntity.accepted().build();
            }
        }

        return ResponseEntity.status(406).build();


    }






}
