-- MySQL dump 10.13  Distrib 5.7.20, for osx10.13 (x86_64)
--
-- Host: localhost    Database: tylerscott_gallery
-- ------------------------------------------------------
-- Server version	5.7.20

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
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `albums`
--

LOCK TABLES `albums` WRITE;
/*!40000 ALTER TABLE `albums` DISABLE KEYS */;
INSERT INTO `albums` VALUES (1,'Stonewall Chicago','stonewall-chicago',27),(2,'Adriana & Chris','adriana-chris',174),(3,'Portraits','portraits',118),(5,'Christine & Greg','christine-greg',75),(6,'Commission','commission',88),(7,'Delta Chi','delta-chi',63),(8,'Andrew Wisnieff','andrew-wisnieff',136),(9,'Demitri Dedousis','demitri',128),(10,'Harry & Emily','harry-emily',230),(11,'Kathy & Seth','kathy-seth',53),(12,'Kevin & Mudge','kevin-mudge',71),(13,'Michelle & Mike','michelle-mike',248),(14,'Mikey & Lauren','mikey-lauren',280),(15,'Personal','personal',87),(16,'Travel','travel',6),(17,'Anna & Steve','anna-steve',196),(18,'Joseph Fagnilli','joseph-fagnilli',297);
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
) ENGINE=InnoDB AUTO_INCREMENT=300 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `photos`
--

LOCK TABLES `photos` WRITE;
/*!40000 ALTER TABLE `photos` DISABLE KEYS */;
INSERT INTO `photos` VALUES ('01.jpg','2016-01-01 00:00:00',16,4),('02.jpg','2016-02-02 00:00:00',16,5),('03.jpg','2016-03-03 00:00:00',16,6),('04.jpg','2016-04-04 00:00:00',16,7),('05.jpg','2016-05-05 00:00:00',16,8),('06.jpg','2012-01-01 00:00:00',16,9),('07.jpg','2012-02-02 00:00:00',16,10),('08.jpg','2012-03-03 00:00:00',16,11),('09.jpg','2012-04-04 00:00:00',16,12),('10.jpg','2016-09-09 00:00:00',16,13),('11.jpg','2012-05-05 00:00:00',16,14),('12.jpg','2012-06-06 00:00:00',16,15),('13.jpg','2012-07-07 00:00:00',16,16),('14.jpg','2012-08-08 00:00:00',16,17),('15.jpg','2012-09-09 00:00:00',16,18),('16.jpg','2012-10-10 00:00:00',16,19),('17.jpg','2012-11-11 00:00:00',16,20),('18.jpg','2013-01-01 00:00:00',16,21),('19.jpg','2016-07-07 00:00:00',16,22),('20.jpg','2016-06-06 00:00:00',16,23),('21.jpg','2016-08-08 00:00:00',16,24),('lipsync-1.png','2018-06-04 00:00:00',1,25),('lipsync-2.png','2018-06-04 00:00:00',1,26),('lipsync-3.png','2018-06-04 00:00:00',1,27),('01.jpg','2014-01-01 00:00:00',11,51),('02.jpg','2014-02-02 00:00:00',11,52),('03.jpg','2014-03-03 00:00:00',11,53),('04.jpg','2014-04-04 00:00:00',11,54),('05.jpg','2014-05-05 00:00:00',11,55),('06.jpg','2014-06-06 00:00:00',11,56),('01.jpg','2014-01-01 00:00:00',7,57),('02.jpg','2014-02-02 00:00:00',7,58),('03.jpg','2014-03-03 00:00:00',7,59),('04.jpg','2014-04-04 00:00:00',7,60),('05.jpg','2014-05-05 00:00:00',7,61),('06.jpg','2014-06-06 00:00:00',7,62),('07.jpg','2014-07-07 00:00:00',7,63),('08.jpg','2014-08-08 00:00:00',7,64),('09.jpg','2014-09-09 00:00:00',7,65),('01.jpg','2014-01-01 00:00:00',12,71),('02.jpg','2014-02-02 00:00:00',12,72),('01.jpg','2014-01-01 00:00:00',5,73),('02.jpg','2014-02-02 00:00:00',5,74),('01.jpg','2013-01-01 00:00:00',5,75),('05.jpg','2013-01-01 00:00:00',15,78),('02.jpg','2013-02-02 00:00:00',15,79),('06.jpg','2013-03-03 00:00:00',15,80),('07.jpg','2013-04-04 00:00:00',15,81),('04.jpg','2013-05-05 00:00:00',15,82),('08.jpg','2013-06-06 00:00:00',15,83),('09.jpg','2013-07-07 00:00:00',15,84),('01.jpg','2013-08-08 00:00:00',15,85),('03.jpg','2013-09-09 00:00:00',15,86),('crystal-01.jpg','2011-01-01 00:00:00',15,87),('jessica-01.jpg','2017-09-25 00:00:00',6,88),('01.jpg','2013-01-01 00:00:00',6,89),('02.jpg','2013-02-02 00:00:00',6,90),('03.jpg','2013-03-03 00:00:00',6,91),('04.jpg','2013-04-04 00:00:00',6,92),('05.jpg','2013-05-05 00:00:00',6,93),('06.jpg','2013-06-06 00:00:00',6,94),('sigma-pi-mu-01.jpg','2011-01-01 00:00:00',6,95),('dylan-01.jpg','2013-01-01 00:00:00',6,96),('dylan-02.jpg','2013-02-02 00:00:00',6,97),('jessica-02.jpg','2015-01-01 00:00:00',3,98),('christina-01.jpg','2017-09-10 00:00:00',3,99),('christina-02.jpg','2017-09-10 00:01:00',3,100),('katie-02.jpg','2014-01-01 00:00:00',3,101),('katie-01.jpg','2014-02-02 00:00:00',3,102),('anastasia-01.jpg','2014-01-01 00:00:00',3,103),('anastasia-02.jpg','2014-02-02 00:00:00',3,104),('yenny-01.jpg','2014-01-01 00:00:00',3,105),('yenny-02.jpg','2014-02-02 00:00:00',3,106),('yenny-03.jpg','2014-03-03 00:00:00',3,107),('yoanna-01.jpg','2014-01-01 00:00:00',3,108),('calvin-01.jpg','2013-01-01 00:00:00',3,111),('calvin-02.jpg','2013-02-02 00:00:00',3,112),('calvin-03.jpg','2013-03-03 00:00:00',3,113),('calvin-04.jpg','2012-01-01 00:00:00',3,114),('calvin-05.jpg','2012-02-02 00:00:00',3,115),('jasminique-01.jpg','2013-01-01 00:00:00',3,116),('jasminique-02.jpg','2013-02-02 00:00:00',3,117),('abby-01.jpg','2012-01-01 00:00:00',3,118),('abby-02.jpg','2012-02-02 00:00:00',3,119),('chelsea-01.jpg','2012-01-01 00:00:00',3,120),('joy-01.jpg','2012-01-01 00:00:00',3,121),('joy-02.jpg','2012-02-02 00:00:00',3,122),('marissa-01.jpg','2011-01-01 00:00:00',3,123),('crystal-01.jpg','2010-01-01 00:00:00',3,124),('IMG_3383_web-min.png','2017-12-03 02:00:00',9,127),('IMG_3472_web-min.png','2017-12-03 02:00:00',9,128),('IMG_3628_web-min.png','2017-12-03 02:00:00',9,129),('IMG_3385_web-min.png','2017-12-03 02:00:00',9,130),('IMG_3502-2_web-min.png','2017-12-03 02:00:00',9,131),('IMG_3645_web-min.png','2017-12-03 02:00:00',9,132),('IMG_3426_web-min.png','2017-12-03 02:00:00',9,133),('IMG_3548_web-min.png','2017-12-03 02:00:00',9,134),('IMG_3669_web-min.png','2017-12-03 02:00:00',9,135),('IMG_2733_low_1920-min.png','2017-10-28 00:00:00',8,136),('IMG_2873_low_1920-min.png','2017-10-28 00:00:00',8,137),('IMG_3018_low_1080-min.png','2017-10-28 00:00:00',8,138),('IMG_2853_low_1920-min.png','2017-10-28 00:00:00',8,139),('IMG_2879_low_1920-min.png','2017-10-28 00:00:00',8,140),('01.jpg','2017-09-16 00:01:00',2,162),('13_high-min.png','2017-09-16 00:01:00',2,163),('edit_12_low-min.png','2017-09-16 00:01:00',2,164),('02.jpg','2017-09-16 00:01:00',2,166),('14_high-min.png','2017-09-16 00:01:00',2,167),('edit_13_low-min.png','2017-09-16 00:01:00',2,168),('edit_28_now-min.png','2017-09-16 00:01:00',2,169),('03.jpg','2017-09-16 00:01:00',2,170),('17_low-min.png','2017-09-16 00:01:00',2,171),('edit_14_low-min.png','2017-09-16 00:01:00',2,172),('edit_29_low-min.png','2017-09-16 00:01:00',2,173),('04.jpg','2017-09-16 00:01:00',2,174),('22_low-min.png','2017-09-16 00:01:00',2,175),('edit_18_low-min.png','2017-09-16 00:01:00',2,176),('edit_31_low-min.png','2017-09-16 00:01:00',2,177),('05.jpg','2017-09-16 00:01:00',2,178),('edit_04_low-min.png','2017-09-16 00:01:00',2,179),('edit_19_low-min.png','2017-09-16 00:01:00',2,180),('edit_33_low-min.png','2017-09-16 00:01:00',2,181),('06.jpg','2017-09-16 00:01:00',2,182),('edit_05_low-min.png','2017-09-16 00:01:00',2,183),('edit_20_low-min.png','2017-09-16 00:01:00',2,184),('edit_34_low-min.png','2017-09-16 00:01:00',2,185),('07.jpg','2017-09-16 00:01:00',2,186),('edit_07_low-min.png','2017-09-16 00:01:00',2,187),('edit_22_low-min.png','2017-09-16 00:01:00',2,188),('edit_39_low-min.png','2017-09-16 00:01:00',2,189),('12_high-min.png','2017-09-16 00:01:00',2,190),('edit_11_low-min.png','2017-09-16 00:01:00',2,191),('edit_24_low-min.png','2017-09-16 00:01:00',2,192),('01.jpg','2013-02-02 00:00:00',17,193),('IMG_9379-min.jpg','2013-02-02 00:00:00',17,194),('02.jpg','2013-02-02 00:00:00',17,195),('IMG_9383-min.jpg','2013-02-02 00:00:00',17,196),('03.jpg','2013-02-02 00:00:00',17,197),('IMG_9390-min.jpg','2013-02-02 00:00:00',17,198),('74060_515301321859029_1255166573_n-min.jpg','2013-02-02 00:00:00',17,199),('IMG_9396-min.jpg','2013-02-02 00:00:00',17,200),('IMG_9188-min.jpg','2013-02-02 00:00:00',17,201),('IMG_9397-min.jpg','2013-02-02 00:00:00',17,202),('IMG_9198-min.jpg','2013-02-02 00:00:00',17,203),('IMG_9737-min.jpg','2013-02-02 00:00:00',17,204),('IMG_9200-min.jpg','2013-02-02 00:00:00',17,205),('IMG_9746-min.jpg','2013-02-02 00:00:00',17,206),('IMG_9202-min.jpg','2013-02-02 00:00:00',17,207),('IMG_9763-min.jpg','2013-02-02 00:00:00',17,208),('IMG_9211-min.jpg','2013-02-02 00:00:00',17,209),('IMG_9837-min.jpg','2013-02-02 00:00:00',17,210),('IMG_9212-min.jpg','2013-02-02 00:00:00',17,211),('IMG_9839-min.jpg','2013-02-02 00:00:00',17,212),('IMG_9241-min.jpg','2013-02-02 00:00:00',17,213),('IMG_9842-min.jpg','2013-02-02 00:00:00',17,214),('IMG_9246-min.jpg','2013-02-02 00:00:00',17,215),('IMG_9843-min.jpg','2013-02-02 00:00:00',17,216),('IMG_9256-min.jpg','2013-02-02 00:00:00',17,217),('IMG_9846-min.jpg','2013-02-02 00:00:00',17,218),('IMG_9262-min.jpg','2013-02-02 00:00:00',17,219),('IMG_9849-min.jpg','2013-02-02 00:00:00',17,220),('IMG_9289-min.jpg','2013-02-02 00:00:00',17,221),('IMG_9855-min.jpg','2013-02-02 00:00:00',17,222),('IMG_9303-min.jpg','2013-02-02 00:00:00',17,223),('IMG_9856-min.jpg','2013-02-02 00:00:00',17,224),('IMG_9357-min.jpg','2013-02-02 00:00:00',17,225),('IMG_9858-min.jpg','2013-02-02 00:00:00',17,226),('IMG_9369-min.jpg','2013-02-02 00:00:00',17,227),('IMG_9860-min.jpg','2013-02-02 00:00:00',17,228),('IMG_0076_web-min.png','2017-08-27 00:00:00',10,229),('IMG_0214_low_res-min.png','2017-08-27 00:00:00',10,230),('IMG_3373_1920-min.png','2017-11-19 00:00:00',10,231),('IMG_0110_low_res-min.png','2017-08-27 00:00:00',10,232),('IMG_3178_1920-min.png','2017-11-19 00:00:00',10,233),('IMG_0152_low_res-min.png','2017-08-27 00:00:00',10,234),('IMG_3280_1920-min.png','2017-11-19 00:00:00',10,235),('0001-min.jpg','2014-01-01 00:00:00',13,236),('MichelleMike_0104-min.jpg','2014-01-01 00:00:00',13,237),('MichelleMike_0594-min.jpg','2014-01-01 00:00:00',13,238),('0002-min.jpg','2014-01-01 00:00:00',13,239),('MichelleMike_0178-min.jpg','2014-01-01 00:00:00',13,240),('MichelleMike_0628-2-min.jpg','2014-01-01 00:00:00',13,241),('01.jpg','2014-01-01 00:00:00',13,242),('MichelleMike_0197-min.jpg','2014-01-01 00:00:00',13,243),('MichelleMike_0660-min.jpg','2014-01-01 00:00:00',13,244),('02.jpg','2014-01-01 00:00:00',13,245),('MichelleMike_0227-min.jpg','2014-01-01 00:00:00',13,246),('MichelleMike_0766-min.jpg','2014-01-01 00:00:00',13,247),('03.jpg','2014-01-01 00:00:00',13,248),('MichelleMike_0237-min.jpg','2014-01-01 00:00:00',13,249),('MichelleMike_0771-min.jpg','2014-01-01 00:00:00',13,250),('04.jpg','2014-01-01 00:00:00',13,251),('MichelleMike_0243-2-min.jpg','2014-01-01 00:00:00',13,252),('MichelleMike_0781-min.jpg','2014-01-01 00:00:00',13,253),('05.jpg','2014-01-01 00:00:00',13,254),('MichelleMike_0286-min.jpg','2014-01-01 00:00:00',13,255),('MichelleMike_0920-min.jpg','2014-01-01 00:00:00',13,256),('06-min.jpg','2014-01-01 00:00:00',13,257),('MichelleMike_0298-min.jpg','2014-01-01 00:00:00',13,258),('MichelleMike_1040-min.jpg','2014-01-01 00:00:00',13,259),('09-min.jpg','2014-01-01 00:00:00',13,260),('MichelleMike_0383-min.jpg','2014-01-01 00:00:00',13,261),('MichelleMike_1274-min.jpg','2014-01-01 00:00:00',13,262),('MichelleMike_0014-min.jpg','2014-01-01 00:00:00',13,263),('MichelleMike_0500-min.jpg','2014-01-01 00:00:00',13,264),('MichelleMike_1436-min.jpg','2014-01-01 00:00:00',13,265),('MichelleMike_0095-min.jpg','2014-01-01 00:00:00',13,266),('MichelleMike_0526-min.jpg','2014-01-01 00:00:00',13,267),('mickey_lauren_0292_low-min.png','2017-10-07 00:00:00',14,277),('mickey_lauren_1095_low-min.png','2017-10-07 00:00:00',14,278),('mickey_lauren_0379_low-min.png','2017-10-07 00:00:00',14,279),('mickey_lauren_1095_wide_low-min.png','2017-10-07 00:00:00',14,280),('mickey_lauren_0567_low-min.png','2017-10-07 00:00:00',14,281),('mickey_lauren_1209_low-min.png','2017-10-07 00:00:00',14,282),('mickey_lauren_0635_low-min.png','2017-10-07 00:00:00',14,283),('mickey_lauren_1316_low-min.png','2017-10-07 00:00:00',14,284),('mickey_lauren_0668_low-min.png','2017-10-07 00:00:00',14,285),('mickey_lauren_1324_low-min.png','2017-10-07 00:00:00',14,286),('mickey_lauren_0676_low-min.png','2017-10-07 00:00:00',14,287),('mickey_lauren_1379_low-min.png','2017-10-07 00:00:00',14,288),('mickey_lauren_0751_low-min.png','2017-10-07 00:00:00',14,289),('mickey_lauren_1388_low-min.png','2017-10-07 00:00:00',14,290),('mickey_lauren_0795_low-min.png','2017-10-07 00:00:00',14,291),('mickey_lauren_1398_low-min.png','2017-10-07 00:00:00',14,292),('mickey_lauren_1011_low-min.png','2017-10-07 00:00:00',14,293),('mickey_lauren_1416_low-min.png','2017-10-07 00:00:00',14,294),('mickey_lauren_1052_low-min.png','2017-10-07 00:00:00',14,295),('mickey_lauren_low-min.png','2017-10-07 00:00:00',14,296),('joey-01.jpg','2013-11-03 00:00:00',18,297),('joey-02.jpg','2013-11-03 00:00:00',18,298),('joey-03.png','2018-07-12 00:00:00',18,299);
/*!40000 ALTER TABLE `photos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `username` varchar(30) NOT NULL,
  `password` varchar(64) NOT NULL,
  `emailAddress` varchar(50) DEFAULT NULL,
  `accessLevel` int(2) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'tsw38','$2a$10$Dlk6lBPtgrUoHw.Svk1MO.u7UrpxQNni4cOvpXEi5AL44UHtFi9Nq','tyler.scott.14@gmail.com',1);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-07-16  8:45:25
