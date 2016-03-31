USE easyums_customers;
DROP TABLE IF EXISTS `customers_info`;
CREATE TABLE IF NOT EXISTS `customers_info` (
  `id` INT(20) NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(32) NOT NULL UNIQUE,
  `password` VARCHAR(128),
  `email` VARCHAR(128) NOT NULL UNIQUE,
  `membership_type` INT(10),	
  `full_name` VARCHAR(128),
  `register_date` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY(`id`)
) ENGINE = InnoDB;