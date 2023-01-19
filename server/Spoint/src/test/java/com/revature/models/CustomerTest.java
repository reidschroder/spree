package com.revature.models;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertSame;

import org.junit.jupiter.api.Test;

class CustomerTest {

    @Test
    void testCustomer() {
        Customer customer = new Customer("Rickie", "Fowler", "secondplaceking", "birdies", "rickie@fowler.com");
        Address address = new Address();
        address.setAddressId(22);
        address.setApartmentUnit("Apartment Unit");
        address.setCityName("Pebble Beach");
        address.setStateName("CA");
        address.setStreetName("17 Mile Dr");
        address.setZipCode(93953);
        customer.setAddress(address);
        customer.setCustomerEmail("rickie@fowler.com");
        customer.setCustomerFirstName("Rickie");
        customer.setCustomerId(22);
        customer.setCustomerLastName("Fowler");
        customer.setCustomerPassword("birdies");
        customer.setCustomerUsername("secondplaceking");
        String toStringResult = customer.toString();
        assertSame(address, customer.getAddress());
        assertEquals("rickie@fowler.com", customer.getCustomerEmail());
        assertEquals("Rickie", customer.getCustomerFirstName());
        assertEquals(22, customer.getCustomerId());
        assertEquals("Fowler", customer.getCustomerLastName());
        assertEquals("birdies", customer.getCustomerPassword());
        assertEquals("secondplaceking", customer.getCustomerUsername());
        assertEquals(
                "Customer{customerId=22, customerFirstName='Rickie', customerLastName='Fowler', customerUsername='secondplaceking',"
                        + " customerPassword='birdies', customerEmail='rickie@fowler.com', address=Address{addressId=22,"
                        + " streetName='17 Mile Dr', apartmentUnit='Apartment Unit', cityName='Pebble Beach', stateName='CA',"
                        + " zipCode=93953}}",
                toStringResult);
    }

}

