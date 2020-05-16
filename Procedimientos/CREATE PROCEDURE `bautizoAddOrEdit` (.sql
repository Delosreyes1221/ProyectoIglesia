USE project;
DELIMITER //
CREATE PROCEDURE bautizoInsert(
    IN _dia_bautizo VARCHAR(45),
    IN _mes_bautizo VARCHAR(45),
    IN _anio_bautizo VARCHAR(45),
    IN _nom_padre VARCHAR(45),
    IN _nombre_Persona VARCHAR(45),
    IN _lugar_nac VARCHAR(45),
    IN _fecha_nac VARCHAR(45),
    IN _nom_padre1 VARCHAR(45),
    IN _nom_padre2 VARCHAR(45),
    IN _nom_padrino1 VARCHAR(45),
    IN _nom_padrino2 VARCHAR(45),
    IN _num_libro VARCHAR(45),
    IN _num_foja VARCHAR(45),
    IN _num_acta VARCHAR(45),
    IN _notas_marginales VARCHAR(45),
    IN _copia VARCHAR(45),
    IN _fecha_exp VARCHAR(45),
    IN _genero VARCHAR(45)
)
BEGIN 
    	INSERT INTO bautizo (dia_bautizo, mes_bautizo, anio_bautizo, nom_padre, nombre_Persona, lugar_nac, fecha_nac, nom_padre1, nom_padre2, nom_padrino1, nom_padrino2, num_libro, num_foja, num_acta, notas_marginales, copia, fecha_exp, genero) 
        VALUES (_dia_bautizo, _mes_bautizo, _anio_bautizo, _nom_padre, _nombre_Persona, _lugar_nac, _fecha_nac, _nom_padre1, _nom_padre2, _nom_padrino1, _nom_padrino2, _num_libro, _num_foja, _num_acta, _notas_marginales, _copia, _fecha_exp, _genero);
END
//