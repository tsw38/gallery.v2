-- MySQL dump 10.13  Distrib 5.7.22, for Linux (x86_64)
--
-- Host: localhost    Database: tylerscott_gallery
-- ------------------------------------------------------
-- Server version	5.7.22-0ubuntu0.17.10.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `albums`
--

DROP TABLE IF EXISTS `albums`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `albums` (
  `id` int(100) unsigned NOT NULL AUTO_INCREMENT,
  `albumName` varchar(100) DEFAULT NULL,
  `url` varchar(100) DEFAULT NULL,
  `thumbnailID` int(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `albums`
--

LOCK TABLES `albums` WRITE;
/*!40000 ALTER TABLE `albums` DISABLE KEYS */;
INSERT INTO `albums` VALUES (1,'Stonewall Chicago','stonewall-chicago',27),(2,'Adriana & Chris','adriana-chris',31),(3,'Portraits','portraits',99),(5,'Christine & Greg','christine-greg',75),(6,'Commission','commission',88),(7,'Delta Chi','delta-chi',63),(8,'Andrew Wisnieff','andrew',29),(9,'Demitri Dedousis','demitri',2),(10,'Harry & Emily','harry-emily',39),(11,'Kathy & Seth','kathy-seth',53),(12,'Kevin & Mudge','kevin-mudge',71),(13,'Michelle & Mike','michelle-mike',70),(14,'Mikey & Lauren','mikey-lauren',45),(15,'Personal','personal',87),(16,'Travel','travel',6),(17,'Anna & Steve','anna-steve',76);
/*!40000 ALTER TABLE `albums` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `photos`
--

DROP TABLE IF EXISTS `photos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `photos` (
  `photoName` varchar(100) NOT NULL,
  `timestamp` datetime NOT NULL,
  `albumID` int(100) NOT NULL,
  `photoID` int(100) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`photoID`)
) ENGINE=InnoDB AUTO_INCREMENT=126 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `photos`
--

LOCK TABLES `photos` WRITE;
/*!40000 ALTER TABLE `photos` DISABLE KEYS */;
INSERT INTO `photos` VALUES ('01-min.jpg','2017-12-03 00:00:00',9,1),('IMG_3385_web-min.jpg','2017-12-03 01:00:00',9,2),('03-min.jpg','2017-12-03 02:00:00',9,3),('01.jpg','2016-01-01 00:00:00',16,4),('02.jpg','2016-02-02 00:00:00',16,5),('03.jpg','2016-03-03 00:00:00',16,6),('04.jpg','2016-04-04 00:00:00',16,7),('05.jpg','2016-05-05 00:00:00',16,8),('06.jpg','2012-01-01 00:00:00',16,9),('07.jpg','2012-02-02 00:00:00',16,10),('08.jpg','2012-03-03 00:00:00',16,11),('09.jpg','2012-04-04 00:00:00',16,12),('10.jpg','2016-09-09 00:00:00',16,13),('11.jpg','2012-05-05 00:00:00',16,14),('12.jpg','2012-06-06 00:00:00',16,15),('13.jpg','2012-07-07 00:00:00',16,16),('14.jpg','2012-08-08 00:00:00',16,17),('15.jpg','2012-09-09 00:00:00',16,18),('16.jpg','2012-10-10 00:00:00',16,19),('17.jpg','2012-11-11 00:00:00',16,20),('18.jpg','2013-01-01 00:00:00',16,21),('19.jpg','2016-07-07 00:00:00',16,22),('20.jpg','2016-06-06 00:00:00',16,23),('21.jpg','2016-08-08 00:00:00',16,24),('lipsync-1.png','2018-06-04 00:00:00',1,25),('lipsync-2.png','2018-06-04 00:00:00',1,26),('lipsync-3.png','2018-06-04 00:00:00',1,27),('01.jpg','2017-10-28 00:00:00',8,28),('02.jpg','2017-10-28 00:01:00',8,29),('03.jpg','2017-10-28 00:02:00',8,30),('01.jpg','2017-09-16 00:01:00',2,31),('02.jpg','2017-09-16 00:02:00',2,32),('03.jpg','2017-09-16 00:03:00',2,33),('04.jpg','2017-09-16 00:04:00',2,34),('05.jpg','2017-09-16 00:05:00',2,35),('06.jpg','2017-09-16 00:06:00',2,36),('07.jpg','2017-09-16 00:07:00',2,37),('IMG_3178_1920-min.jpg','2017-11-19 00:00:00',10,38),('IMG_3373_1920-min.jpg','2017-11-19 00:01:00',10,39),('02.jpg','2017-08-27 00:00:00',10,40),('03.jpg','2017-08-27 00:01:00',10,41),('01.jpg','2017-10-07 00:00:00',14,42),('02.jpg','2017-10-07 00:01:00',14,43),('03.jpg','2017-10-07 00:02:00',14,44),('04.jpg','2017-10-07 00:03:00',14,45),('05.jpg','2017-10-07 00:04:00',14,46),('06.jpg','2017-10-07 00:05:00',14,47),('07.jpg','2017-10-07 00:06:00',14,48),('08.jpg','2017-10-07 00:07:00',14,49),('09.jpg','2017-10-07 00:08:00',14,50),('01.jpg','2014-01-01 00:00:00',11,51),('02.jpg','2014-02-02 00:00:00',11,52),('03.jpg','2014-03-03 00:00:00',11,53),('04.jpg','2014-04-04 00:00:00',11,54),('05.jpg','2014-05-05 00:00:00',11,55),('06.jpg','2014-06-06 00:00:00',11,56),('01.jpg','2014-01-01 00:00:00',7,57),('02.jpg','2014-02-02 00:00:00',7,58),('03.jpg','2014-03-03 00:00:00',7,59),('04.jpg','2014-04-04 00:00:00',7,60),('05.jpg','2014-05-05 00:00:00',7,61),('06.jpg','2014-06-06 00:00:00',7,62),('07.jpg','2014-07-07 00:00:00',7,63),('08.jpg','2014-08-08 00:00:00',7,64),('09.jpg','2014-09-09 00:00:00',7,65),('01.jpg','2014-01-01 00:00:00',13,66),('02.jpg','2014-02-02 00:00:00',13,67),('03.jpg','2014-03-03 00:00:00',13,68),('04.jpg','2014-04-04 00:00:00',13,69),('05.jpg','2014-05-05 00:00:00',13,70),('01.jpg','2014-01-01 00:00:00',12,71),('02.jpg','2014-02-02 00:00:00',12,72),('01.jpg','2014-01-01 00:00:00',5,73),('02.jpg','2014-02-02 00:00:00',5,74),('01.jpg','2013-01-01 00:00:00',5,75),('02.jpg','2013-02-02 00:00:00',17,76),('03.jpg','2013-03-03 00:00:00',17,77),('05.jpg','2013-01-01 00:00:00',15,78),('02.jpg','2013-02-02 00:00:00',15,79),('06.jpg','2013-03-03 00:00:00',15,80),('07.jpg','2013-04-04 00:00:00',15,81),('04.jpg','2013-05-05 00:00:00',15,82),('08.jpg','2013-06-06 00:00:00',15,83),('09.jpg','2013-07-07 00:00:00',15,84),('01.jpg','2013-08-08 00:00:00',15,85),('03.jpg','2013-09-09 00:00:00',15,86),('crystal-01.jpg','2011-01-01 00:00:00',15,87),('jessica-01.jpg','2017-09-25 00:00:00',6,88),('01.jpg','2013-01-01 00:00:00',6,89),('02.jpg','2013-02-02 00:00:00',6,90),('03.jpg','2013-03-03 00:00:00',6,91),('04.jpg','2013-04-04 00:00:00',6,92),('05.jpg','2013-05-05 00:00:00',6,93),('06.jpg','2013-06-06 00:00:00',6,94),('sigma-pi-mu-01.jpg','2011-01-01 00:00:00',6,95),('dylan-01.jpg','2013-01-01 00:00:00',6,96),('dylan-02.jpg','2013-02-02 00:00:00',6,97),('jessica-02.jpg','2015-01-01 00:00:00',3,98),('christina-01.jpg','2017-09-10 00:00:00',3,99),('christina-02.jpg','2017-09-10 00:01:00',3,100),('katie-02.jpg','2014-01-01 00:00:00',3,101),('katie-01.jpg','2014-02-02 00:00:00',3,102),('anastasia-01.jpg','2014-01-01 00:00:00',3,103),('anastasia-02.jpg','2014-02-02 00:00:00',3,104),('yenny-01.jpg','2014-01-01 00:00:00',3,105),('yenny-02.jpg','2014-02-02 00:00:00',3,106),('yenny-03.jpg','2014-03-03 00:00:00',3,107),('yoanna-01.jpg','2014-01-01 00:00:00',3,108),('joey-01.jpg','2013-01-01 00:00:00',3,109),('joey-02.jpg','2013-02-02 00:00:00',3,110),('calvin-01.jpg','2013-01-01 00:00:00',3,111),('calvin-02.jpg','2013-02-02 00:00:00',3,112),('calvin-03.jpg','2013-03-03 00:00:00',3,113),('calvin-04.jpg','2012-01-01 00:00:00',3,114),('calvin-05.jpg','2012-02-02 00:00:00',3,115),('jasminique-01.jpg','2013-01-01 00:00:00',3,116),('jasminique-02.jpg','2013-02-02 00:00:00',3,117),('abby-01.jpg','2012-01-01 00:00:00',3,118),('abby-02.jpg','2012-02-02 00:00:00',3,119),('chelsea-01.jpg','2012-01-01 00:00:00',3,120),('joy-01.jpg','2012-01-01 00:00:00',3,121),('joy-02.jpg','2012-02-02 00:00:00',3,122),('marissa-01.jpg','2011-01-01 00:00:00',3,123),('crystal-01.jpg','2010-01-01 00:00:00',3,124),('01.jpg','2013-02-02 00:00:00',17,125);
/*!40000 ALTER TABLE `photos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `photostream`
--

DROP TABLE IF EXISTS `photostream`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `photostream` (
  `url` varchar(100) DEFAULT NULL,
  `timestamp` datetime DEFAULT NULL,
  `album` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `photostream`
--

LOCK TABLES `photostream` WRITE;
/*!40000 ALTER TABLE `photostream` DISABLE KEYS */;
INSERT INTO `photostream` VALUES ('01-min.jpg','2017-12-03 00:00:00','demitri'),('IMG_3385_web-min.jpg','2017-12-03 01:00:00','demitri'),('03-min.jpg','2017-12-03 02:00:00','demitri'),('IMG_3178_1920-min.jpg','2017-11-19 00:00:00','harry-emily'),('IMG_3373_1920-min.jpg','2017-11-19 00:01:00','harry-emily'),('01.jpg','2017-10-28 00:00:00','andrew'),('02.jpg','2017-10-28 00:01:00','andrew'),('03.jpg','2017-10-28 00:02:00','andrew'),('01.jpg','2017-09-25 00:00:00','jessica'),('01.jpg','2017-09-16 00:01:00','adriana-chris'),('02.jpg','2017-09-16 00:02:00','adriana-chris'),('03.jpg','2017-09-16 00:03:00','adriana-chris'),('04.jpg','2017-09-16 00:04:00','adriana-chris'),('05.jpg','2017-09-16 00:05:00','adriana-chris'),('06.jpg','2017-09-16 00:06:00','adriana-chris'),('07.jpg','2017-09-16 00:07:00','adriana-chris'),('01.jpg','2017-09-10 00:00:00','christina'),('02.jpg','2017-09-10 00:01:00','christina'),('02.jpg','2017-08-27 00:00:00','harry-emily'),('03.jpg','2017-08-27 00:01:00','harry-emily'),('01.jpg','2017-10-07 00:00:00','mikey-lauren'),('02.jpg','2017-10-07 00:01:00','mikey-lauren'),('03.jpg','2017-10-07 00:02:00','mikey-lauren'),('04.jpg','2017-10-07 00:03:00','mikey-lauren'),('05.jpg','2017-10-07 00:04:00','mikey-lauren'),('06.jpg','2017-10-07 00:05:00','mikey-lauren'),('07.jpg','2017-10-07 00:06:00','mikey-lauren'),('08.jpg','2017-10-07 00:07:00','mikey-lauren'),('09.jpg','2017-10-07 00:08:00','mikey-lauren'),('01.jpg','2016-01-01 00:00:00','travel'),('02.jpg','2016-02-02 00:00:00','travel'),('03.jpg','2016-03-03 00:00:00','travel'),('04.jpg','2016-04-04 00:00:00','travel'),('05.jpg','2016-05-05 00:00:00','travel'),('20.jpg','2016-06-06 00:00:00','travel'),('19.jpg','2016-07-07 00:00:00','travel'),('21.jpg','2016-08-08 00:00:00','travel'),('10.jpg','2016-09-09 00:00:00','travel'),('02.jpg','2015-01-01 00:00:00','jessica'),('01.jpg','2014-01-01 00:00:00','kathy-seth'),('02.jpg','2014-02-02 00:00:00','kathy-seth'),('03.jpg','2014-03-03 00:00:00','kathy-seth'),('04.jpg','2014-04-04 00:00:00','kathy-seth'),('05.jpg','2014-05-05 00:00:00','kathy-seth'),('06.jpg','2014-06-06 00:00:00','kathy-seth'),('01.jpg','2014-01-01 00:00:00','delta-chi'),('02.jpg','2014-02-02 00:00:00','delta-chi'),('03.jpg','2014-03-03 00:00:00','delta-chi'),('04.jpg','2014-04-04 00:00:00','delta-chi'),('05.jpg','2014-05-05 00:00:00','delta-chi'),('06.jpg','2014-06-06 00:00:00','delta-chi'),('07.jpg','2014-07-07 00:00:00','delta-chi'),('08.jpg','2014-08-08 00:00:00','delta-chi'),('09.jpg','2014-09-09 00:00:00','delta-chi'),('03.jpg','2014-01-01 00:00:00','katie'),('01.jpg','2014-02-02 00:00:00','katie'),('01.jpg','2014-01-01 00:00:00','anastasia'),('02.jpg','2014-02-02 00:00:00','anastasia'),('01.jpg','2014-01-01 00:00:00','yenny'),('02.jpg','2014-02-02 00:00:00','yenny'),('03.jpg','2014-03-03 00:00:00','yenny'),('01.jpg','2014-01-01 00:00:00','yoanna'),('01.jpg','2014-01-01 00:00:00','michelle-mike'),('02.jpg','2014-02-02 00:00:00','michelle-mike'),('03.jpg','2014-03-03 00:00:00','michelle-mike'),('04.jpg','2014-04-04 00:00:00','michelle-mike'),('05.jpg','2014-05-05 00:00:00','michelle-mike'),('01.jpg','2014-01-01 00:00:00','kevin-mudge'),('02.jpg','2014-02-02 00:00:00','kevin-mudge'),('01.jpg','2014-01-01 00:00:00','christine-greg'),('02.jpg','2014-02-02 00:00:00','christine-greg'),('01.jpg','2013-01-01 00:00:00','joey'),('02.jpg','2013-02-02 00:00:00','joey'),('01.jpg','2013-01-01 00:00:00','dylan'),('02.jpg','2013-02-02 00:00:00','dylan'),('05.jpg','2013-01-01 00:00:00','personal'),('02.jpg','2013-02-02 00:00:00','personal'),('06.jpg','2013-03-03 00:00:00','personal'),('07.jpg','2013-04-04 00:00:00','personal'),('04.jpg','2013-05-05 00:00:00','personal'),('08.jpg','2013-06-06 00:00:00','personal'),('09.jpg','2013-07-07 00:00:00','personal'),('01.jpg','2013-08-08 00:00:00','personal'),('03.jpg','2013-09-09 00:00:00','personal'),('18.jpg','2013-01-01 00:00:00','travel'),('01.jpg','2013-01-01 00:00:00','commission'),('02.jpg','2013-02-02 00:00:00','commission'),('03.jpg','2013-03-03 00:00:00','commission'),('04.jpg','2013-04-04 00:00:00','commission'),('05.jpg','2013-05-05 00:00:00','commission'),('06.jpg','2013-06-06 00:00:00','commission'),('01.jpg','2013-01-01 00:00:00','anna-steve'),('02.jpg','2013-02-02 00:00:00','anna-steve'),('03.jpg','2013-03-03 00:00:00','anna-steve'),('01.jpg','2013-01-01 00:00:00','jasminique'),('02.jpg','2013-02-02 00:00:00','jasminique'),('01.jpg','2013-01-01 00:00:00','calvin'),('02.jpg','2013-02-02 00:00:00','calvin'),('03.jpg','2013-03-03 00:00:00','calvin'),('06.jpg','2012-01-01 00:00:00','travel'),('07.jpg','2012-02-02 00:00:00','travel'),('08.jpg','2012-03-03 00:00:00','travel'),('09.jpg','2012-04-04 00:00:00','travel'),('11.jpg','2012-05-05 00:00:00','travel'),('12.jpg','2012-06-06 00:00:00','travel'),('13.jpg','2012-07-07 00:00:00','travel'),('14.jpg','2012-08-08 00:00:00','travel'),('15.jpg','2012-09-09 00:00:00','travel'),('16.jpg','2012-10-10 00:00:00','travel'),('17.jpg','2012-11-11 00:00:00','travel'),('01.jpg','2012-01-01 00:00:00','abby'),('02.jpg','2012-02-02 00:00:00','abby'),('01.jpg','2012-01-01 00:00:00','chelsea'),('01.jpg','2012-01-01 00:00:00','joy'),('02.jpg','2012-02-02 00:00:00','joy'),('04.jpg','2012-01-01 00:00:00','calvin'),('05.jpg','2012-02-02 00:00:00','calvin'),('05.jpg','2011-01-01 00:00:00','marissa'),('01.jpg','2011-01-01 00:00:00','crystal'),('01.jpg','2011-01-01 00:00:00','sigma-pi-mu'),('02.jpg','2010-01-01 00:00:00','crystal'),('lipsync-1.png','2018-06-04 00:00:00','stonewall-chicago'),('lipsync-2.png','2018-06-04 00:00:00','stonewall-chicago'),('lipsync-3.png','2018-06-04 00:00:00','stonewall-chicago');
/*!40000 ALTER TABLE `photostream` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-07-08 19:35:09
