package com.navya.devsecops;

public class PasswordValidator {

    public boolean isValid(String password) {
        return password != null &&
               password.length() >= 8 &&
               password.matches(".*[A-Z].*") &&
               password.matches(".*[0-9].*");
    }

    public static void main(String[] args) {
        PasswordValidator validator = new PasswordValidator();
        System.out.println("Strong password result: " + validator.isValid("Secure123"));
        System.out.println("Weak password result: " + validator.isValid("abc"));
    }
}