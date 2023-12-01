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

-- info 테이블에 추가된 데이터를 확인
SELECT * FROM info;

--! 컬럼 순서를 변경하는 별도의 기능은 MySQL에서 제공되지 않았다.
--* 따라서, 새로운 테이블을 생성하고 기존 테이블을 삭제한 뒤에 새로운 테이블 이름을 기존과 같이 변경해주려고 한다.

-- 새로운 테이블 생성
CREATE TABLE info_new AS
SELECT name, personal_site, bio, contact, current_project, img
FROM info;

-- 기존 테이블 삭제
DROP TABLE info;

-- 새롭게 생성한 테이블 이름 변경
ALTER TABLE info_new RENAME to info;

-- 팀원들의 bio 데이터 갱신
UPDATE info
SET bio = '포기하지 않으면 반드시 해낼 수 있다.'
WHERE name = '변호녕';

UPDATE info
SET bio = '차근차근 무너지지 않게 쌓아가는 생활을 하자.'
WHERE name = '유승민';

UPDATE info
SET bio = '순간 순간 최선을 다하자.'
WHERE name = '소사무엘';

UPDATE info
SET bio = '항상 배려하고 긍정적으로 최선을 다하자.'
WHERE name = '이은정';

