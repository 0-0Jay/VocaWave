package com.vocawave_back.vocawave.repository;

import com.vocawave_back.vocawave.entity.Wordlist;
import com.vocawave_back.vocawave.entity.WordlistInterface;
import com.vocawave_back.vocawave.entity.Words;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Repository
public interface WordlistRepository extends JpaRepository<Wordlist, String> {
    @Transactional
    @Modifying
    @Query(value="UPDATE wordlist w SET w.rate = :rate WHERE w.code = :code", nativeQuery = true)
    void updateRate(@Param("code") String code, @Param("rate") int rate);

    @Query(value="SELECT w.code, w.wtitle, w.cmt, w.rate, " +
            "(SELECT COUNT(*) FROM words WHERE words.code = w.code) AS cnt " +
            "FROM wordlist w " +
            "WHERE w.id = :id AND (w.wtitle LIKE :q OR w.cmt LIKE :q)", nativeQuery = true)
    List<WordlistInterface> searchWordlist(@Param("id") String id, @Param("q") String query);

    @Query(value="SELECT w.code, w.wtitle, w.cmt, w.id, w.rate " +
            "FROM wordlist w " +
            "WHERE w.code = :code AND w.id = :id", nativeQuery = true)
    Optional<Wordlist> checkOwner(@Param("code") String code, @Param("id") String id);
}
