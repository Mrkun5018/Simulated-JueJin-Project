CREATE DATABASE IF NOT EXISTS `juejie`; 
USE `juejie`;
CREATE TABLE IF NOT EXISTS article (
    `id` INT PRIMARY KEY AUTO_INCREMENT,
    `author` VARCHAR(255),
    `releasetime` DATETIME,
    `give` INT,
    `collect` INT,
    `content` TEXT,
    `title` VARCHAR(255),
    `catalogue` TEXT
)
Create table if not exists user (
    `id` INT PRIMARY KEY AUTO_INCREMENT,
    `account` VARCHAR(255),
    `password` VARCHAR(255),
    `nickname` VARCHAR(255),
    `antistop` VARCHAR(255),
    `profile` VARCHAR(255),
    `regtime` DATETIME
)

Create table if not exists keyword (
    `id` INT PRIMARY KEY AUTO_INCREMENT,
    `keyname` VARCHAR(255)
)