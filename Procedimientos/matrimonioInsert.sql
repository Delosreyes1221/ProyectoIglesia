USE project;
DELIMITER //
CREATE PROCEDURE matrimonioInsert (
    IN _dia_matrimonio VARCHAR(45),
    IN _mes_matrimonio VARCHAR(45),
    IN _anio_matrimonio VARCHAR(45),
    IN _nom_primera_persona VARCHAR(45),
    IN _nom_segunda_persona VARCHAR(45),
    IN _nom_sacerdote VARCHAR(45),
    IN _lugar_parroquia VARCHAR(45),
    IN _nom_testigo1 VARCHAR(45),
    IN _nom_testigo2 VARCHAR(45),
    IN _num_libro VARCHAR(45),
    IN _num_foja VARCHAR(45),
    IN _num_acta VARCHAR(45),
    IN _notas_marginales VARCHAR(45),
    IN _copia VARCHAR(45),
    IN _fecha_exp DATE
)
BEGIN 
    INSERT INTO matrimonio (_diaMatrimonio, _mesMatrimonio, _anioMatrimonio, _nomPrimeraPersona, _nomSegundaPersona, _nomSacerdote, _lugarParroquia, _nomTestigo1, _nomTestigo2, _numLibro, _numFoja, _numActa, _notasMarginales, _copia, _fechaExp) VALUES (_dia_matrimonio, _mes_matrimonio, _anio_matrimonio, _nom_primera_persona, _nom_segunda_persona, _nom_sacerdote, _lugar_parroquia, _nom_testigo1, _nom_testigo2, _num_libro, _num_foja, _num_acta, _notas_marginales, _copia, _fecha_exp);
END
//