package com.vocawave_back.vocawave.repository;

import com.vocawave_back.vocawave.entity.Users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UsersRepository extends JpaRepository<Users, String> {

//    @Query(value="SELECT * FROM users WHERE id = :id AND pw = :pw",nativeQuery = true)
    public Optional<Users> findByIdAndPw(String id, String pw);
}