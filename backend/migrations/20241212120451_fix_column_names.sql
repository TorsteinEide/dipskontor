-- Add migration script here

ALTER TABLE event_type RENAME COLUMN type_id TO id;

ALTER TABLE schedules RENAME COLUMN reoccuring_interval TO recurring_interval;


