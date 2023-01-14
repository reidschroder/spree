package com.revature.models;

public class ReturnLoginDTO {

    private int customerId;
    private String customerUsername;

    public ReturnLoginDTO() {
    }

    public ReturnLoginDTO(int customerId, String customerUsername) {
        this.customerId = customerId;
        this.customerUsername = customerUsername;
    }

    public int getCustomerId() {
        return customerId;
    }

    public void setCustomerId(int customerId) {
        this.customerId = customerId;
    }

    public String getCustomerUsername() {
        return customerUsername;
    }

    public void setCustomerUsername(String customerUsername) {
        this.customerUsername = customerUsername;
    }
}
