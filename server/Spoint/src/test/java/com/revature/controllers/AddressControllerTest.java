package com.revature.controllers;

import static org.mockito.Mockito.any;
import static org.mockito.Mockito.when;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.revature.daos.AddressDAO;
import com.revature.models.Address;

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

@ContextConfiguration(classes = {AddressController.class, Address.class})
@ExtendWith(SpringExtension.class)
class AddressControllerTest {
    @Autowired
    private Address address;

    @Autowired
    private AddressController addressController;

    @MockBean
    private AddressDAO addressDAO;

    @Test
    void testAddAddress() throws Exception {
        Address address1 = new Address();
        address1.setAddressId(99);
        address1.setApartmentUnit("");
        address1.setCityName("Cincinnati");
        address1.setStateName("OH");
        address1.setStreetName("14 Pete Rose Way");
        address1.setZipCode(45201);
        when(addressDAO.save(any())).thenReturn(address1);
        when(addressDAO.findByStreetName(any())).thenReturn(new ArrayList<>());

        Address address2 = new Address();
        address2.setAddressId(99);
        address2.setApartmentUnit("");
        address2.setCityName("Cincinnati");
        address2.setStateName("OH");
        address2.setStreetName("14 Pete Rose Way");
        address2.setZipCode(45201);
        String content = (new ObjectMapper()).writeValueAsString(address2);
        MockHttpServletRequestBuilder requestBuilder = MockMvcRequestBuilders.post("/address")
                .contentType(MediaType.APPLICATION_JSON)
                .content(content);
        ResultActions actualPerformResult = MockMvcBuilders.standaloneSetup(addressController)
                .build()
                .perform(requestBuilder);
        actualPerformResult.andExpect(MockMvcResultMatchers.status().isAccepted())
                .andExpect(MockMvcResultMatchers.content().contentType("application/json"))
                .andExpect(MockMvcResultMatchers.content()
                        .string(
                                "{\"addressId\":99,\"streetName\":\"14 Pete Rose Way\",\"apartmentUnit\":\"\",\"cityName\":\"Cincinnati\","
                                        + "\"stateName\":\"OH\",\"zipCode\":45201}"));
    }


    @Test
    void testGetAddressById() throws Exception {
        Address address = new Address();
        address.setAddressId(58);
        address.setApartmentUnit("");
        address.setCityName("New York");
        address.setStateName("NY");
        address.setStreetName("1001 Broadway");
        address.setZipCode(1001);
        Optional<Address> ofResult = Optional.of(address);
        when(addressDAO.findById(any())).thenReturn(ofResult);
        MockHttpServletRequestBuilder requestBuilder = MockMvcRequestBuilders.get("/address/{id}", 1);
        MockMvcBuilders.standaloneSetup(addressController)
                .build()
                .perform(requestBuilder)
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andExpect(MockMvcResultMatchers.content().contentType("application/json"))
                .andExpect(MockMvcResultMatchers.content()
                        .string(
                                "{\"addressId\":58,\"streetName\":\"1001 Broadway\",\"apartmentUnit\":\"\",\"cityName\":\"New York\","
                                        + "\"stateName\":\"NY\",\"zipCode\":1001}"));
    }
}

