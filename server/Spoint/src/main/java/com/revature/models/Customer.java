package com.revature.models;


import org.springframework.stereotype.Component;

import javax.persistence.*;

@Entity
@Table(name="customers")
@Component
public class Customer {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int customerId;

    private String customerFirstName;

    private String customerLastName;
    @Column(unique = true)
    private String customerUsername;

    private String customerPassword;

    private String customerEmail;

    @ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @JoinColumn(name = "addressId")
    private Address address;

    public Customer() {
    }

    public Customer(int customerId, String customerFirstName, String customerLastName, String customerUsername, String customerPassword, String customerEmail, Address address) {
        this.customerId = customerId;
        this.customerFirstName = customerFirstName;
        this.customerLastName = customerLastName;
        this.customerUsername = customerUsername;
        this.customerPassword = customerPassword;
        this.customerEmail = customerEmail;
        this.address = address;
    }

    public Customer(String customerFirstName, String customerLastName, String customerUsername, String customerPassword, String customerEmail, Address address) {
        this.customerFirstName = customerFirstName;
        this.customerLastName = customerLastName;
        this.customerUsername = customerUsername;
        this.customerPassword = customerPassword;
        this.customerEmail = customerEmail;
        this.address = address;
    }

    public Customer(String customerFirstName, String customerLastName, String customerUsername, String customerPassword, String customerEmail) {
        this.customerFirstName = customerFirstName;
        this.customerLastName = customerLastName;
        this.customerUsername = customerUsername;
        this.customerPassword = customerPassword;
        this.customerEmail = customerEmail;
    }

    public int getCustomerId() {
        return customerId;
    }

    public void setCustomerId(int customerId) {
        this.customerId = customerId;
    }

    public String getCustomerFirstName() {
        return customerFirstName;
    }

    public void setCustomerFirstName(String customerFirstName) {
        this.customerFirstName = customerFirstName;
    }

    public String getCustomerLastName() {
        return customerLastName;
    }

    public void setCustomerLastName(String customerLastName) {
        this.customerLastName = customerLastName;
    }

    public String getCustomerUsername() {
        return customerUsername;
    }

    public void setCustomerUsername(String customerUsername) {
        this.customerUsername = customerUsername;
    }

    public String getCustomerPassword() {
        return customerPassword;
    }

    public void setCustomerPassword(String customerPassword) {
        this.customerPassword = customerPassword;
    }

    public String getCustomerEmail() {
        return customerEmail;
    }

    public void setCustomerEmail(String customerEmail) {
        this.customerEmail = customerEmail;
    }

    public Address getAddress() {
        return address;
    }

    public void setAddress(Address address) {
        this.address = address;
    }

    @Override
    public String toString() {
        return "Customer{" +
                "customerId=" + customerId +
                ", customerFirstName='" + customerFirstName + '\'' +
                ", customerLastName='" + customerLastName + '\'' +
                ", customerUsername='" + customerUsername + '\'' +
                ", customerPassword='" + customerPassword + '\'' +
                ", customerEmail='" + customerEmail + '\'' +
                ", address=" + address +
                '}';
    }
}
