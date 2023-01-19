package com.revature.models;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.Test;

class ReturnLoginDTOTest {
    @Test
    void testConstructor() {
        ReturnLoginDTO actualReturnLoginDTO = new ReturnLoginDTO(33, "hello");

        assertEquals(33, actualReturnLoginDTO.getCustomerId());
        assertEquals("hello", actualReturnLoginDTO.getCustomerUsername());
    }
}

