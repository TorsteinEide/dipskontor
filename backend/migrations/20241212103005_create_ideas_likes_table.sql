-- Add migration script here

CREATE TABLE ideas_likes(user_id bigint REFERENCES users(id), idea_id bigint REFERENCES ideas(id), PRIMARY KEY(user_id, idea_id))
