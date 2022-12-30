-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th12 30, 2022 lúc 02:56 PM
-- Phiên bản máy phục vụ: 10.4.27-MariaDB
-- Phiên bản PHP: 8.1.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `bc-refrigerator`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `facility`
--

CREATE TABLE `facility` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `address` varchar(255) DEFAULT NULL,
  `image_url` varchar(255) DEFAULT NULL,
  `type` varchar(255) NOT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_vietnamese_ci;

--
-- Đang đổ dữ liệu cho bảng `facility`
--

INSERT INTO `facility` (`id`, `name`, `address`, `image_url`, `type`, `created_at`, `updated_at`) VALUES
(1, 'Xưởng 1', 'Hà Nội', NULL, 'produce', '2022-12-29 23:31:14', '2022-12-29 23:31:14'),
(2, 'Xưởng 2', 'Nam Định', NULL, 'produce', '2022-12-29 23:31:14', '2022-12-29 23:31:14'),
(3, 'Đại lý 2', 'Hà Nội', NULL, 'distribute', '2022-12-29 23:32:22', '2022-12-29 23:32:22'),
(5, 'Trung tâm bảo hành 1', 'Hà Nội', NULL, 'guarantee', '2022-12-29 23:33:09', '2022-12-29 23:33:09'),
(6, 'Trung tâm bảo hành', 'TP Hồ Chí Minh', NULL, 'guarantee', '2022-12-29 23:33:09', '2022-12-29 23:33:09'),
(7, 'Ban Dieu Hanh', 'TP Hồ Chí Minh', NULL, 'admin', '2022-12-29 23:33:09', '2022-12-29 23:33:09');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `fail`
--

CREATE TABLE `fail` (
  `id` int(11) NOT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `product_id` int(11) DEFAULT NULL,
  `produce_id` int(11) DEFAULT NULL,
  `guarantee_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_vietnamese_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `insurance`
--

CREATE TABLE `insurance` (
  `id` int(11) NOT NULL,
  `product_code` varchar(255) NOT NULL,
  `insurance_date` datetime NOT NULL,
  `guarantee_id` int(11) NOT NULL,
  `distribute_id` int(11) NOT NULL,
  `produce_id` int(11) DEFAULT NULL,
  `error` varchar(255) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_vietnamese_ci;

--
-- Đang đổ dữ liệu cho bảng `insurance`
--

INSERT INTO `insurance` (`id`, `product_code`, `insurance_date`, `guarantee_id`, `distribute_id`, `produce_id`, `error`, `created_at`, `updated_at`) VALUES
(1, 'NR-BC360QKVN-002', '2022-12-30 08:02:02', 5, 3, NULL, 'test', '2022-12-30 09:23:25', '2022-12-30 09:23:25'),
(2, 'NR-BC360QKVN-001', '2022-12-30 08:02:02', 5, 3, NULL, 'test', '2022-12-30 09:27:11', '2022-12-30 09:27:11');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `order`
--

CREATE TABLE `order` (
  `id` int(11) NOT NULL,
  `product_code` varchar(255) NOT NULL,
  `distribute_id` int(11) NOT NULL,
  `order_date` datetime NOT NULL,
  `order_name` varchar(255) NOT NULL,
  `order_phone` varchar(255) DEFAULT NULL,
  `order_address` varchar(255) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_vietnamese_ci;

--
-- Đang đổ dữ liệu cho bảng `order`
--

INSERT INTO `order` (`id`, `product_code`, `distribute_id`, `order_date`, `order_name`, `order_phone`, `order_address`, `created_at`, `updated_at`) VALUES
(1, 'NR-BC360QKVN-001', 3, '2022-12-30 02:02:02', 'HoangP', '0123456789', NULL, '2022-12-30 09:11:47', '2022-12-30 09:11:47'),
(2, 'NR-BC360QKVN-002', 3, '2022-12-30 02:02:02', 'HoangP', '0123456789', NULL, '2022-12-30 09:15:05', '2022-12-30 09:15:05');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `product`
--

CREATE TABLE `product` (
  `id` int(11) NOT NULL,
  `code` varchar(255) NOT NULL,
  `product_line_model` varchar(255) NOT NULL,
  `produce_id` int(11) NOT NULL,
  `mfg` datetime DEFAULT NULL,
  `distribute_id` int(11) DEFAULT NULL,
  `distribute_date` datetime DEFAULT NULL,
  `status` varchar(255) NOT NULL DEFAULT '0',
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_vietnamese_ci;

--
-- Đang đổ dữ liệu cho bảng `product`
--

INSERT INTO `product` (`id`, `code`, `product_line_model`, `produce_id`, `mfg`, `distribute_id`, `distribute_date`, `status`, `created_at`, `updated_at`) VALUES
(1, 'NR-BC360QKVN-001', 'NR-BC360QKVN', 1, '2022-12-29 23:39:30', 3, '2022-12-29 20:32:06', 'sold', '2022-12-29 23:39:30', '2022-12-30 09:36:56'),
(2, 'NR-BC360QKVN-002', 'NR-BC360QKVN', 1, '2022-12-29 23:39:30', 3, '2022-12-29 20:32:06', 'sold', '2022-12-29 23:39:30', '2022-12-30 09:38:48'),
(3, 'NR-BC360QKVN-003', 'NR-BC360QKVN', 1, '2022-12-29 23:39:30', 3, '2022-12-29 20:32:06', 'instock', '2022-12-29 23:39:30', '2022-12-30 09:02:53');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `productline`
--

CREATE TABLE `productline` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `model` varchar(255) NOT NULL,
  `photo_url` varchar(255) DEFAULT NULL,
  `guarantee_period` tinyint(4) NOT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_vietnamese_ci;

--
-- Đang đổ dữ liệu cho bảng `productline`
--

INSERT INTO `productline` (`id`, `name`, `model`, `photo_url`, `guarantee_period`, `created_at`, `updated_at`) VALUES
(1, 'Tủ lạnh Panasonic Inverter 322 lít NR-BC360QKVN', 'NR-BC360QKVN', NULL, 6, '2022-12-29 23:34:17', NULL),
(2, 'Tủ lạnh Panasonic Inverter 417 lít NR-BX471GPKV', 'NR-BX471GPKV', NULL, 12, '2022-12-29 23:34:17', NULL),
(9, 'Tủ lạnh Panasonic Inverter 234 lít NR-TV261BPKV', 'NR-TV261BPKV', NULL, 6, '2022-12-29 23:37:11', NULL),
(10, 'Tủ lạnh Panasonic Inverter 550 lít NR-DZ601VGKV', 'NR-DZ601VGKV', NULL, 6, '2022-12-29 23:37:11', NULL);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `statistics`
--

CREATE TABLE `statistics` (
  `id` int(11) NOT NULL,
  `time` varchar(255) DEFAULT NULL,
  `warehouse` int(11) DEFAULT 0,
  `work` int(11) DEFAULT 0,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `facility_id` int(11) NOT NULL,
  `product_line_model` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_vietnamese_ci;

--
-- Đang đổ dữ liệu cho bảng `statistics`
--

INSERT INTO `statistics` (`id`, `time`, `warehouse`, `work`, `created_at`, `updated_at`, `facility_id`, `product_line_model`) VALUES
(1, '2022/01', 3, 3, '2022-01-29 23:42:29', NULL, 1, 'NR-BC360QKVN'),
(2, '2022/02', 9, 8, '2022-02-28 23:42:29', NULL, 1, 'NR-BC360QKVN'),
(3, '2022/03', 8, 9, '2022-03-29 23:42:29', NULL, 1, 'NR-BC360QKVN'),
(4, '2022/04', 3, 7, '2022-04-28 00:41:52', NULL, 1, 'NR-BC360QKVN'),
(5, '2022/05', 3, 10, '2022-05-29 23:42:29', NULL, 1, 'NR-BC360QKVN'),
(6, '2022/06', 11, 12, '2022-06-28 23:42:29', NULL, 1, 'NR-BC360QKVN'),
(7, '2022/07', 7, 9, '2022-07-29 23:42:29', NULL, 1, 'NR-BC360QKVN'),
(8, '2022/08', 9, 8, '2022-08-28 00:41:52', NULL, 1, 'NR-BC360QKVN'),
(9, '2022/09', 8, 9, '2022-09-29 23:42:29', NULL, 1, 'NR-BC360QKVN'),
(10, '2022/10', 20, 15, '2022-10-28 23:42:29', NULL, 1, 'NR-BC360QKVN'),
(11, '2022/11', 9, 20, '2022-11-29 23:42:29', NULL, 1, 'NR-BC360QKVN'),
(12, '2022/12', 5, 10, '2022-12-28 00:41:52', '2022-12-30 09:02:53', 1, 'NR-BC360QKVN'),
(13, '2022/12', 1, 2, '2022-12-30 09:02:02', '2022-12-30 09:15:05', 3, 'NR-BC360QKVN'),
(15, '2022/12', 0, 2, '2022-12-30 09:27:11', '2022-12-30 09:38:48', 5, 'NR-BC360QKVN');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `account` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `full_name` varchar(255) DEFAULT NULL,
  `email` varchar(255) NOT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `facility_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_vietnamese_ci;

--
-- Đang đổ dữ liệu cho bảng `user`
--

INSERT INTO `user` (`id`, `account`, `password`, `full_name`, `email`, `created_at`, `updated_at`, `facility_id`) VALUES
(1, 'bc000001', '$2a$10$KtmwoVT/YKcNAmrMZbZoOe.o6AKDNMoHb8UqDD.P9Vxln29kZqlKy', NULL, 'bc000001@gmail.com', NULL, NULL, 7),
(3, 'bc000003', '$2a$10$KtmwoVT/YKcNAmrMZbZoOe.o6AKDNMoHb8UqDD.P9Vxln29kZqlKy', NULL, 'bc000003@gmail.com', NULL, NULL, 1),
(4, 'BC000004', '$2b$10$WV1UVonLOOoWcOtngNp6zuNHz9UXEOhDv4iPORE.rgb5RFU2H8hla', NULL, 'bc000004@gmail.com', '2022-12-30 11:42:12', '2022-12-30 11:42:12', 1),
(5, 'BC000005', '$2b$10$GDCXBkgnY620cdzcFtMlceW2gx41s/YjNs9JwpCf9p8qyiawjMYuO', NULL, 'bc000005@gmail.com', '2022-12-30 13:41:59', '2022-12-30 13:41:59', 2);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `user_code`
--

CREATE TABLE `user_code` (
  `id` int(11) NOT NULL,
  `account` varchar(255) NOT NULL,
  `code` varchar(255) NOT NULL,
  `expires` datetime NOT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_vietnamese_ci;

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `facility`
--
ALTER TABLE `facility`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `fail`
--
ALTER TABLE `fail`
  ADD PRIMARY KEY (`id`),
  ADD KEY `product_id` (`product_id`),
  ADD KEY `produce_id` (`produce_id`),
  ADD KEY `guarantee_id` (`guarantee_id`);

--
-- Chỉ mục cho bảng `insurance`
--
ALTER TABLE `insurance`
  ADD PRIMARY KEY (`id`),
  ADD KEY `product_code` (`product_code`),
  ADD KEY `guarantee_id` (`guarantee_id`),
  ADD KEY `distribute_id` (`distribute_id`),
  ADD KEY `produce_id` (`produce_id`);

--
-- Chỉ mục cho bảng `order`
--
ALTER TABLE `order`
  ADD PRIMARY KEY (`id`),
  ADD KEY `product_code` (`product_code`),
  ADD KEY `distribute_id` (`distribute_id`);

--
-- Chỉ mục cho bảng `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `code` (`code`),
  ADD KEY `product_line_model` (`product_line_model`),
  ADD KEY `produce_id` (`produce_id`),
  ADD KEY `distribute_id` (`distribute_id`);

--
-- Chỉ mục cho bảng `productline`
--
ALTER TABLE `productline`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `model` (`model`);

--
-- Chỉ mục cho bảng `statistics`
--
ALTER TABLE `statistics`
  ADD PRIMARY KEY (`id`),
  ADD KEY `facility_id` (`facility_id`),
  ADD KEY `product_line_model` (`product_line_model`);

--
-- Chỉ mục cho bảng `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `account` (`account`),
  ADD UNIQUE KEY `email` (`email`),
  ADD KEY `facility_id` (`facility_id`);

--
-- Chỉ mục cho bảng `user_code`
--
ALTER TABLE `user_code`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `facility`
--
ALTER TABLE `facility`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT cho bảng `fail`
--
ALTER TABLE `fail`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `insurance`
--
ALTER TABLE `insurance`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT cho bảng `order`
--
ALTER TABLE `order`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT cho bảng `product`
--
ALTER TABLE `product`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT cho bảng `productline`
--
ALTER TABLE `productline`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT cho bảng `statistics`
--
ALTER TABLE `statistics`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT cho bảng `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT cho bảng `user_code`
--
ALTER TABLE `user_code`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- Các ràng buộc cho các bảng đã đổ
--

--
-- Các ràng buộc cho bảng `fail`
--
ALTER TABLE `fail`
  ADD CONSTRAINT `fail_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `product` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `fail_ibfk_2` FOREIGN KEY (`produce_id`) REFERENCES `facility` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `fail_ibfk_3` FOREIGN KEY (`guarantee_id`) REFERENCES `facility` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Các ràng buộc cho bảng `insurance`
--
ALTER TABLE `insurance`
  ADD CONSTRAINT `insurance_ibfk_1` FOREIGN KEY (`product_code`) REFERENCES `product` (`code`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `insurance_ibfk_2` FOREIGN KEY (`guarantee_id`) REFERENCES `facility` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `insurance_ibfk_3` FOREIGN KEY (`distribute_id`) REFERENCES `facility` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `insurance_ibfk_4` FOREIGN KEY (`produce_id`) REFERENCES `facility` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Các ràng buộc cho bảng `order`
--
ALTER TABLE `order`
  ADD CONSTRAINT `order_ibfk_1` FOREIGN KEY (`product_code`) REFERENCES `product` (`code`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `order_ibfk_2` FOREIGN KEY (`distribute_id`) REFERENCES `facility` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Các ràng buộc cho bảng `product`
--
ALTER TABLE `product`
  ADD CONSTRAINT `product_ibfk_1` FOREIGN KEY (`product_line_model`) REFERENCES `productline` (`model`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `product_ibfk_2` FOREIGN KEY (`produce_id`) REFERENCES `facility` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `product_ibfk_3` FOREIGN KEY (`distribute_id`) REFERENCES `facility` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Các ràng buộc cho bảng `statistics`
--
ALTER TABLE `statistics`
  ADD CONSTRAINT `statistics_ibfk_1` FOREIGN KEY (`facility_id`) REFERENCES `facility` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `statistics_ibfk_2` FOREIGN KEY (`product_line_model`) REFERENCES `productline` (`model`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Các ràng buộc cho bảng `user`
--
ALTER TABLE `user`
  ADD CONSTRAINT `user_ibfk_1` FOREIGN KEY (`facility_id`) REFERENCES `facility` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
