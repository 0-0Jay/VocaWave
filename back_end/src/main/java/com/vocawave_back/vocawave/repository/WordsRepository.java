package com.vocawave_back.vocawave.repository;

import com.vocawave_back.vocawave.entity.Words;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Repository
public interface WordsRepository extends JpaRepository<Words, String> {
    @Query(value="SELECT w.* FROM words w WHERE w.code = :code", nativeQuery = true)
    List<Words> getWords(@Param("code") String code);

    @Query(value="UPDATE wordlist SET rate = 0 WHERE code = :code", nativeQuery = true)
    @Transactional
    @Modifying
    void updateScore(String code);
}
