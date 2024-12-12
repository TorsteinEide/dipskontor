-- Add migration script here

CREATE TABLE users_ideas(user_id bigint REFERENCES users(id), idea_id bigint REFERENCES ideas(id), PRIMARY KEY(user_id, idea_id))
