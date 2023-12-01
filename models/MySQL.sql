-- MySQL.sql

-- 데이터베이스 생성
CREATE DATABASE my_team;

-- 데이터베이스 선택
USE DATABASE my_team; -- 틀린 작성법
USE my_team; -- 옳은 작성법

-- 테이블 생성
CREATE TABLE info (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255),
  personal_site VARCHAR(255),
  contact VARCHAR(255),
  current_project VARCHAR(255),
  img VARCHAR(255)
);