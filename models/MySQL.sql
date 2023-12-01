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

-- 데이터 추가
INSERT INTO info (name, personal_site, contact, current_project, img) VALUES
  ('변호녕', 'https://github.com/dev-honing', 'dev.honing@gmail.com', 'https://github.com/KDT-IaaS-Class-One-Group/Plan-Trek', 'https://ca.slack-edge.com/T02JAN3TFEU-U05QNF4S8E4-d68d71b13d89-512'),
  ('유승민', 'https://github.com/Yusmin97', 'tmdamsi97@gmail.com', 'https://github.com/Yusmin97/petCheck', 'https://ca.slack-edge.com/T02JAN3TFEU-U05QNF5CVPS-7428567c34ec-512'),
  ('소사무엘', 'https://github.com/samuel21695', 'samuelso21695@gmail.com', 'https://github.com/samuel21695/Rest-SPA-Application', 'https://ca.slack-edge.com/T02JAN3TFEU-U05PS53QQAJ-c7257b63ee29-512'),
  ('이은정', 'https://github.com/LeeEunJeong0731', 'eunjeong990731@gmail.com', 'https://github.com/LeeEunJeong0731/gabojago', 'https://ca.slack-edge.com/T02JAN3TFEU-U05Q17NEBQU-7f78254ec90a-512');

-- info TABLE에 추가된 데이터를 확인
SELECT * FROM info;

-- info 테이블에 bio 컬럼 추가
ALTER TABLE info
ADD COLUMN bio TEXT;

-- 데이터 갱신
UPDATE info
SET bio = '변호녕의 좌우명'
WHERE name = '변호녕';
