-- MariaDB dump 10.19  Distrib 10.5.12-MariaDB, for debian-linux-gnu (x86_64)
--
-- Host: 127.0.0.1    Database: unir_tarea_uno
-- ------------------------------------------------------
-- Server version	10.3.31-MariaDB-0+deb10u1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `empleados`
--

DROP TABLE IF EXISTS `empleados`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `empleados` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) COLLATE utf8mb4_spanish_ci NOT NULL,
  `ap` varchar(255) COLLATE utf8mb4_spanish_ci NOT NULL,
  `am` varchar(255) COLLATE utf8mb4_spanish_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_spanish_ci NOT NULL,
  `puesto` bigint(20) unsigned NOT NULL,
  `status` tinyint(3) unsigned DEFAULT 1,
  `creado` timestamp NOT NULL DEFAULT current_timestamp(),
  `actualizado` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=68 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `empleados`
--

LOCK TABLES `empleados` WRITE;
/*!40000 ALTER TABLE `empleados` DISABLE KEYS */;
INSERT INTO `empleados` VALUES (1,'Ana','Marciano','Zamora','irmalorena@me.com',55,1,'2021-10-25 19:11:27','2021-11-26 05:35:04'),(2,'María Luisa','Azcarraga','Miquel','yosoymarialuisa@me.com',50,1,'2021-10-25 19:13:02','2021-11-26 04:52:33'),(3,'Laura','Miquel','González','laura.miquel@gmail.com',57,1,'2021-10-25 19:13:58','2021-11-25 18:46:48'),(4,'Leonardo','Martinez','Hernandez','leoesher@hotmail.com',53,1,'2021-10-26 05:00:14','2021-11-25 18:46:39'),(5,'Miguel','Madrigal','Horta','miguelhor@yahoo.com',55,1,'2021-10-26 16:14:38','2021-11-26 05:42:38'),(6,'Marisela','Ríos','Dominguez','erica.rios.dom@me.com',52,1,'2021-10-26 16:17:11','2021-11-26 03:32:16'),(7,'Norma Esther','Herrera','Morales','norma.esther@att.com',60,1,'2021-10-26 16:18:21','2021-11-26 05:32:22'),(8,'Veronica','Hernández','Perez','veroververo@hotmail.com',55,1,'2021-10-26 16:42:40','2021-11-25 18:42:58'),(9,'Vicente','Zedillo','Madrid','vicente.zedilloq@me.com',62,1,'2021-10-26 16:44:06','2021-11-25 18:43:51'),(10,'Omar','Bocanegra','Rochín','marioblackmouth@yahoo.com',62,1,'2021-10-26 16:50:32','2021-11-19 00:16:52'),(11,'Martha Alicia','Flores','Ovalle','marthaflowers@hotmail.com',62,1,'2021-10-26 16:51:48','2021-11-25 18:43:43'),(12,'Luis','García','Lopez','luisgarcialopez@me.com',51,1,'2021-10-26 17:14:16','2021-11-25 18:46:37'),(13,'Miguel Ernesto','Solis','Escoto','miguel.ernesto@me.com',51,1,'2021-10-26 18:29:36','2021-10-26 18:29:36'),(14,'Olaf','Solares','Beltran','olaf.elsol@hotmail.com',52,1,'2021-10-26 18:31:21','2021-10-27 04:47:55'),(15,'Rosa Maria','Puente','Marquez','rosa.maria@yahoo.com',51,1,'2021-10-26 18:34:56','2021-11-18 02:25:05'),(16,'François','Muñoz','Güevara','miusuario@elservidor.com',55,1,'2021-10-26 18:54:02','2021-11-25 18:46:57'),(21,'Marcia','Jimenez','Corral','maga.corral@me.com',40,1,'2021-10-28 01:20:19','2021-11-25 18:46:25'),(22,'Jimena','Beltran','Mendez','jimenabemen@gmail.com',34,1,'2021-10-28 01:29:21','2021-11-25 18:46:41'),(23,'Mariana Victoria','Lazaro','Salinas','marianabanana@me.com',35,1,'2021-10-28 01:35:29','2021-11-26 03:32:12'),(24,'Gabriela E.','Franco','Rangel','gabita789@hotmail.com',56,1,'2021-10-28 01:55:56','2021-11-25 18:46:55'),(26,'Cristina','Olvera','Casillas','criscriscristina@yahoo.com',50,1,'2021-10-28 03:15:27','2021-11-25 18:46:03'),(27,'Luis','Torres','Jimenez','luis.torres@me.com',57,1,'2021-10-28 16:30:14','2021-11-25 18:46:28'),(29,'Federico','Luna','Jimenez','fedelunatico@yahoo.com',55,1,'2021-11-12 05:25:05','2021-11-25 18:46:07'),(30,'Eric','Bolaños','Palma','elericlabolaq@me.com',44,1,'2021-11-12 05:43:12','2021-11-25 18:46:05'),(31,'Marco Antonio','Rodriguez','Lopez','elmarcos@me.com',35,1,'2021-11-18 19:12:35','2021-11-26 03:32:19'),(32,'Margarita','Morales','Mejia','latreseme@me.com',60,1,'2021-11-18 19:15:48','2021-11-26 03:32:14'),(33,'Carlos','Mariscal','Ortega','carlosmaro@me.com',37,1,'2021-11-18 19:25:15','2021-11-26 00:57:23'),(34,'Maritza','Rodríguez','Gómez','maritzarogo@me.com',53,1,'2021-11-18 19:28:50','2021-11-26 00:59:22'),(35,'Martín','Lorenzo','Dante','martindan@me.com',43,1,'2021-11-18 19:39:25','2021-11-18 19:39:25'),(36,'Jesus','Altomaro','Padilla','yizuzaltop@yahoo.com',49,1,'2021-11-18 19:40:04','2021-11-25 18:46:51'),(37,'Leslie','Marshall','Grace','leslie.mar.gra@me.com',42,1,'2021-11-19 00:04:54','2021-11-25 18:46:44'),(63,'Alejandra','Zuñiga','Hernandez','alejandrazuher@me.com',52,1,'2021-11-26 05:34:42','2021-11-26 05:34:42'),(64,'Antonio','Beltran','Barrientos','antoniobeltram@me.com',42,1,'2021-11-26 05:43:21','2021-11-26 05:43:21'),(65,'Berenice','Ortega','Diaz','bereniceortega@me.com',57,1,'2021-11-26 05:43:55','2021-11-26 05:43:55'),(66,'Soledad','Luna','Becerril','solalaluna123@yahoo.com',56,1,'2021-11-26 05:44:37','2021-11-26 05:44:37'),(67,'Demian','Jaramillo','Flores','eldemian@hotmail.com',54,1,'2021-11-26 06:01:09','2021-11-26 06:01:09');
/*!40000 ALTER TABLE `empleados` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `puestos`
--

DROP TABLE IF EXISTS `puestos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `puestos` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) COLLATE utf8mb4_spanish_ci NOT NULL,
  `creado` timestamp NOT NULL DEFAULT current_timestamp(),
  `actualizado` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=63 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `puestos`
--

LOCK TABLES `puestos` WRITE;
/*!40000 ALTER TABLE `puestos` DISABLE KEYS */;
INSERT INTO `puestos` VALUES (32,'Director Técnico','2021-10-25 16:06:22','2021-10-25 16:06:22'),(33,'Gerente de SAP','2021-10-25 16:06:22','2021-10-25 16:06:22'),(34,'Analista de Sistemas','2021-10-25 16:06:22','2021-10-25 16:06:22'),(35,'Arquitecto Java','2021-10-25 16:06:22','2021-10-25 16:06:22'),(36,'Desarrollador de Salesforce / CRM','2021-10-25 16:06:22','2021-10-25 16:06:22'),(37,'Arquitecto de Bases de Datos','2021-10-25 16:06:22','2021-10-25 16:06:22'),(38,'Consultor de Ciberseguridad','2021-10-25 16:06:22','2021-10-25 16:06:22'),(39,'Ingeniero de Software Embebido','2021-10-25 16:06:22','2021-10-25 16:06:22'),(40,'Administrador de Datos','2021-10-25 16:06:22','2021-10-25 16:06:22'),(41,'Ingeniero / Especialista en Integración de Sistemas','2021-10-25 16:06:22','2021-10-25 16:06:22'),(42,'Desarrollador .NET','2021-10-25 16:06:22','2021-10-25 16:06:22'),(43,'Desarrollador Analista','2021-10-25 16:06:22','2021-10-25 16:06:22'),(44,'Desarrollador Android','2021-10-25 16:06:22','2021-10-25 16:06:22'),(45,'Desarrollador iOS','2021-10-25 16:06:22','2021-10-25 16:06:22'),(46,'Desarrollador Java','2021-10-25 16:06:22','2021-10-25 16:06:22'),(47,'Desarrollador Jr.','2021-10-25 16:06:22','2021-10-25 16:06:22'),(48,'Programador','2021-10-25 16:06:22','2021-10-25 16:06:22'),(49,'Programador Web','2021-10-25 16:06:22','2021-10-25 16:06:22'),(50,'Desarrollador de Aplicaciones Móviles','2021-10-25 16:06:22','2021-10-25 16:06:22'),(51,'Desarrollador de Software','2021-10-25 16:06:22','2021-10-25 16:06:22'),(52,'Desarrollador de Sistemas','2021-10-25 16:06:22','2021-10-25 16:06:22'),(53,'Programador PHP','2021-10-25 16:06:22','2021-10-25 16:06:22'),(54,'Programador de Videojuegos','2021-10-25 16:06:22','2021-10-25 16:06:22'),(55,'Analista de Soporte Técnico','2021-10-25 16:06:22','2021-10-25 16:06:22'),(56,'Administrador de Base de Datos','2021-10-25 16:06:22','2021-10-25 16:06:22'),(57,'Analista de Datos','2021-10-25 16:06:22','2021-10-25 16:06:22'),(58,'Desarrollador LAMP','2021-10-25 16:06:22','2021-10-25 16:06:22'),(59,'Desarrollador MERN','2021-10-25 16:06:22','2021-10-25 16:06:22'),(60,'Desarrollador Fullstack','2021-10-25 16:06:22','2021-10-25 16:06:22'),(61,'Desarrollador Backend','2021-10-25 16:06:22','2021-10-25 16:06:22'),(62,'Desarrollador Frontend','2021-10-25 16:06:22','2021-10-25 16:06:22');
/*!40000 ALTER TABLE `puestos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'unir_tarea_uno'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-11-26  0:03:21
