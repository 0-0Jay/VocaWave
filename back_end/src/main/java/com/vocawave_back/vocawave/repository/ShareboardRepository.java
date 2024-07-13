package com.vocawave_back.vocawave.repository;

import com.vocawave_back.vocawave.entity.Shareboard;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ShareboardRepository extends JpaRepository<Shareboard, String> {
    @Query(value="SELECT s.code, s.stitle, s.contents " +
            "FROM shareboard s " +
            "WHERE s.stitle LIKE :query or s.contents LIKE :query")
    List<Shareboard> searchShare(@Param("query") String query);
}
