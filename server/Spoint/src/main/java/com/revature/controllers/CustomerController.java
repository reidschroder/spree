package com.revature.controllers;

import com.revature.daos.AddressDAO;
import com.revature.daos.CustomerDAO;
import com.revature.models.Address;
import com.revature.models.Customer;
import com.revature.models.LoginDTO;
import com.revature.models.ReturnLoginDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

//import javax.xml.ws.Response;
import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin
@RequestMapping(value="")
public class CustomerController {

    private CustomerDAO cDAO;
    private AddressDAO aDAO;

    @Autowired
    public CustomerController(CustomerDAO cDAO, AddressDAO aDAO){
        this.cDAO = cDAO;
        this.aDAO = aDAO;
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

                ReturnLoginDTO rDTO = new ReturnLoginDTO(extractedCustomer.getCustomerId(), extractedCustomer.getCustomerUsername());

                return ResponseEntity.accepted().body(rDTO);
            }
        }
        return ResponseEntity.status(406).build();
    }

    @PutMapping("/customer/{id}/address")
    public ResponseEntity updateAddress (@PathVariable("id") int id, @RequestBody Integer addressId) {
        System.out.println("HELLO FROM BACKEND ADDRESS");
        Optional<Customer> customerOptional = cDAO.findById(id);
        Optional<Address> addressOptional = aDAO.findById(addressId);
        if(addressOptional.isPresent()) {
            Address a = addressOptional.get();
            if (customerOptional.isPresent()) {
                Customer c = customerOptional.get();
                c.setAddress(a);
                c = cDAO.save(c);
                if (c == null) {
                    return ResponseEntity.internalServerError().body("Failed to update address!");
                }
                return ResponseEntity.accepted().body(c);
            }
            return ResponseEntity.badRequest().body("Customer does not exist!");
        }
        return ResponseEntity.badRequest().body("Address does not exist!");
    }
}
