-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Czas generowania: 26 Mar 2023, 13:59
-- Wersja serwera: 10.4.27-MariaDB
-- Wersja PHP: 8.1.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Baza danych: `shoppinglist`
--

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `list`
--

CREATE TABLE `list` (
  `id` int(11) NOT NULL,
  `name` varchar(200) NOT NULL,
  `quantity` varchar(200) DEFAULT '1',
  `type` varchar(200) DEFAULT 'other',
  `mark` tinyint(1) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Zrzut danych tabeli `list`
--

INSERT INTO `list` (`id`, `name`, `quantity`, `type`, `mark`) VALUES
(3, 'idyk', '1', '1', 0),
(4, 'test', '1 kg', 'odziez', 0),
(5, 'test', '1 kg', 'odziez', 10),
(6, 'test', '1 kg', 'odziez', 127);

--
-- Indeksy dla zrzutów tabel
--

--
-- Indeksy dla tabeli `list`
--
ALTER TABLE `list`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT dla zrzuconych tabel
--

--
-- AUTO_INCREMENT dla tabeli `list`
--
ALTER TABLE `list`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
