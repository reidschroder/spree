package com.revature.models;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.Test;

class LoginDTOTest {

    @Test
    void testLoginDTO() {
        LoginDTO loginDTO = new LoginDTO("intelliBen", "mister");

        assertEquals("mister", loginDTO.getPassword());
        assertEquals("intelliBen", loginDTO.getUsername());
    }
}

