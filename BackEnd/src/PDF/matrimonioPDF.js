
        const fs = require('fs')
        const PDFDocument = require('pdfkit')
    
        const mes = "Agosto";
        const anio = 1998;
        const nombre = "Carlos Efren de los Reyes Bueno"
        const number = 90;
        const notasMaginales = "dascklsanc;klsahcasdlkcja sdncklnsd;ckjasdbc;jksdcbsdj kacbsd;kjcbsdkj"
        const tramites = "Tramites financieros"
        //Se crea un documento
        const doc = new PDFDocument;
    
        //pdf donde se crea
        doc.pipe(fs.createWriteStream('output.pdf'));
    
        //IMAGENES
        doc.image('images/logo.jpg', 70, 15, { width: 70 });
        doc.image('images/logoVirgen.jpg', 490, 10, { width: 60 });
    
    
        // MEMBRETE
        doc.fontSize(15).text('DIÓCESIS DE CIUDAD VICTORIA', 200, 40, { fill: 'true', stroke: 'true' });
        doc.fontSize(12).text('Parroquia de Nuestra Señora de Loreto', 220, 58, { fill: 'true', stroke: 'true' });
        doc.fontSize(9).text('Ciro R. de la Garza Treviño s/n C.P. 8840 Burgos, Tamps Tel. (841) 844 40 14', 160, 73);
    
        // INFORMACION
        // COPIA SIMPLE DE MATRIMONIO
        doc.fontSize(15).text('COPIA SIMPLE DE MATRIMONIO', 200, 130, { fill: 'true', stroke: 'true' });
    
        doc.fontSize(12).text('El día', 100, 180);
        doc.fontSize(12).text(`     ${14}      `, 135, 180, { underline: 'true', fill: 'true', stroke: 'true' });
        doc.fontSize(12).text('de', 190, 180);
        doc.fontSize(12).text(`             ${mes}           `, 208, 180, { underline: 'true', fill: 'true', stroke: 'true' });
        doc.fontSize(12).text('del año', 332, 180);
        doc.fontSize(12).text(`     ${anio}      `, 375, 180, { underline: 'true', fill: 'true', stroke: 'true' });
        doc.fontSize(12).text('recibieron el', 445, 180);
        doc.fontSize(12).text('Sacramento del Matrimonio en esta parroquia:', 75, 210);
    
        // SPACE
        // FIST PERSON
        doc.fontSize(12).text(`${nombre}`, 75, 260, { fill: 'true', stroke: 'true' });
        doc.fontSize(12).text(`                                                                                                                                         `, 75, 260, { underline: 'true' });
        // SECOND PERSON
        doc.fontSize(12).text(`${nombre}`, 75, 295, { fill: 'true', stroke: 'true' });
        doc.fontSize(12).text(`                                                                                                                                         `, 75, 295, { underline: 'true' });
    
        // NOMBRES Y APELLIDOS
        doc.fontSize(12).text('Nombres y apellidos', 255, 320);
    
        // Por el P
        doc.fontSize(12).text('Por el P.', 75, 370);
        doc.fontSize(12).text(`${nombre}`, 125, 370, { fill: 'true', stroke: 'true' });
        doc.fontSize(12).text('                                                                                                                             ', 120, 370, { underline: 'true' });
    
        // En
        doc.fontSize(12).text('En:', 75, 395);
        doc.fontSize(12).text(`${nombre}`, 100, 395, { fill: 'true', stroke: 'true' });
        doc.fontSize(12).text('                                                                                                                                    ', 100, 395, { underline: 'true' });
    
        // Fueron testigos
        doc.fontSize(12).text('Fueron testigos:', 75, 420);
        // Primer testigo
        doc.fontSize(12).text(`${nombre}`, 165, 420, { fill: 'true', stroke: 'true' });
        doc.fontSize(12).text('                                                                                                                ', 165, 420, { underline: 'true' });
        // Segundo testigo
        doc.fontSize(12).text(`${nombre}`, 165, 440, { fill: 'true', stroke: 'true' });
        doc.fontSize(12).text('                                                                                                                ', 165, 440, { underline: 'true' });
    
        // Como consta
        doc.fontSize(12).text('Como consta en el libro No.', 105, 470);
        doc.fontSize(12).text(`${number}`, 265, 470, { fill: 'true', stroke: 'true' });
        doc.fontSize(12).text('             ', 255, 470, { underline: 'true' });
        doc.fontSize(12).text('Foja', 305, 470);
        doc.fontSize(12).text('                    ', 335, 470, { underline: 'true' });
        doc.fontSize(12).text(`${number}`, 355, 470, { fill: 'true', stroke: 'true' });
        doc.fontSize(12).text(`Acta`, 410, 470);
        doc.fontSize(12).text('                    ', 445, 470, { underline: 'true' });
        doc.fontSize(12).text(`${number}`, 460, 470, { fill: 'true', stroke: 'true' });
    
        // Notas marginales
        doc.fontSize(12).text('Notas marginales:', 75, 500);
        doc.fontSize(12).text('                                                                                                                                                                                                                                                                                                                                       ', 175, 500, { underline: 'true' });
        doc.fontSize(12).text(`${notasMaginales}`, 175, 500, { fill: 'true', stroke: 'true' });
    
    
        // La presente copia se solicita para
    
        doc.fontSize(12).text('La presente copia se solicita para', 75, 560);
        doc.fontSize(12).text('                                                                               ', 275, 560, { underline: 'true' });
        doc.fontSize(12).text(`${tramites}`, 280, 560, { fill: 'true', stroke: 'true' });
    
        // Fecha de expedicion
        doc.fontSize(12).text('Fecha de expedición:', 75, 600);
        doc.fontSize(12).text(`${14}`, 205, 600, { fill: 'true', stroke: 'true' });
        doc.fontSize(12).text('             ', 190, 600, { underline: 'true' });
        doc.fontSize(12).text('de', 240, 600);
        doc.fontSize(12).text('                                ', 260, 600, { underline: 'true' });
        doc.fontSize(12).text(`${mes}`, 275, 600, { fill: 'true', stroke: 'true' });
        doc.fontSize(12).text(`del año`, 370, 600);
        doc.fontSize(12).text('                  ', 415, 600, { underline: 'true' });
        doc.fontSize(12).text(`${anio}`, 420, 600, { fill: 'true', stroke: 'true' });
    
        // FIRMA
        doc.fontSize(11).text('Doy fe', 400, 660);
        doc.fontSize(11).text('Párroco', 398, 675);
        doc.fontSize(12).text('                                                                       ', 300, 705, { underline: 'true' });
    
    
        doc.end();
