USE project;
DELIMITER //
CREATE PROCEDURE bautizoInsert (
    IN _dia_bautizo VARCHAR(45),
    IN _mes_bautizo VARCHAR(45),
    IN _anio_bautizo VARCHAR(45),
    IN _nom_padre VARCHAR(45),
    IN _nombre_Persona VARCHAR(45),
    IN _lugar_nac VARCHAR(45),
    IN _fecha_nac DATE,
    IN _nom_padre1 VARCHAR(45),
    IN _nom_padre2 VARCHAR(45),
    IN _nom_padrino1 VARCHAR(45),
    IN _nom_padrino2 VARCHAR(45),
    IN _num_libro VARCHAR(45),
    IN _num_foja VARCHAR(45),
    IN _num_acta VARCHAR(45),
    IN _notas_marginales VARCHAR(45),
    IN copia VARCHAR(45),
    IN _fecha_exp DATE,
    IN genero VARCHAR(45)
)
BEGIN 
    INSERT INTO bautizo (_diaBautizo, _mesBautizo, _anioBautizo, _nomSacerdote, _nomPersona, _lugarNac, _fechaNac, _nomPadre1, _nomPadre2, _nomPadrino1, _nomPadrino2, _numLibro, _numFoja, _numActa, _notasMarginales, _copia, _fechaExp, _genero) VALUES (_dia_bautizo, _mes_bautizo,_anio_bautizo, _nom_padre, _nombre_Persona, _lugar_nac, _fecha_nac, _nom_padre1, _nom_padre2, _nom_padrino1, _nom_padrino2, _num_libro, _num_foja, _num_acta, _notas_marginales, copia, _fecha_exp, genero);
END
//