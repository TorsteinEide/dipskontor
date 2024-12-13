SELECT event_id as EventId, user_id AS UserId, signup_time as SignUpTime FROM attendences WHERE event_id = :eventId;
