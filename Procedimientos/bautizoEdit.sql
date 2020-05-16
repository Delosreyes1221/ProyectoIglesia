USE project;
DELIMITER //
CREATE PROCEDURE bautizoEdit (
    IN _id INT,
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
    IN _copia VARCHAR(45),
    IN _fecha_exp DATE,
    IN _genero VARCHAR(45)
)
BEGIN 
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
END
//