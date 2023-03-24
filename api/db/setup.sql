DROP TABLE IF EXISTS diary;

CREATE TABLE diary(
  id INT GENERATED ALWAYS AS IDENTITY,
  title VARCHAR(255) NOT NULL,
  content VARCHAR(500) NOT NULL,
  category VARCHAR(255) NOT NULL,
  date_created_at DATE DEFAULT CURRENT_DATE,
  time_created_at TIME DEFAULT CURRENT_TIME,
  PRIMARY KEY (id)
);

INSERT INTO diary (title, content, category)
VALUES
    ('What a day', 'Wow what a brand new diary i am typing into!', 'Personal'),
    ('What a day 2', 'Wow what a brand NEW NEW diary i am typing into!', 'Personal');


