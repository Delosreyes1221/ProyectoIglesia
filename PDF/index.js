const fs = require('fs')
const PDFDocument =  require('pdfkit')

const informacion = {
    dia_bautizo: 14,
    mes_bautizo: 'Agosto',
    anio_bautizo: 1998,
    nom_padre : 'P. Fr Jose M. Coronado, C.F.M',
    nom_nombreB: 'Carlos Efren de los reyes Bueno',
    lugar_Nac: 'Ciudad Victoria, Tamaulipas',
    dia_nac: 20,
    mes_nac: "Enero",
    anio_nac: 2021,
    nom_padre1: "Carlos Efren de los Reyes Bueno",
    nom_padre2: "Carlos Efren de los reyes Bueno",
    nom_padrino1: 'Samantha anareli de los reyes ueno',
    nom_padrino2: 'Angel Alejandro Najera de los Reyes',
    num_libro: 21,
    num_foja: 127,
    num_acta: 1258,
    notasMaginales: 'Ninguna',
    pres_copia: 'Matrimonio',
    dia_exp: 14, 
    mes_exp: 'Marzo', 
    anio_exp: 3000,
    genero: 'a'
}

//Se crea un documento
const doc = new PDFDocument;

//pdf donde se crea
doc.pipe(fs.createWriteStream('output.pdf'));

//IMAGENES
doc.image('images/logo.jpg', 70, 15, {width: 70});
doc.image('images/logoVirgen.jpg', 490, 10, {width: 60});


// MEMBRETE
doc.fontSize(15).text('DIÓCESIS DE CIUDAD VICTORIA', 200, 40, {fill: 'true', stroke:'true'});
doc.fontSize(12).text('Parroquia de Nuestra Señora de Loreto', 220, 58, { fill: 'true', stroke:'true'});
doc.fontSize(9).text('Ciro R. de la Garza Treviño s/n C.P. 8840 Burgos, Tamps Tel. (841) 844 40 14', 160, 73);

// INFORMACION
// COPIA SIMPLE DE MATRIMONIO
doc.fontSize(15).text('COPIA SIMPLE DE BAUTISMO', 200, 130 , {fill: 'true', stroke:'true'});

doc.fontSize(12).text('El día', 100, 180);
doc.fontSize(12).text(`     ${informacion.dia_bautizo}      `, 135, 180, { underline: 'true',fill: 'true', stroke:'true'});
doc.fontSize(12).text('de', 190, 180);
doc.fontSize(12).text(`             ${informacion.mes_bautizo}           `, 208, 180, { underline: 'true',fill: 'true', stroke:'true'});
doc.fontSize(12).text('del año', 332, 180);
doc.fontSize(12).text(`     ${informacion.anio_bautizo}      `, 375, 180, { underline: 'true',fill: 'true', stroke:'true'});
doc.fontSize(12).text(`fue bautizad${informacion.genero}`, 445, 180);
doc.fontSize(12).text('en esta parroquia por el:', 75, 210);
doc.fontSize(12).text('                                                                                                   ', 205, 210, {underline: 'true'});
doc.fontSize(12).text(`${informacion.nom_padre}`, 215, 210, {fill:'true', stroke:'true'});
doc.fontSize(12).text(`un${informacion.genero} niñ${informacion.genero} a quien se le puso por nombre:`, 75, 230);

doc.fontSize(12).text(`                                                                                                    `, 140, 260, {underline:'true'});
doc.fontSize(12).text(`${informacion.nom_nombreB}`, 230, 260, {underline:'true', fill: 'true', stroke:'true'});
// NOMBRES Y APELLIDOS
doc.fontSize(12).text('Nombre y apellidos', 255, 280);

doc.fontSize(12).text('Nació en ', 100, 310);
doc.fontSize(12).text('                                                                                                                    ', 155, 310,{underline:'true'});
doc.fontSize(12).text(`${informacion.lugar_Nac}`, 165, 310, {fill: 'true', stroke:'true'});

doc.fontSize(12).text('el día ', 75, 335);
doc.fontSize(12).text('           ', 110, 335, {underline:'true'});
doc.fontSize(12).text(`${informacion.dia_nac}`, 120, 335, {underline:'true', fill: 'true', stroke:'true'});
doc.fontSize(12).text('de', 150, 335);
doc.fontSize(12).text(`${informacion.mes_nac}`, 210, 335, {fill: 'true', stroke:'true'});
doc.fontSize(12).text('                                            ', 167, 335, {underline:'true'});
doc.fontSize(12).text('del año', 320, 335);
doc.fontSize(12).text('                      ', 365, 335,{underline:'true'});
doc.fontSize(12).text(`${informacion.anio_nac}`, 385, 335, {fill: 'true', stroke:'true'});

doc.fontSize(12).text(`hij${informacion.genero} de`, 75, 355, );
doc.fontSize(12).text(`                                                                                                  `, 115, 355, {underline:'true'});
doc.fontSize(12).text(`${informacion.nom_padre1}`, 115, 355, {fill: 'true', stroke:'true'});
doc.fontSize(12).text(`y de`, 75, 375);
doc.fontSize(12).text(`                                                                                                     `, 105, 375, {underline:'true'});
doc.fontSize(12).text(`${informacion.nom_padre2}`, 115, 375, {fill: 'true', stroke:'true'});

// FUERON PADFRINOS
doc.fontSize(12).text(`fueron padrinos`, 75, 395);
doc.fontSize(12).text(`                                                                                                                 `, 160, 395, {underline:'true'});
doc.fontSize(12).text(`${informacion.nom_padrino1}`, 180, 395, {fill: 'true', stroke:'true'});
doc.fontSize(12).text(`                                                                                                                 `, 160, 415, {underline:'true'});
doc.fontSize(12).text(`${informacion.nom_padrino2}`, 180, 415, {fill: 'true', stroke:'true'});

// Como consta
doc.fontSize(12).text('Como consta en el libro No.', 75, 450);
doc.fontSize(12).text(`${informacion.num_libro}`, 235, 450, {fill: 'true', stroke:'true'});
doc.fontSize(12).text('             ', 225, 450, {underline: 'true'});
doc.fontSize(12).text('Foja No.', 275, 450);
doc.fontSize(12).text('                   ', 325, 450, {underline: 'true'});
doc.fontSize(12).text(`${informacion.num_foja}`, 345, 450, {fill: 'true', stroke:'true'});
doc.fontSize(12).text(`Acta No.`, 400, 450);
doc.fontSize(12).text('               ', 450, 450, {underline: 'true'});
doc.fontSize(12).text(`${informacion.num_acta}`, 465, 450, {fill: 'true', stroke:'true'});

// Notas marginales
doc.fontSize(12).text('Notas marginales:', 75, 480);
doc.fontSize(12).text('                                                                                                                                                                                                                                                                                                                                       ', 175, 480, {underline: 'true'});
doc.fontSize(12).text(`${informacion.notasMaginales}`, 175, 480, {fill: 'true', stroke:'true'});


// La presente copia se solicita para

doc.fontSize(12).text('La presente copia de Bautismo se solicita para', 75, 540);
doc.fontSize(12).text('                                                                                                                            ', 330, 540, {underline: 'true'});
doc.fontSize(12).text(`${informacion.pres_copia}`, 330, 540, {fill: 'true', stroke:'true'});

// Fecha de expedicion
doc.fontSize(12).text('Fecha de expedición:', 75, 580);
doc.fontSize(12).text(`${informacion.dia_exp}`, 205, 580, {fill: 'true', stroke:'true'});
doc.fontSize(12).text('             ', 190, 580, {underline: 'true'});
doc.fontSize(12).text('de', 240, 580);
doc.fontSize(12).text('                                ', 260, 580, {underline: 'true'});
doc.fontSize(12).text(`${informacion.mes_exp}`, 275, 580, {fill: 'true', stroke:'true'});
doc.fontSize(12).text(`del año`, 370, 580);
doc.fontSize(12).text('                  ', 415, 580, {underline: 'true'});
doc.fontSize(12).text(`${informacion.anio_exp}`, 420, 580, {fill: 'true', stroke:'true'});

// FIRMA
doc.fontSize(11).text('Doy fe:', 400, 620);
doc.fontSize(11).text('Párroco', 398, 635);
doc.fontSize(12).text('                                                                       ', 300, 695, {underline: 'true'});


doc.end();



