-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema MMOCCD
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema MMOCCD
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `MMOCCD` DEFAULT CHARACTER SET utf8 ;
USE `MMOCCD` ;

-- -----------------------------------------------------
-- Table `MMOCCD`.`Customer`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `MMOCCD`.`Customer` ;

CREATE TABLE IF NOT EXISTS `MMOCCD`.`Customer` (
  `customerID` INT GENERATED ALWAYS AS (),
  `customerFname` VARCHAR(255) NOT NULL,
  `customerLname` VARCHAR(255) NOT NULL,
  `customerEmail` VARCHAR(255) NOT NULL,
  `customerPassword` VARCHAR(45) NOT NULL,
  `customerPhoneNumber` INT NOT NULL,
  PRIMARY KEY (`customerID`));


-- -----------------------------------------------------
-- Table `MMOCCD`.`Restaurant`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `MMOCCD`.`Restaurant` ;

CREATE TABLE IF NOT EXISTS `MMOCCD`.`Restaurant` (
  `restaurantID` INT GENERATED ALWAYS AS (),
  `restaurantName` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`restaurantID`));


-- -----------------------------------------------------
-- Table `MMOCCD`.`Table`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `MMOCCD`.`Table` ;

CREATE TABLE IF NOT EXISTS `MMOCCD`.`Table` (
  `tableID` INT GENERATED ALWAYS AS (),
  `tableSize` INT NOT NULL,
  `Restaurant_restaurantID` INT NOT NULL,
  PRIMARY KEY (`tableID`),
  INDEX `fk_Table_Restaurant1_idx` (`Restaurant_restaurantID` ASC) VISIBLE,
  CONSTRAINT `fk_Table_Restaurant1`
    FOREIGN KEY (`Restaurant_restaurantID`)
    REFERENCES `MMOCCD`.`Restaurant` (`restaurantID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);


-- -----------------------------------------------------
-- Table `MMOCCD`.`Booking`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `MMOCCD`.`Booking` ;

CREATE TABLE IF NOT EXISTS `MMOCCD`.`Booking` (
  `bookingID` INT GENERATED ALWAYS AS (),
  `bookingNoOfPatrons` INT NOT NULL,
  `bookingDate` DATE NOT NULL,
  `bookingTime` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `Customer_customerID` INT NOT NULL,
  `Table_tableID` INT NOT NULL,
  PRIMARY KEY (`bookingID`),
  INDEX `fk_Booking_Customer_idx` (`Customer_customerID` ASC) VISIBLE,
  INDEX `fk_Booking_Table1_idx` (`Table_tableID` ASC) VISIBLE,
  CONSTRAINT `fk_Booking_Customer`
    FOREIGN KEY (`Customer_customerID`)
    REFERENCES `MMOCCD`.`Customer` (`customerID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Booking_Table1`
    FOREIGN KEY (`Table_tableID`)
    REFERENCES `MMOCCD`.`Table` (`tableID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);


-- -----------------------------------------------------
-- Table `MMOCCD`.`Order`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `MMOCCD`.`Order` ;

CREATE TABLE IF NOT EXISTS `MMOCCD`.`Order` (
  `orderID` INT GENERATED ALWAYS AS (),
  `orderTotal` FLOAT NOT NULL,
  `orderDate` DATE NOT NULL,
  `orderTime` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `Customer_customerID` INT NOT NULL,
  `Restaurant_restaurantID` INT NOT NULL,
  PRIMARY KEY (`orderID`, `Customer_customerID`),
  INDEX `fk_Order_Customer1_idx` (`Customer_customerID` ASC) VISIBLE,
  INDEX `fk_Order_Restaurant1_idx` (`Restaurant_restaurantID` ASC) VISIBLE,
  CONSTRAINT `fk_Order_Customer1`
    FOREIGN KEY (`Customer_customerID`)
    REFERENCES `MMOCCD`.`Customer` (`customerID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Order_Restaurant1`
    FOREIGN KEY (`Restaurant_restaurantID`)
    REFERENCES `MMOCCD`.`Restaurant` (`restaurantID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);


-- -----------------------------------------------------
-- Table `MMOCCD`.`Staff Member`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `MMOCCD`.`Staff Member` ;

CREATE TABLE IF NOT EXISTS `MMOCCD`.`Staff Member` (
  `staffID` INT GENERATED ALWAYS AS (),
  `staffFname` VARCHAR(255) NOT NULL,
  `staffLname` VARCHAR(255) NOT NULL,
  `staffDOB` DATE NOT NULL,
  `staffPhoneNumber` INT NOT NULL,
  `staffPosition` VARCHAR(255) NOT NULL,
  `Restaurant_restaurantID` INT NOT NULL,
  PRIMARY KEY (`staffID`),
  INDEX `fk_Staff Member_Restaurant1_idx` (`Restaurant_restaurantID` ASC) VISIBLE,
  CONSTRAINT `fk_Staff Member_Restaurant1`
    FOREIGN KEY (`Restaurant_restaurantID`)
    REFERENCES `MMOCCD`.`Restaurant` (`restaurantID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);


-- -----------------------------------------------------
-- Table `MMOCCD`.`Invoice`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `MMOCCD`.`Invoice` ;

CREATE TABLE IF NOT EXISTS `MMOCCD`.`Invoice` (
  `invoiceID` INT GENERATED ALWAYS AS (),
  `invoiceDate` DATE NOT NULL,
  `invoiceTotal` FLOAT NOT NULL,
  `orderTime` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `Restaurant_restaurantID` INT NOT NULL,
  `Order_orderID` INT NOT NULL,
  `Order_Customer_customerID` INT NOT NULL,
  PRIMARY KEY (`invoiceID`),
  INDEX `fk_Invoice_Restaurant1_idx` (`Restaurant_restaurantID` ASC) VISIBLE,
  INDEX `fk_Invoice_Order1_idx` (`Order_orderID` ASC, `Order_Customer_customerID` ASC) VISIBLE,
  CONSTRAINT `fk_Invoice_Restaurant1`
    FOREIGN KEY (`Restaurant_restaurantID`)
    REFERENCES `MMOCCD`.`Restaurant` (`restaurantID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Invoice_Order1`
    FOREIGN KEY (`Order_orderID` , `Order_Customer_customerID`)
    REFERENCES `MMOCCD`.`Order` (`orderID` , `Customer_customerID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);


-- -----------------------------------------------------
-- Table `MMOCCD`.`Menu Type`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `MMOCCD`.`Menu Type` ;

CREATE TABLE IF NOT EXISTS `MMOCCD`.`Menu Type` (
  `menuTypeID` INT NOT NULL,
  `menuTypeName` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`menuTypeID`));


-- -----------------------------------------------------
-- Table `MMOCCD`.`Dish`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `MMOCCD`.`Dish` ;

CREATE TABLE IF NOT EXISTS `MMOCCD`.`Dish` (
  `dishID` INT GENERATED ALWAYS AS (),
  `dishName` VARCHAR(255) NOT NULL,
  `dishDescription` VARCHAR(255) NOT NULL,
  `dishPrice` FLOAT NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `Menu Type_menuTypeID` INT NOT NULL,
  PRIMARY KEY (`dishID`),
  INDEX `fk_Dish_Menu Type1_idx` (`Menu Type_menuTypeID` ASC) VISIBLE,
  CONSTRAINT `fk_Dish_Menu Type1`
    FOREIGN KEY (`Menu Type_menuTypeID`)
    REFERENCES `MMOCCD`.`Menu Type` (`menuTypeID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);


-- -----------------------------------------------------
-- Table `MMOCCD`.`Ordered Dish`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `MMOCCD`.`Ordered Dish` ;

CREATE TABLE IF NOT EXISTS `MMOCCD`.`Ordered Dish` (
  `orderedQuantity` INT NOT NULL,
  `Order_orderID` INT NOT NULL,
  `Order_Customer_customerID` INT NOT NULL,
  `Dish_dishID` INT NOT NULL,
  INDEX `fk_Ordered Dish_Order1_idx` (`Order_orderID` ASC, `Order_Customer_customerID` ASC) VISIBLE,
  INDEX `fk_Ordered Dish_Dish1_idx` (`Dish_dishID` ASC) VISIBLE,
  CONSTRAINT `fk_Ordered Dish_Order1`
    FOREIGN KEY (`Order_orderID` , `Order_Customer_customerID`)
    REFERENCES `MMOCCD`.`Order` (`orderID` , `Customer_customerID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Ordered Dish_Dish1`
    FOREIGN KEY (`Dish_dishID`)
    REFERENCES `MMOCCD`.`Dish` (`dishID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
