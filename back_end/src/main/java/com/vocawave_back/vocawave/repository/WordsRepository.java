package com.vocawave_back.vocawave.repository;

import com.vocawave_back.vocawave.entity.Words;
import com.vocawave_back.vocawave.entity.WordsKey;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface WordsRepository extends JpaRepository<Words, WordsKey> {
    @Query(value="SELECT w.* FROM words w WHERE w.code = :code", nativeQuery = true)
    List<Words> getWords(@Param("code") String code);

    List<Words> findAllByCode(String code);
}
