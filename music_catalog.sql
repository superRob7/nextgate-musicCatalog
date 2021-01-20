-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 20, 2021 at 07:06 PM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.4.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `music_catalog`
--

-- --------------------------------------------------------

--
-- Table structure for table `albums`
--

CREATE TABLE `albums` (
  `album_id` int(11) NOT NULL,
  `record_type` varchar(5) NOT NULL DEFAULT 'ALBUM',
  `singer` int(11) DEFAULT NULL,
  `album` varchar(30) NOT NULL,
  `year` year(4) NOT NULL,
  `company` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `albums`
--

INSERT INTO `albums` (`album_id`, `record_type`, `singer`, `album`, `year`, `company`) VALUES
(1, 'ALBUM', 3, 'MICK JAGGER', 1990, 'UNIVERSAL RECORDS'),
(2, 'ALBUM', 6, 'I WONDER ', 1978, 'MOTOWN RECORD CORP'),
(3, 'ALBUM', 9, 'MY HEART', 1997, 'EPIC RECORDS'),
(4, 'ALBUM', 4, 'IRREPALCE ', 2004, 'COLUMBIA RECORDS'),
(5, 'ALBUM', 7, 'A MAJOR ', 2001, 'MOTOWN RECORD CORP '),
(6, 'ALBUM', 6, 'STEPHEN  ', 1979, 'MOTOWN RECORD CORP'),
(7, 'ALBUM', 2, 'GOD BLESS ', 2007, 'CAPITOL RECORDS'),
(8, 'ALBUM', 7, 'B MAJOR ', 2002, 'COLUMBIA RECORDS'),
(10, 'ALBUM', 8, 'BLACK OR WHITE', 1998, 'INTERSCOPE RECORDS'),
(11, 'ALBUM', 6, 'WONDERFUL', 1984, 'EPIC RECORDS'),
(12, 'ALBUM', 10, 'WILSON', 2000, 'INTERSCOPE RECORDS'),
(13, 'ALBUM', 5, 'JIMMY', 1960, 'MOTOWN RECORD CORP'),
(14, 'ALBUM', 5, 'JAMES BROWN', 1970, 'MOTOWN RECORD CORP'),
(15, 'ALBUM', 2, 'U.S.A.', 2009, 'MOTOWN RECORD CORP'),
(16, 'ALBUM', 8, 'BEAT IT', 1982, 'MOTOWN RECORD CORP'),
(17, 'ALBUM', 10, 'WILDCATS ', 2011, 'MOTOWN RECORD CORP'),
(18, 'ALBUM', 3, 'DO IT LIKE', 1985, 'CAPITOL RECORDS'),
(19, 'ALBUM', 4, 'TO THE LEFT', 2010, 'CAPITOL RECORDS'),
(20, 'ALBUM', 1, 'I\'M BACK', 2005, 'COLUMBIA RECORDS'),
(21, 'ALBUM', 1, 'FIRST TIME', 1999, 'WARNER BROS. RECORDS'),
(22, 'ALBUM', 9, 'PRAYER', 1998, 'WARNER BROS. RECORDS'),
(23, 'ALBUM', 4, 'REPLACE', 2010, 'ATLANTIC RECORDS'),
(24, 'ALBUM', 7, 'C MAJOR', 2005, 'MOTOWN RECORD CORP'),
(25, 'ALBUM', 3, 'MICKIE ', 1989, 'EPIC RECORDS'),
(26, 'ALBUM', 5, 'BROWNIE', 1956, 'MOTOWN RECORD CORP'),
(27, 'ALBUM', 10, 'HIGH SCHOOL', 2002, 'ATLANTIC RECORDS'),
(28, 'ALBUM', 9, 'WILL GO ON ', 1998, 'UNIVERSAL RECORDS'),
(29, 'ALBUM', 2, 'AMERICA', 2005, 'COLUMBIA RECORDS');

-- --------------------------------------------------------

--
-- Table structure for table `singers`
--

CREATE TABLE `singers` (
  `singer_id` int(11) NOT NULL,
  `record_type` varchar(6) NOT NULL DEFAULT 'SINGER',
  `name` varchar(20) NOT NULL,
  `dob` date NOT NULL,
  `sex` varchar(6) NOT NULL,
  `company` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `singers`
--

INSERT INTO `singers` (`singer_id`, `record_type`, `name`, `dob`, `sex`, `company`) VALUES
(1, 'SINGER', 'BRITNEY SPEARS', '1981-12-15', 'FEMALE', 'COLUMBIA RECORDS'),
(2, 'SINGER', 'KATY PERRY', '1982-08-30', 'FEMALE', 'MOTOWN RECORD CORP'),
(3, 'SINGER', 'MICK JAGGER', '1940-09-18', 'MALE', 'UNIVERSAL RECORDS'),
(4, 'SINGER', 'BEYONCE KNOWLES', '1978-04-11', 'FEMALE', 'ATLANTIC RECORDS'),
(5, 'SINGER', 'JAMES BROWN', '1935-07-24', 'MALE', 'MOTOWN RECORD CORP'),
(6, 'SINGER', 'STEVIE WONDER', '1938-07-28', 'MALE', 'EPIC RECORDS'),
(7, 'SINGER', 'ALICIA KEYS', '1980-06-17', 'FEMALE', 'MOTOWN RECORD CORP'),
(8, 'SINGER', 'MICHAEL JACKSON', '1952-05-12', 'MALE', 'INTERSCOPE RECORDS'),
(9, 'SINGER', 'CELINE DION ', '1962-02-23', 'FEMALE', 'WARNER BROS. RECORDS'),
(10, 'SINGER', 'FERGIE', '1985-06-05', 'FEMALE', 'MOTOWN RECORD CORP');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `user_id` int(11) NOT NULL,
  `user_name` varchar(20) NOT NULL,
  `password` varchar(50) NOT NULL,
  `roles` varchar(10) NOT NULL DEFAULT 'ROLE_USER'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `albums`
--
ALTER TABLE `albums`
  ADD PRIMARY KEY (`album_id`),
  ADD KEY `SingersToAlum` (`singer`);

--
-- Indexes for table `singers`
--
ALTER TABLE `singers`
  ADD PRIMARY KEY (`singer_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `albums`
--
ALTER TABLE `albums`
  MODIFY `album_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;

--
-- AUTO_INCREMENT for table `singers`
--
ALTER TABLE `singers`
  MODIFY `singer_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `albums`
--
ALTER TABLE `albums`
  ADD CONSTRAINT `SingersToAlum` FOREIGN KEY (`singer`) REFERENCES `singers` (`singer_id`) ON DELETE SET NULL ON UPDATE SET NULL;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
