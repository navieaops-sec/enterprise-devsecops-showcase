package com.navya.devsecops;

import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

public class PasswordValidatorTest {

    PasswordValidator validator = new PasswordValidator();

    @Test
    void shouldAcceptStrongPassword() {
        assertTrue(validator.isValid("Secure123"));
    }

    @Test
    void shouldRejectWeakPassword() {
        assertFalse(validator.isValid("abc"));
    }
}