-- mysql

IF EXISTS `achievement` DROP TABLE `achievement`;

CREATE TABLE `achievement` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `av_s` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `av_f` varchar(1000) COLLATE utf8_unicode_ci DEFAULT NULL,
  `score` int(11) DEFAULT NULL,
  `total` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

