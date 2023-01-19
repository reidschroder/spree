package com.revature.models;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;

import org.junit.jupiter.api.Test;

class AddressTest {

    @Test
    void testAddress() {
        Address Address = new Address("Main Street", "Apartment Unit", "Miami", "FL", 33133);
        Address.setAddressId(25);
        Address.setApartmentUnit("Apartment Unit");
        Address.setCityName("Miami");
        Address.setStateName("FL");
        Address.setStreetName("Main Street");
        Address.setZipCode(33133);
        String toStringResult = Address.toString();
        assertEquals(25, Address.getAddressId());
        assertEquals("Apartment Unit", Address.getApartmentUnit());
        assertEquals("Miami", Address.getCityName());
        assertEquals("FL", Address.getStateName());
        assertEquals("Main Street", Address.getStreetName());
        assertEquals(33133, Address.getZipCode());
        assertEquals("Address{addressId=25, streetName='Main Street', apartmentUnit='Apartment Unit', cityName='Miami',"
                + " stateName='FL', zipCode=33133}", toStringResult);

    }
}

