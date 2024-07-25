package com.vocawave_back.vocawave.repository;

import com.vocawave_back.vocawave.entity.Shareboard;
import com.vocawave_back.vocawave.entity.ShareboardInterface;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ShareboardRepository extends JpaRepository<Shareboard, String> {
    @Query(value="SELECT s.code, s.stitle, s.contents, s.nick, " +
            "(SELECT COUNT(*) FROM wordlist w WHERE w.code = s.code) AS cnt " +
            "FROM shareboard s " +
            "WHERE s.stitle LIKE :query or s.contents LIKE :query", nativeQuery = true)
    List<ShareboardInterface> searchShare(@Param("query") String query);
}
