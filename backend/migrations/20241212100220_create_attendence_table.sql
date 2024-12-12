-- Add migration script here

CREATE TABLE attendences(event_id bigint NOT NULL REFERENCES events(id), user_id bigint NOT NULL REFERENCES users(id), signup_time TIMESTAMPTZ NOT NULL, PRIMARY KEY(event_id, user_id))

