CREATE TABLE IF NOT EXISTS team_members (
    id INT PRIMARY KEY AUTO_INCREMENT,
    member_name VARCHAR(255),
    personal_site VARCHAR(255),
    bio TEXT,
    contact VARCHAR(255),
    current_project VARCHAR(255),
    img_url VARCHAR(255)
);