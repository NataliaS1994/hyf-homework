-- Part 1: Working with tasks

-- Add a task with these attributes: title, description, created, updated, due_date, status_id, user_id
INSERT INTO task (title, description, created, updated, due_date, status_id, user_id)
values ( "Databases", "learning  complex entity relationship diagrams", "2021-10-01", "2021-10-04", "2021-10-20", 2, 4);

-- Change the title of a task
UPDATE task
SET title = "Entity relationship diagrams"
WHERE id= 37;

-- Change a task due date
UPDATE task
SET due_date = "2021-10-19"
WHERE id= 37;

-- Change a task status
UPDATE task
SET status_id = 1
WHERE id= 37;

-- Mark a task as complete
UPDATE task
SET status_id = 3
WHERE id= 37;

-- Delete a task
DELETE from task
WHERE id= 37; 