SELECT i.id as ID, i.title as Title, i.description as Description, iu.id as UserId FROM ideas i NATURAL JOIN ideas_users iu;
