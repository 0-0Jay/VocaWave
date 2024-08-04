package com.vocawave_back.vocawave.repository;

import com.vocawave_back.vocawave.entity.Shareboard;
import com.vocawave_back.vocawave.entity.ShareboardInterface;
import com.vocawave_back.vocawave.entity.Wordlist;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ShareboardRepository extends JpaRepository<Shareboard, String> {
    @Query(value="SELECT s.code, w.wtitle, w.cmt, s.nick, " +
            "(SELECT COUNT(*) FROM words a WHERE a.code = s.code) AS cnt " +
            "FROM shareboard s JOIN wordlist w ON s.code = w.code " +
            "WHERE w.wtitle LIKE :query or w.cmt LIKE :query", nativeQuery = true)
    List<ShareboardInterface> searchShare(@Param("query") String query);

    @Query(value="SELECT * FROM shareboard WHERE code = :code", nativeQuery = true)
    List<Shareboard> checkShare(@Param("code") String code);
}
