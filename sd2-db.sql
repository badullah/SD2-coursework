-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: db
-- Generation Time: Jan 11, 2023 at 11:55 AM
-- Server version: 8.0.31
-- PHP Version: 8.0.19

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `sd2-db`
--

-- --------------------------------------------------------

--
-- Table structure for table `guest`
--

CREATE TABLE `guest` (
  `id` int NOT NULL,
  `name` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `guest`
--

INSERT INTO `guest` (`id`, `name`) VALUES
(1, 'Haseena'),
(2, 'Andrea'),
(3, 'Saad'),
(4, 'Lisa'),
(5, 'Kevin'),
(6, 'Julia'),
(7, 'Sammy'),
(8, 'Aisha'),
(9, 'David'),
(10, 'Kerrin'),
(11, 'Mary'),
(12, 'Kate'),
(13, 'Justin'),
(14, 'Jackie'),
(15, 'Carol'),
(16, 'Marina'),
(17, 'Noam'),
(18, 'Ruth');

-- --------------------------------------------------------

--
-- Table structure for table `guest_list`
--

CREATE TABLE `guest_list` (
  `id` int DEFAULT NULL,
  `list_id` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `guest_list`
--

INSERT INTO `guest_list` (`id`, `list_id`) VALUES
(1, 1),
(2, 3),
(3, 2),
(4, 1),
(5, 3),
(6, 1),
(7, 3),
(8, 3),
(9, 1),
(10, 1),
(11, 2),
(12, 2),
(13, 1),
(14, 1),
(15, 3),
(16, 3),
(17, 2),
(18, 1);

-- --------------------------------------------------------

--
-- Table structure for table `item`
--

CREATE TABLE `item` (
  `code` int NOT NULL,
  `item_name` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `item`
--

INSERT INTO `item` (`code`, `item_name`) VALUES
(1, 'dinner set'),
(2, 'coffeemaker'),
(3, 'blender'),
(4, 'saucepan'),
(5, 'kettle'),
(6, 'knife set'),
(7, 'cutlery'),
(8, 'wok'),
(9, 'Pressure Cooker'),
(10, 'Juicer'),
(11, 'Memory Book'),
(12, 'Travel Cot'),
(13, 'Changing Table'),
(14, 'Burp Cloth'),
(15, 'Rocking Chair'),
(16, 'Sound Machine'),
(17, 'Baby Monitor'),
(18, 'Baby Clothes'),
(19, 'Toys'),
(20, 'Blanket'),
(21, 'Book'),
(22, 'PS5'),
(23, 'Oculus Rift'),
(24, 'Doll'),
(25, 'Darth Vader Bust'),
(26, 'Lightsaber');

-- --------------------------------------------------------

--
-- Table structure for table `list`
--

CREATE TABLE `list` (
  `list_id` int NOT NULL,
  `name` varchar(50) NOT NULL,
  `type` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `list`
--

INSERT INTO `list` (`list_id`, `name`, `type`, `password`) VALUES
(1, 'Saad Birthday', 'birthday', 'password1'),
(2, 'Amy Wedding', 'wedding', 'password2'),
(3, 'Sarah Baby Shower', 'baby shower', 'password3');

-- --------------------------------------------------------

--
-- Table structure for table `list_item`
--

CREATE TABLE `list_item` (
  `id` int DEFAULT NULL,
  `list_id` int DEFAULT NULL,
  `code` int DEFAULT NULL,
  `status` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `list_item`
--

INSERT INTO `list_item` (`id`, `list_id`, `code`, `status`) VALUES
(1, 1, 22, NULL),
(2, 1, 23, NULL),
(3, 1, 24, NULL),
(4, 1, 25, NULL),
(5, 1, 26, NULL),
(6, 2, 1, NULL),
(7, 2, 2, NULL),
(8, 2, 3, NULL),
(9, 2, 4, NULL),
(10, 2, 5, NULL),
(11, 2, 6, NULL),
(12, 2, 7, NULL),
(13, 2, 8, NULL),
(14, 2, 9, NULL),
(15, 2, 10, NULL),
(16, 3, 12, NULL),
(17, 3, 13, NULL),
(18, 3, 14, NULL),
(19, 3, 15, NULL),
(20, 3, 16, NULL),
(21, 3, 17, NULL),
(22, 3, 18, NULL),
(23, 3, 19, NULL),
(24, 3, 20, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int NOT NULL,
  `name` varchar(50) NOT NULL,
  `email` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `name`, `email`) VALUES
(1, 'Saad', 'saad@email.com'),
(2, 'Julia', 'julia_eventplanner@email.com'),
(3, 'Sarah', 'sarah@email.com');

-- --------------------------------------------------------

--
-- Table structure for table `user_list`
--

CREATE TABLE `user_list` (
  `id` int DEFAULT NULL,
  `list_id` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `user_list`
--

INSERT INTO `user_list` (`id`, `list_id`) VALUES
(1, 1),
(2, 2),
(3, 3);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `guest`
--
ALTER TABLE `guest`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `item`
--
ALTER TABLE `item`
  ADD PRIMARY KEY (`code`);

--
-- Indexes for table `list`
--
ALTER TABLE `list`
  ADD PRIMARY KEY (`list_id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
