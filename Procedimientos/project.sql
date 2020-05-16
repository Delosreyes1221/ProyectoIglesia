-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 16-05-2020 a las 21:08:27
-- Versión del servidor: 10.4.6-MariaDB
-- Versión de PHP: 7.3.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `project`
--

DELIMITER $$
--
-- Procedimientos
--
CREATE DEFINER=`root`@`localhost` PROCEDURE `bautizoAddOrEdit` (IN `_id` INT, IN `_dia_bautizo` VARCHAR(45), IN `_mes_bautizo` VARCHAR(45), IN `_anio_bautizo` VARCHAR(45), IN `_nom_padre` VARCHAR(45), IN `_nombre_Persona` VARCHAR(45), IN `_lugar_nac` VARCHAR(45), IN `_fecha_nac` VARCHAR(45), IN `_nom_padre1` VARCHAR(45), IN `_nom_padre2` VARCHAR(45), IN `_nom_padrino1` VARCHAR(45), IN `_nom_padrino2` VARCHAR(45), IN `_num_libro` VARCHAR(45), IN `_num_foja` VARCHAR(45), IN `_num_acta` VARCHAR(45), IN `_notas_marginales` VARCHAR(45), IN `_copia` VARCHAR(45), IN `_fecha_exp` VARCHAR(45), IN `_genero` VARCHAR(45))  BEGIN 
	IF _id = 0 THEN	
    	INSERT INTO bautizo (dia_bautizo, mes_bautizo, anio_bautizo, nom_padre, nombre_Persona, lugar_nac, fecha_nac, nom_padre1, nom_padre2, nom_padrino1, nom_padrino2, num_libro, num_foja, num_acta, notas_marginales, copia, fecha_exp, genero) 
        VALUES (_dia_bautizo, _mes_bautizo, _anio_bautizo, _nom_padre, _nombre_Persona, _lugar_nac, _fecha_nac, _nom_padre1, _nom_padre2, _nom_padrino1, _nom_padrino2, _num_libro, _num_foja, _num_acta, _notas_marginales, _copia, _fecha_exp, _genero);
        SET _id = LAST_INSERT_ID();
    ELSE 
    	UPDATE bautizo
        SET 
        	dia_bautizo = _dia_bautizo,
        	mes_bautizo = _mes_bautizo,
            anio_bautizo = _anio_bautizo, 
            nom_padre = _nom_padre, 
            nombre_Persona = _nombre_Persona,
            lugar_nac = _lugar_nac,
            fecha_nac = _fecha_nac, 
            nom_padre1 = _nom_padre1,
            nom_padre2 = _nom_padre2,
            nom_padrino1 = _nom_padrino1,
            nom_padrino2 = _nom_padrino2,
            num_libro = _num_libro,
            num_foja = _num_foja, 
            num_acta = _num_acta,
            notas_marginales = _notas_marginales,
            copia = _copia,
            fecha_exp = _fecha_exp,
            genero = _genero
            WHERE id_bautizo = _id;
    END IF;
    SELECT _id AS id_bautizo;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `bautizoEdit` (IN `_id` INT, IN `_dia_bautizo` VARCHAR(45), IN `_mes_bautizo` VARCHAR(45), IN `_anio_bautizo` VARCHAR(45), IN `_nom_padre` VARCHAR(45), IN `_nombre_Persona` VARCHAR(45), IN `_lugar_nac` VARCHAR(45), IN `_fecha_nac` DATE, IN `_nom_padre1` VARCHAR(45), IN `_nom_padre2` VARCHAR(45), IN `_nom_padrino1` VARCHAR(45), IN `_nom_padrino2` VARCHAR(45), IN `_num_libro` VARCHAR(45), IN `_num_foja` VARCHAR(45), IN `_num_acta` VARCHAR(45), IN `_notas_marginales` VARCHAR(45), IN `_copia` VARCHAR(45), IN `_fecha_exp` DATE, IN `_genero` VARCHAR(45))  BEGIN 
    	UPDATE bautizo
        SET 
        	_diaBautizo = _dia_bautizo,
        	_mesBautizo = _mes_bautizo,
            _anioBautizo = _anio_bautizo, 
            _nomSacerdote = _nom_padre, 
            _nomPersona = _nombre_Persona,
            _lugarNac = _lugar_nac,
            _fechaNac = _fecha_nac, 
            _nomPadre1 = _nom_padre1,
            _nomPadre2 = _nom_padre2,
            _nomPadrino1 = _nom_padrino1,
            _nomPadrino2 = _nom_padrino2,
            _numLibro = _num_libro,
            _numFoja = _num_foja, 
            _numActa = _num_acta,
            _notasMarginales = _notas_marginales,
            _copia = _copia,
            _fechaExp = _fecha_exp,
            _genero = _genero
            WHERE id_bautizo = _id;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `bautizoInsert` (IN `_dia_bautizo` VARCHAR(45), IN `_mes_bautizo` VARCHAR(45), IN `_anio_bautizo` VARCHAR(45), IN `_nom_padre` VARCHAR(45), IN `_nombre_Persona` VARCHAR(45), IN `_lugar_nac` VARCHAR(45), IN `_fecha_nac` DATE, IN `_nom_padre1` VARCHAR(45), IN `_nom_padre2` VARCHAR(45), IN `_nom_padrino1` VARCHAR(45), IN `_nom_padrino2` VARCHAR(45), IN `_num_libro` VARCHAR(45), IN `_num_foja` VARCHAR(45), IN `_num_acta` VARCHAR(45), IN `_notas_marginales` VARCHAR(45), IN `copia` VARCHAR(45), IN `_fecha_exp` DATE, IN `genero` VARCHAR(45))  BEGIN 
    INSERT INTO bautizo (_diaBautizo, _mesBautizo, _anioBautizo, _nomSacerdote, _nomPersona, _lugarNac, _fechaNac, _nomPadre1, _nomPadre2, _nomPadrino1, _nomPadrino2, _numLibro, _numFoja, _numActa, _notasMarginales, _copia, _fechaExp, _genero) VALUES (_dia_bautizo, _mes_bautizo,_anio_bautizo, _nom_padre, _nombre_Persona, _lugar_nac, _fecha_nac, _nom_padre1, _nom_padre2, _nom_padrino1, _nom_padrino2, _num_libro, _num_foja, _num_acta, _notas_marginales, copia, _fecha_exp, genero);
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `matrimonioInsert` (IN `_dia_matrimonio` VARCHAR(45), IN `_mes_matrimonio` VARCHAR(45), IN `_anio_matrimonio` VARCHAR(45), IN `_nom_primera_persona` VARCHAR(45), IN `_nom_segunda_persona` VARCHAR(45), IN `_nom_sacerdote` VARCHAR(45), IN `_lugar_parroquia` VARCHAR(45), IN `_nom_testigo1` VARCHAR(45), IN `_nom_testigo2` VARCHAR(45), IN `_num_libro` VARCHAR(45), IN `_num_foja` VARCHAR(45), IN `_num_acta` VARCHAR(45), IN `_notas_marginales` VARCHAR(45), IN `_copia` VARCHAR(45), IN `_fecha_exp` DATE)  BEGIN 
    INSERT INTO matrimonio (_diaMatrimonio, _mesMatrimonio, _anioMatrimonio, _nomPrimeraPersona, _nomSegundaPersona, _nomSacerdote, _lugarParroquia, _nomTestigo1, _nomTestigo2, _numLibro, _numFoja, _numActa, _notasMarginales, _copia, _fechaExp) VALUES (_dia_matrimonio, _mes_matrimonio, _anio_matrimonio, _nom_primera_persona, _nom_segunda_persona, _nom_sacerdote, _lugar_parroquia, _nom_testigo1, _nom_testigo2, _num_libro, _num_foja, _num_acta, _notas_marginales, _copia, _fecha_exp);
END$$

DELIMITER ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `bautizo`
--

CREATE TABLE `bautizo` (
  `id_bautizo` int(11) NOT NULL,
  `_diaBautizo` varchar(255) NOT NULL,
  `_mesBautizo` varchar(255) NOT NULL,
  `_anioBautizo` varchar(255) NOT NULL,
  `_nomSacerdote` varchar(255) NOT NULL,
  `_nomPersona` varchar(255) NOT NULL,
  `_lugarNac` varchar(255) NOT NULL,
  `_fechaNac` date NOT NULL,
  `_nomPadre1` varchar(255) NOT NULL,
  `_nomPadre2` varchar(255) NOT NULL,
  `_nomPadrino1` varchar(255) NOT NULL,
  `_nomPadrino2` varchar(255) NOT NULL,
  `_numLibro` varchar(255) NOT NULL,
  `_numFoja` varchar(255) NOT NULL,
  `_numActa` varchar(255) NOT NULL,
  `_notasMarginales` varchar(255) NOT NULL,
  `_copia` varchar(255) NOT NULL,
  `_fechaExp` date NOT NULL,
  `_genero` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `bautizo`
--

INSERT INTO `bautizo` (`id_bautizo`, `_diaBautizo`, `_mesBautizo`, `_anioBautizo`, `_nomSacerdote`, `_nomPersona`, `_lugarNac`, `_fechaNac`, `_nomPadre1`, `_nomPadre2`, `_nomPadrino1`, `_nomPadrino2`, `_numLibro`, `_numFoja`, `_numActa`, `_notasMarginales`, `_copia`, `_fechaExp`, `_genero`) VALUES
(8, '6', 'Enero', '2020', 'Angel Najera', 'Carlos Efren de los Reyes Bueno', 'Padilla', '2020-04-30', 'sdfsdf', 'sdfsdf', 'sdfsdf', 'sdfsdf', '334', '3434', '434', 'sdfsdf', 'sdfsdf', '2020-04-30', 'niño');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `matrimonio`
--

CREATE TABLE `matrimonio` (
  `id_matrimonio` int(11) NOT NULL,
  `_diaMatrimonio` varchar(255) NOT NULL,
  `_mesMatrimonio` varchar(255) NOT NULL,
  `_anioMatrimonio` varchar(255) NOT NULL,
  `_nomPrimeraPersona` varchar(255) NOT NULL,
  `_nomSegundaPersona` varchar(255) NOT NULL,
  `_nomSacerdote` varchar(255) NOT NULL,
  `_lugarParroquia` varchar(255) NOT NULL,
  `_nomTestigo1` varchar(255) NOT NULL,
  `_nomTestigo2` varchar(255) NOT NULL,
  `_numLibro` varchar(255) NOT NULL,
  `_numFoja` varchar(255) NOT NULL,
  `_numActa` varchar(255) NOT NULL,
  `_notasMarginales` varchar(255) NOT NULL,
  `_copia` varchar(255) NOT NULL,
  `_fechaExp` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `matrimonio`
--

INSERT INTO `matrimonio` (`id_matrimonio`, `_diaMatrimonio`, `_mesMatrimonio`, `_anioMatrimonio`, `_nomPrimeraPersona`, `_nomSegundaPersona`, `_nomSacerdote`, `_lugarParroquia`, `_nomTestigo1`, `_nomTestigo2`, `_numLibro`, `_numFoja`, `_numActa`, `_notasMarginales`, `_copia`, `_fechaExp`) VALUES
(1, '6', 'Mayo', '2020', 'dsad', 'dsadasd', 'asdasd', 'asdasd', 'dasdas', 'dasd', '121', '121', '1212', 'sadasd', 'sadasd', '2020-05-15'),
(2, '6', 'Mayo', '2020', 'sas', 'sadasas', 'das', 'dasdasd', 'dsad', 'asdasd', '23', '23', '12', 'asdasd', 'asdasd', '2020-05-09'),
(3, '6', 'Mayo', '2020', 'dsad', 'dsad', 'dsad', 'asdasd', 'asdasd', 'asdasd', '121', '212', '212', 'dsad', 'dasd', '2020-05-17');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `user_id` int(11) NOT NULL,
  `user_name` varchar(255) NOT NULL,
  `user_lastName` varchar(255) NOT NULL,
  `user_password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `bautizo`
--
ALTER TABLE `bautizo`
  ADD PRIMARY KEY (`id_bautizo`);

--
-- Indices de la tabla `matrimonio`
--
ALTER TABLE `matrimonio`
  ADD PRIMARY KEY (`id_matrimonio`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `bautizo`
--
ALTER TABLE `bautizo`
  MODIFY `id_bautizo` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT de la tabla `matrimonio`
--
ALTER TABLE `matrimonio`
  MODIFY `id_matrimonio` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
