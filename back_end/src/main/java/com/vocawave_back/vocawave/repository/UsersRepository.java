package com.vocawave_back.vocawave.repository;

import com.vocawave_back.vocawave.entity.Users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UsersRepository extends JpaRepository<Users, String> {
}
