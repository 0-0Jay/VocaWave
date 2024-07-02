package com.vocawave_back.vocawave.repository;

import com.vocawave_back.vocawave.entity.Recommend;
import com.vocawave_back.vocawave.entity.RecommendKey;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RecommendRepository extends JpaRepository<Recommend, RecommendKey> {
}
