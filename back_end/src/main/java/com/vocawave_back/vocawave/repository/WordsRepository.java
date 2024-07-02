package com.vocawave_back.vocawave.repository;

import com.vocawave_back.vocawave.entity.Words;
import com.vocawave_back.vocawave.entity.WordsKey;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface WordsRepository extends JpaRepository<Words, WordsKey> {
}
