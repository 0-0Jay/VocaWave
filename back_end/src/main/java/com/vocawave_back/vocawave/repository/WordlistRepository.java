package com.vocawave_back.vocawave.repository;

import com.vocawave_back.vocawave.entity.Wordlist;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface WordlistRepository extends JpaRepository<Wordlist, String> {
}
