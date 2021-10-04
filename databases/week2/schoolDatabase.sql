-- Part 2: School database

-- Create class: with the columns: id, name, begins (date), ends (date)
CREATE TABLE class (
    `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
    `name` VARCHAR (255) NOT NULL,
    `begins` DATETIME NOT NULL,
    `ends` DATETIME NOT NULL,
    PRIMARY KEY (`id`),
  );

  -- Create student: with the columns: id, name, email, phone, class_id (foreign key)
CREATE TABLE `student` (
    `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
    `name` VARCHAR (255) NOT NULL,
    `email` VARCHAR (255) NOT NULL,
    `phone` VARCHAR (20) NOT NULL,
    CONSTRAINT `fk_class` FOREIGN KEY (`class_id`) REFERENCES `class` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;

-- Create an index on the name column of the student table
    CREATE UNIQUE INDEX idx_name ON `student` (name);

-- Add a new column to the class table named status which can only have the following values: not-started, ongoing, finished (hint: enumerations).
    ALTER TABLE
      class
    ADD
      status ENUM('not-started', 'ongoing', 'finished');