CREATE TABLE `curso_prueba`.`alumnos` ( 
    `id` INT(20) NOT NULL AUTO_INCREMENT , 
    `nombre` VARCHAR(40) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL ,
     `apellido` VARCHAR(40) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL , 
     `edad` TINYINT(3) NULL , 
     `fecha_nac` DATETIME NULL , 
     `provincia_id` VARCHAR(2) NULL , 
     `fecha_alta` TIMESTAMP NOT NULL ,
      PRIMARY KEY (`id`(20))) ENGINE = InnoDB;
PERO NO ME DEJO EL (20) int