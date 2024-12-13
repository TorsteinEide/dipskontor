-- Add migration script here

alter table event_types add primary key (id);

alter table events add column event_type_id bigint references event_types(id)
