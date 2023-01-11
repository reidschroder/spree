package com.revature.models;


import org.springframework.stereotype.Component;

import javax.persistence.*;

@Entity
@Table(name="addresses")
@Component
public class Address {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int addressId;

    private String streetName;

    private String apartmentUnit;

    private String cityName;

    private String stateName;

    private int zipCode;


    public Address() {
    }

    public Address(int addressId, String streetName, String apartmentUnit, String cityName, String stateName, int zipCode) {
        this.addressId = addressId;
        this.streetName = streetName;
        this.apartmentUnit = apartmentUnit;
        this.cityName = cityName;
        this.stateName = stateName;
        this.zipCode = zipCode;
    }

    public Address(String streetName, String apartmentUnit, String cityName, String stateName, int zipCode) {
        this.streetName = streetName;
        this.apartmentUnit = apartmentUnit;
        this.cityName = cityName;
        this.stateName = stateName;
        this.zipCode = zipCode;
    }

    public int getAddressId() {
        return addressId;
    }

    public void setAddressId(int addressId) {
        this.addressId = addressId;
    }

    public String getStreetName() {
        return streetName;
    }

    public void setStreetName(String streetName) {
        this.streetName = streetName;
    }

    public String getApartmentUnit() {
        return apartmentUnit;
    }

    public void setApartmentUnit(String apartmentUnit) {
        this.apartmentUnit = apartmentUnit;
    }

    public String getCityName() {
        return cityName;
    }

    public void setCityName(String cityName) {
        this.cityName = cityName;
    }

    public String getStateName() {
        return stateName;
    }

    public void setStateName(String stateName) {
        this.stateName = stateName;
    }

    public int getZipCode() {
        return zipCode;
    }

    public void setZipCode(int zipCode) {
        this.zipCode = zipCode;
    }

    @Override
    public String toString() {
        return "Address{" +
                "addressId=" + addressId +
                ", streetName='" + streetName + '\'' +
                ", apartmentUnit='" + apartmentUnit + '\'' +
                ", cityName='" + cityName + '\'' +
                ", stateName='" + stateName + '\'' +
                ", zipCode=" + zipCode +
                '}';
    }
}
