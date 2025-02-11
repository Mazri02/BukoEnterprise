-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               8.0.30 - MySQL Community Server - GPL
-- Server OS:                    Win64
-- HeidiSQL Version:             12.1.0.6537
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Dumping database structure for bukoenterprise
USE `sql12762117`;

-- Dumping structure for table bukoenterprise.cache
CREATE TABLE IF NOT EXISTS `cache` (
  `key` varchar(191)  NOT NULL,
  `value` mediumtext  NOT NULL,
  `expiration` int NOT NULL,
  PRIMARY KEY (`key`)
) ;

-- Dumping data for table bukoenterprise.cache: ~0 rows (approximately)

-- Dumping structure for table bukoenterprise.cache_locks
CREATE TABLE IF NOT EXISTS `cache_locks` (
  `key` varchar(191)  NOT NULL,
  `owner` varchar(191)  NOT NULL,
  `expiration` int NOT NULL,
  PRIMARY KEY (`key`)
) ;

-- Dumping data for table bukoenterprise.cache_locks: ~0 rows (approximately)

-- Dumping structure for table bukoenterprise.customer
CREATE TABLE IF NOT EXISTS `customer` (
  `CustomerID` int NOT NULL,
  `CustomerPhone` varchar(50) DEFAULT NULL,
  `CustomerEmail` varchar(50) DEFAULT NULL,
  `CustomerAddress1` varchar(50) DEFAULT NULL,
  `CustomerAddress2` varchar(50) DEFAULT NULL,
  `CustomerPostcode` int DEFAULT NULL,
  `CustomerCity` varchar(50) DEFAULT NULL,
  `CustomerPayment` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`CustomerID`)
);

-- Dumping data for table bukoenterprise.customer: ~30 rows (approximately)
REPLACE INTO `customer` (`CustomerID`, `CustomerPhone`, `CustomerEmail`, `CustomerAddress1`, `CustomerAddress2`, `CustomerPostcode`, `CustomerCity`, `CustomerPayment`) VALUES
	(1000, '0108332560', 'azri.mokhzani@gmail.com', 'No. 101 Jalan Petaling, Selangor', NULL, 68200, 'Batu Enam', 'Card'),
	(1001, '0112233445', 'john.doe@example.com', 'No. 202 Jalan Ampang, Kuala Lumpur', NULL, 50000, 'Ampang', 'Cash'),
	(1002, '0123344556', 'jane.smith@example.com', 'No. 303 Jalan Damansara, Selangor', NULL, 60000, 'Damansara', 'Online Banking'),
	(1003, '0134455667', 'michael.brown@example.com', 'No. 404 Jalan Cheras, Kuala Lumpur', NULL, 56000, 'Cheras', 'Card'),
	(1004, '0145566778', 'linda.white@example.com', 'No. 505 Jalan Klang Lama, Selangor', NULL, 58000, 'Klang Lama', 'Cash'),
	(1005, '0156677889', 'james.green@example.com', 'No. 606 Jalan Tun Razak, Kuala Lumpur', NULL, 50400, 'Tun Razak', 'Online Banking'),
	(1006, '0167788990', 'patricia.adams@example.com', 'No. 707 Jalan Kuchai Lama, Selangor', NULL, 58200, 'Kuchai Lama', 'Card'),
	(1007, '0178899001', 'robert.jones@example.com', 'No. 808 Jalan Sri Hartamas, Kuala Lumpur', NULL, 50480, 'Sri Hartamas', 'Cash'),
	(1008, '0189900112', 'susan.miller@example.com', 'No. 909 Jalan Bukit Bintang, Kuala Lumpur', NULL, 55100, 'Bukit Bintang', 'Online Banking'),
	(1009, '0190011223', 'william.wilson@example.com', 'No. 1010 Jalan Pudu, Kuala Lumpur', NULL, 55100, 'Pudu', 'Card'),
	(1010, '0101122334', 'elizabeth.moore@example.com', 'No. 1111 Jalan Pantai Baru, Kuala Lumpur', NULL, 59200, 'Pantai Baru', 'Cash'),
	(1011, '0112233445', 'charles.taylor@example.com', 'No. 1212 Jalan Damai, Kuala Lumpur', NULL, 55000, 'Damai', 'Online Banking'),
	(1012, '0123344556', 'margaret.anderson@example.com', 'No. 1313 Jalan Raja Laut, Kuala Lumpur', NULL, 50350, 'Raja Laut', 'Card'),
	(1013, '0134455667', 'george.thomas@example.com', 'No. 1414 Jalan Raja Chulan, Kuala Lumpur', NULL, 50200, 'Raja Chulan', 'Cash'),
	(1014, '0145566778', 'dorothy.jackson@example.com', 'No. 1515 Jalan Travers, Kuala Lumpur', NULL, 50470, 'Travers', 'Online Banking'),
	(1015, '0156677889', 'richard.harris@example.com', 'No. 1616 Jalan Keramat, Kuala Lumpur', NULL, 54100, 'Keramat', 'Card'),
	(1016, '0167788990', 'barbara.martin@example.com', 'No. 1717 Jalan Ampang, Kuala Lumpur', NULL, 50450, 'Ampang', 'Cash'),
	(1017, '0178899001', 'joseph.clark@example.com', 'No. 1818 Jalan Kepong, Kuala Lumpur', NULL, 52000, 'Kepong', 'Online Banking'),
	(1018, '0189900112', 'susan.rodriguez@example.com', 'No. 1919 Jalan Taman Seputeh, Kuala Lumpur', NULL, 58000, 'Taman Seputeh', 'Card'),
	(1019, '0190011223', 'michael.lewis@example.com', 'No. 2020 Jalan Loke Yew, Kuala Lumpur', NULL, 55200, 'Loke Yew', 'Cash'),
	(1020, '0102345678', 'peter.walker@example.com', 'No. 2121 Jalan Pahang, Kuala Lumpur', NULL, 53000, 'Pahang', 'Online Banking'),
	(1021, '0113456789', 'nancy.lee@example.com', 'No. 2222 Jalan Sultan Ismail, Kuala Lumpur', NULL, 50250, 'Sultan Ismail', 'Card'),
	(1022, '0124567890', 'frank.hill@example.com', 'No. 2323 Jalan Bukit Jalil, Kuala Lumpur', NULL, 57000, 'Bukit Jalil', 'Cash'),
	(1023, '0135678901', 'deborah.allen@example.com', 'No. 2424 Jalan Mid Valley, Kuala Lumpur', NULL, 59200, 'Mid Valley', 'Online Banking'),
	(1024, '0146789012', 'harry.young@example.com', 'No. 2525 Jalan Putra, Kuala Lumpur', NULL, 50350, 'Putra', 'Card'),
	(1025, '0157890123', 'betty.king@example.com', 'No. 2626 Jalan Titiwangsa, Kuala Lumpur', NULL, 53300, 'Titiwangsa', 'Cash'),
	(1026, '0168901234', 'chris.wright@example.com', 'No. 2727 Jalan Duta, Kuala Lumpur', NULL, 50480, 'Duta', 'Online Banking'),
	(1027, '0179012345', 'carol.scott@example.com', 'No. 2828 Jalan Hartamas, Kuala Lumpur', NULL, 50480, 'Hartamas', 'Card'),
	(1028, '0180123456', 'brian.torres@example.com', 'No. 2929 Jalan Sentul, Kuala Lumpur', NULL, 51000, 'Sentul', 'Cash'),
	(1029, '0191234567', 'alice.campbell@example.com', 'No. 3030 Jalan Cheras, Kuala Lumpur', NULL, 56100, 'Cheras', 'Online Banking');

-- Dumping structure for table bukoenterprise.failed_jobs
CREATE TABLE IF NOT EXISTS `failed_jobs` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `uuid` varchar(191)  NOT NULL,
  `connection` text  NOT NULL,
  `queue` text  NOT NULL,
  `payload` longtext  NOT NULL,
  `exception` longtext  NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`)
) ;

-- Dumping data for table bukoenterprise.failed_jobs: ~0 rows (approximately)

-- Dumping structure for table bukoenterprise.feedback
CREATE TABLE IF NOT EXISTS `feedback` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `first_name` varchar(50) DEFAULT NULL,
  `last_name` varchar(50) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `message` varchar(50) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- Dumping data for table bukoenterprise.feedback: ~0 rows (approximately)

-- Dumping structure for table bukoenterprise.jobs
CREATE TABLE IF NOT EXISTS `jobs` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `queue` varchar(191)  NOT NULL,
  `payload` longtext  NOT NULL,
  `attempts` tinyint unsigned NOT NULL,
  `reserved_at` int unsigned DEFAULT NULL,
  `available_at` int unsigned NOT NULL,
  `created_at` int unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `jobs_queue_index` (`queue`)
) ;

-- Dumping data for table bukoenterprise.jobs: ~0 rows (approximately)

-- Dumping structure for table bukoenterprise.job_batches
CREATE TABLE IF NOT EXISTS `job_batches` (
  `id` varchar(191)  NOT NULL,
  `name` varchar(191)  NOT NULL,
  `total_jobs` int NOT NULL,
  `pending_jobs` int NOT NULL,
  `failed_jobs` int NOT NULL,
  `failed_job_ids` longtext  NOT NULL,
  `options` mediumtext ,
  `cancelled_at` int DEFAULT NULL,
  `created_at` int NOT NULL,
  `finished_at` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ;

-- Dumping data for table bukoenterprise.job_batches: ~0 rows (approximately)

-- Dumping structure for table bukoenterprise.migrations
CREATE TABLE IF NOT EXISTS `migrations` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `migration` varchar(191)  NOT NULL,
  `batch` int NOT NULL,
  PRIMARY KEY (`id`)
);

-- Dumping data for table bukoenterprise.migrations: ~0 rows (approximately)
REPLACE INTO `migrations` (`id`, `migration`, `batch`) VALUES
	(1, '0001_01_01_000000_create_users_table', 1),
	(2, '0001_01_01_000001_create_cache_table', 1),
	(3, '0001_01_01_000002_create_jobs_table', 1);

-- Dumping structure for table bukoenterprise.products
CREATE TABLE IF NOT EXISTS `products` (
  `ProductID` int NOT NULL AUTO_INCREMENT,
  `ProductImage` varchar(50) DEFAULT NULL,
  `ProductName` varchar(50) DEFAULT NULL,
  `ProductCategory` varchar(50) DEFAULT NULL,
  `ProductPrice` float DEFAULT NULL,
  `ProductIngredient` varchar(50) DEFAULT NULL,
  `ProductStock` int DEFAULT NULL,
  PRIMARY KEY (`ProductID`)
);

-- Dumping data for table bukoenterprise.products: ~52 rows (approximately)
REPLACE INTO `products` (`ProductID`, `ProductImage`, `ProductName`, `ProductCategory`, `ProductPrice`, `ProductIngredient`, `ProductStock`) VALUES
	(2000, 'https://picsum.photos/200/300', 'Buko Pandan', 'Buko', 6, 'Tepung Gandum, Susu Cair, Gula, Kacang', 150),
	(2001, 'https://picsum.photos/200/300', 'Chocolate Cake', 'Cakes', 8, 'Tepung Gandum, Susu, Coklat, Gula', 120),
	(2002, 'https://picsum.photos/200/300', 'Banana Chips', 'Snack', 5, 'Pisang, Minyak, Garam, Gula', 200),
	(2003, 'https://picsum.photos/200/300', 'Fruit Salad', 'Salad', 7, 'Buah Campuran, Susu, Gula, Madu', 90),
	(2004, 'https://picsum.photos/200/300', 'Buko Laici', 'Buko', 6, 'Tepung Gandum, Susu Cair, Gula, Lychee', 140),
	(2005, 'https://picsum.photos/200/300', 'Red Velvet Cake', 'Cakes', 9, 'Tepung Gandum, Susu, Pewarna, Gula', 110),
	(2006, 'https://picsum.photos/200/300', 'Potato Chips', 'Snack', 5, 'Kentang, Minyak, Garam, Paprika', 220),
	(2007, 'https://picsum.photos/200/300', 'Green Salad', 'Salad', 7, 'Selada, Timun, Tomat, Wortel', 80),
	(2008, 'https://picsum.photos/200/300', 'Buko Ube', 'Buko', 6, 'Tepung Gandum, Susu Cair, Gula, Ube', 130),
	(2009, 'https://picsum.photos/200/300', 'Cheese Cake', 'Cakes', 10, 'Tepung Gandum, Susu, Keju, Gula', 100),
	(2010, 'https://picsum.photos/200/300', 'Popcorn', 'Snack', 5, 'Jagung, Minyak, Garam, Mentega', 210),
	(2011, 'https://picsum.photos/200/300', 'Chicken Salad', 'Salad', 8, 'Ayam, Selada, Tomat, Saus', 70),
	(2012, 'https://picsum.photos/200/300', 'Buko Gula Melaka', 'Buko', 6, 'Tepung Gandum, Susu Cair, Gula Melaka, Kelapa', 160),
	(2013, 'https://picsum.photos/200/300', 'Mango Cake', 'Cakes', 8, 'Tepung Gandum, Susu, Mangga, Gula', 125),
	(2014, 'https://picsum.photos/200/300', 'Pretzels', 'Snack', 4, 'Tepung Gandum, Garam, Minyak, Gula', 230),
	(2015, 'https://picsum.photos/200/300', 'Caesar Salad', 'Salad', 8, 'Selada, Keju, Roti Panggang, Saus Caesar', 85),
	(2016, 'https://picsum.photos/200/300', 'Buko Chocolate', 'Buko', 6, 'Tepung Gandum, Susu Cair, Gula, Coklat', 170),
	(2017, 'https://picsum.photos/200/300', 'Tiramisu', 'Cakes', 9, 'Tepung Gandum, Kopi, Susu, Gula', 105),
	(2018, 'https://picsum.photos/200/300', 'Nuts Mix', 'Snack', 6, 'Kacang Campuran, Garam, Minyak, Gula', 190),
	(2019, 'https://picsum.photos/200/300', 'Pasta Salad', 'Salad', 7, 'Pasta, Selada, Tomat, Saus Italian', 95),
	(2020, 'https://picsum.photos/200/300', 'Buko Mango', 'Buko', 6, 'Tepung Gandum, Susu Cair, Gula, Mangga', 155),
	(2021, 'https://picsum.photos/200/300', 'Carrot Cake', 'Cakes', 8, 'Tepung Gandum, Wortel, Susu, Gula', 130),
	(2022, 'https://picsum.photos/200/300', 'Granola Bars', 'Snack', 5, 'Oat, Madu, Kacang, Gula', 200),
	(2023, 'https://picsum.photos/200/300', 'Seafood Salad', 'Salad', 9, 'Udang, Selada, Tomat, Saus', 75),
	(2024, 'https://picsum.photos/200/300', 'Buko Corn', 'Buko', 6, 'Tepung Gandum, Susu Cair, Gula, Jagung', 140),
	(2025, 'https://picsum.photos/200/300', 'Lemon Cake', 'Cakes', 8, 'Tepung Gandum, Lemon, Susu, Gula', 115),
	(2026, 'https://picsum.photos/200/300', 'Trail Mix', 'Snack', 5, 'Kacang, Buah Kering, Coklat, Gula', 210),
	(2027, 'https://picsum.photos/200/300', 'Quinoa Salad', 'Salad', 8, 'Quinoa, Selada, Tomat, Saus Mustard', 85),
	(2028, 'https://picsum.photos/200/300', 'Buko Melon', 'Buko', 6, 'Tepung Gandum, Susu Cair, Gula, Melon', 145),
	(2029, 'https://picsum.photos/200/300', 'Strawberry Cake', 'Cakes', 9, 'Tepung Gandum, Stroberi, Susu, Gula', 110),
	(2030, 'https://picsum.photos/200/300', 'Rice Crackers', 'Snack', 4, 'Beras, Garam, Minyak, Gula', 220),
	(2031, 'https://picsum.photos/200/300', 'Buko Taro', 'Buko', 6, 'Tepung Gandum, Susu Cair, Gula, Taro', 150),
	(2032, 'https://picsum.photos/200/300', 'Chocolate Muffin', 'Cakes', 8, 'Tepung Gandum, Coklat, Susu, Gula', 120),
	(2033, 'https://picsum.photos/200/300', 'Cassava Chips', 'Snack', 5, 'Singkong, Minyak, Garam, Cabai', 200),
	(2034, 'https://picsum.photos/200/300', 'Tropical Salad', 'Salad', 7, 'Buah Tropis, Selada, Susu, Madu', 90),
	(2035, 'https://picsum.photos/200/300', 'Buko Sweet Potato', 'Buko', 6, 'Tepung Gandum, Susu Cair, Gula, Ubi', 140),
	(2036, 'https://picsum.photos/200/300', 'Vanilla Cake', 'Cakes', 9, 'Tepung Gandum, Susu, Vanilla, Gula', 110),
	(2037, 'https://picsum.photos/200/300', 'Corn Chips', 'Snack', 5, 'Jagung, Minyak, Garam, Paprika', 220),
	(2038, 'https://picsum.photos/200/300', 'Greek Salad', 'Salad', 7, 'Selada, Timun, Tomat, Keju', 80),
	(2039, 'https://picsum.photos/200/300', 'Buko Strawberry', 'Buko', 6, 'Tepung Gandum, Susu Cair, Gula, Stroberi', 130),
	(2040, 'https://picsum.photos/200/300', 'Butter Cake', 'Cakes', 10, 'Tepung Gandum, Mentega, Susu, Gula', 100),
	(2041, 'https://picsum.photos/200/300', 'Tortilla Chips', 'Snack', 5, 'Tepung Jagung, Minyak, Garam, Cabai', 210),
	(2042, 'https://picsum.photos/200/300', 'Kale Salad', 'Salad', 8, 'Kale, Tomat, Keju, Saus', 70),
	(2043, 'https://picsum.photos/200/300', 'Buko Mango Sticky Rice', 'Buko', 6, 'Tepung Gandum, Susu Cair, Gula, Pulut', 160),
	(2044, 'https://picsum.photos/200/300', 'Coconut Cake', 'Cakes', 8, 'Tepung Gandum, Kelapa, Susu, Gula', 125),
	(2045, 'https://picsum.photos/200/300', 'Peanut Brittle', 'Snack', 4, 'Kacang, Gula, Garam, Mentega', 230),
	(2046, 'https://picsum.photos/200/300', 'Apple Salad', 'Salad', 8, 'Apel, Selada, Kacang, Madu', 85),
	(2047, 'https://picsum.photos/200/300', 'Buko Langka', 'Buko', 7, 'Tepung Gandum, Susu Cair, Gula, Nangka', 170),
	(2048, 'https://picsum.photos/200/300', 'Blueberry Cake', 'Cakes', 9, 'Tepung Gandum, Blueberry, Susu, Gula', 105),
	(2049, 'https://picsum.photos/200/300', 'Veggie Chips', 'Snack', 6, 'Sayuran, Minyak, Garam, Paprika', 190),
	(2050, 'https://picsum.photos/200/300', 'Avocado Salad', 'Salad', 7, 'Alpukat, Selada, Tomat, Saus', 95);

-- Dumping structure for table bukoenterprise.sessions
CREATE TABLE IF NOT EXISTS `sessions` (
  `id` varchar(191)  NOT NULL,
  `user_id` bigint unsigned DEFAULT NULL,
  `ip_address` varchar(45)  DEFAULT NULL,
  `user_agent` text ,
  `payload` longtext  NOT NULL,
  `last_activity` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `sessions_user_id_index` (`user_id`),
  KEY `sessions_last_activity_index` (`last_activity`)
) ;

-- Dumping data for table bukoenterprise.sessions: ~1 rows (approximately)
REPLACE INTO `sessions` (`id`, `user_id`, `ip_address`, `user_agent`, `payload`, `last_activity`) VALUES
	('jNJhGTabCxiYXYdfjaiiHTKMytGp58U8jR9J1XM2', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36', 'YTo0OntzOjY6Il90b2tlbiI7czo0MDoidTZYSkc1SmZPZ2ZMWFFRNUs2REhLZ3pHVUFIMEJFbkFUMndOTmVMZiI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MzI6Imh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9BZG1pblNhbGVzIjt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319czo1OiJ0b2tlbiI7aToxMDAwO30=', 1734712095);

-- Dumping structure for table bukoenterprise.stock
CREATE TABLE IF NOT EXISTS `stock` (
  `StockID` int NOT NULL AUTO_INCREMENT,
  `StockNumber` int DEFAULT NULL,
  `StockSupplier` varchar(50) DEFAULT NULL,
  `StockPrice` varchar(50) DEFAULT NULL,
  `StockItem` varchar(50) DEFAULT NULL,
  `StockDate` date DEFAULT NULL,
  PRIMARY KEY (`StockID`)
);

-- Dumping data for table bukoenterprise.stock: ~18 rows (approximately)
REPLACE INTO `stock` (`StockID`, `StockNumber`, `StockSupplier`, `StockPrice`, `StockItem`, `StockDate`) VALUES
	(3000, 150, 'Ah Hock Enterprise', 'RM16.0/pkt', 'Tepung Gandum', '2024-12-19'),
	(3001, 200, 'Meow Restock Berhad', 'RM 5.0/g', 'Susu Cair', '2024-12-18'),
	(3002, 300, 'Kedai Underground Klang', 'RM 7.5/kg', 'Gula', '2024-12-17'),
	(3003, 400, 'Abatu Warehouse', 'RM 2.5/ml', 'Minyak Masak', '2024-12-16'),
	(3004, 180, 'Ah Hock Enterprise', 'RM 4.0/pkt', 'Pewarna Makanan', '2024-12-15'),
	(3007, 450, 'Abatu Warehouse', 'RM 1.5/ml', 'Coklat Cair', '2024-12-12'),
	(3008, 170, 'Ah Hock Enterprise', 'RM 5.5/pkt', 'Buah Kering', '2024-12-11'),
	(3009, 260, 'Meow Restock Berhad', 'RM 2.0/g', 'Kacang Campuran', '2024-12-10'),
	(3010, 360, 'Kedai Underground Klang', 'RM 4.5/kg', 'Selada', '2024-12-09'),
	(3011, 470, 'Abatu Warehouse', 'RM 3.5/ml', 'Tomat', '2024-12-08'),
	(3012, 190, 'Ah Hock Enterprise', 'RM 6.0/pkt', 'Jagung Manis', '2024-12-07'),
	(3013, 270, 'Meow Restock Berhad', 'RM 4.0/g', 'Kacang Hijau', '2024-12-06'),
	(3014, 370, 'Kedai Underground Klang', 'RM 7.0/kg', 'Beras', '2024-12-05'),
	(3015, 480, 'Abatu Warehouse', 'RM 2.5/ml', 'Minyak Zaitun', '2024-12-04'),
	(3016, 160, 'Ah Hock Enterprise', 'RM 5.0/pkt', 'Mangga Kering', '2024-12-03'),
	(3017, 240, 'Meow Restock Berhad', 'RM 3.5/g', 'Kacang Almond', '2024-12-02'),
	(3018, 330, 'Kedai Underground Klang', 'RM 6.5/kg', 'Wortel', '2024-12-01'),
	(3019, 450, 'Abatu Warehouse', 'RM 4.5/ml', 'Saus Salad', '2024-11-30');

-- Dumping structure for table bukoenterprise.users
CREATE TABLE IF NOT EXISTS `users` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(191)  NOT NULL,
  `email` varchar(191)  NOT NULL,
  `password` varchar(191)  NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_email_unique` (`email`)
);

-- Dumping data for table bukoenterprise.users: ~0 rows (approximately)
REPLACE INTO `users` (`id`, `name`, `email`, `password`) VALUES
	(1000, 'admin', 'admin@buko.com', '240be518fabd2724ddb6f04eeb1da5967448d7e831c08c8fa822809f74c720a9');


-- Dumping structure for table bukoenterprise.order
CREATE TABLE IF NOT EXISTS `order` (
  `OrderID` int NOT NULL AUTO_INCREMENT,
  `ProductID` int DEFAULT NULL,
  `CustomerID` int NOT NULL,
  `OrderDate` date DEFAULT NULL,
  `OrderStatus` varchar(50) DEFAULT NULL,
  `OrderQuantity` int DEFAULT NULL,
  PRIMARY KEY (`OrderID`),
  KEY `CustomerID` (`CustomerID`),
  KEY `ProductID` (`ProductID`),
  CONSTRAINT `CustomerID` FOREIGN KEY (`CustomerID`) REFERENCES `customer` (`CustomerID`),
  CONSTRAINT `ProductID` FOREIGN KEY (`ProductID`) REFERENCES `products` (`ProductID`)
);

-- Dumping data for table bukoenterprise.order: ~71 rows (approximately)
REPLACE INTO `order` (`OrderID`, `ProductID`, `CustomerID`, `OrderDate`, `OrderStatus`, `OrderQuantity`) VALUES
	(4000, 2000, 1010, '2024-12-19', 'Pending', 2),
	(4001, 2001, 1001, '2024-12-20', 'Success', 3),
	(4002, 2002, 1002, '2024-12-21', 'Success', 2),
	(4003, 2003, 1003, '2024-12-22', 'Pending', 1),
	(4004, 2004, 1004, '2024-12-23', 'Success', 5),
	(4005, 2005, 1005, '2024-12-24', 'Failed', 7),
	(4006, 2006, 1006, '2024-12-25', 'Pending', 1),
	(4007, 2007, 1007, '2024-12-26', 'Success', 3),
	(4008, 2008, 1008, '2024-12-27', 'Failed', 7),
	(4009, 2009, 1009, '2024-12-28', 'Pending', 2),
	(4010, 2010, 1010, '2024-12-19', 'Pending', 4),
	(4011, 2011, 1011, '2024-12-30', 'Success', 7),
	(4012, 2012, 1012, '2024-12-31', 'Success', 2),
	(4013, 2013, 1013, '2025-01-01', 'Pending', 9),
	(4014, 2014, 1014, '2025-01-02', 'Failed', 2),
	(4015, 2015, 1015, '2025-01-03', 'Failed', 1),
	(4016, 2016, 1016, '2025-01-04', 'Pending', 4),
	(4017, 2017, 1017, '2025-01-05', 'Success', 5),
	(4018, 2018, 1018, '2025-01-06', 'Failed', 2),
	(4019, 2019, 1019, '2025-01-07', 'Pending', 3),
	(4020, 2020, 1020, '2025-01-08', 'Pending', 4),
	(4021, 2021, 1021, '2025-01-09', 'Success', 4),
	(4022, 2022, 1022, '2025-01-10', 'Failed', 1),
	(4023, 2023, 1023, '2025-01-11', 'Pending', 2),
	(4024, 2024, 1024, '2025-01-12', 'Success', 1),
	(4025, 2025, 1025, '2025-01-13', 'Failed', 7),
	(4026, 2026, 1026, '2025-01-14', 'Pending', 9),
	(4027, 2027, 1027, '2025-01-15', 'Success', 2),
	(4029, 2029, 1029, '2025-01-17', 'Pending', 2),
	(4030, 2030, 1000, '2025-01-18', 'Pending', 3),
	(4031, 2031, 1001, '2024-12-20', 'Success', 1),
	(4032, 2032, 1002, '2024-12-21', 'Success', 2),
	(4033, 2033, 1003, '2024-12-22', 'Pending', 3),
	(4034, 2034, 1004, '2024-12-23', 'Success', 4),
	(4035, 2035, 1005, '2024-12-24', 'Failed', 5),
	(4036, 2036, 1006, '2024-12-25', 'Pending', 6),
	(4037, 2037, 1007, '2024-12-26', 'Success', 1),
	(4038, 2038, 1008, '2024-12-27', 'Failed', 2),
	(4039, 2039, 1009, '2024-12-28', 'Pending', 3),
	(4040, 2040, 1010, '2024-12-19', 'Pending', 1),
	(4041, 2041, 1011, '2024-12-30', 'Success', 2),
	(4042, 2042, 1012, '2024-12-31', 'Success', 1),
	(4043, 2043, 1013, '2025-01-01', 'Pending', 2),
	(4044, 2044, 1014, '2025-01-02', 'Failed', 3),
	(4045, 2045, 1015, '2025-01-03', 'Failed', 4),
	(4046, 2046, 1016, '2025-01-04', 'Pending', 5),
	(4047, 2047, 1017, '2025-01-05', 'Success', 6),
	(4048, 2048, 1018, '2025-01-06', 'Failed', 2),
	(4049, 2049, 1019, '2025-01-07', 'Pending', 1),
	(4050, 2050, 1020, '2025-01-08', 'Pending', 3),
	(4051, 2000, 1021, '2025-01-09', 'Success', 4),
	(4052, 2001, 1022, '2025-01-10', 'Failed', 5),
	(4053, 2002, 1023, '2025-01-11', 'Pending', 6),
	(4054, 2003, 1024, '2025-01-12', 'Success', 4),
	(4055, 2004, 1025, '2025-01-13', 'Failed', 2),
	(4056, 2005, 1026, '2025-01-14', 'Pending', 1),
	(4057, 2006, 1027, '2025-01-15', 'Success', 3),
	(4059, 2008, 1029, '2025-01-17', 'Pending', 2),
	(4060, 2009, 1000, '2025-01-18', 'Pending', 1),
	(4061, 2010, 1001, '2024-12-20', 'Success', 1),
	(4062, 2011, 1002, '2024-12-21', 'Success', 2),
	(4063, 2012, 1003, '2024-12-22', 'Pending', 3),
	(4064, 2013, 1004, '2024-12-23', 'Success', 2),
	(4065, 2014, 1005, '2024-12-24', 'Failed', 1),
	(4066, 2015, 1006, '2024-12-25', 'Pending', 1),
	(4067, 2016, 1007, '2024-12-26', 'Success', 2),
	(4068, 2017, 1008, '2024-12-27', 'Failed', 2),
	(4069, 2018, 1009, '2024-12-28', 'Pending', 3),
	(4070, 2019, 1010, '2024-12-19', 'Pending', 3);

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
