package com.revature.daos;


import com.revature.models.Address;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface AddressDAO extends JpaRepository<Address, Integer> {

    List<Optional<Address>> findByStreetName(String streetName);



}
