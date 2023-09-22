const fs = require('fs');
const colors = require('colors');

// Imprime mensaje
const printMensaje = (mensaje) => {
  const decoratorLine = '=================================================='
    .magenta;
  const decorationMensaje = `${mensaje}`.red.underline;
  console.log(`${decoratorLine}\n${decorationMensaje}\n${decoratorLine}\n`);
};

// Calcula la tabla de multiplicar
const tabla = (n, show = false, limit = 10) => {
  let resultTable = '';
  const decorationN = `${n}`.blue.italic;
  show ? printMensaje(`Tabla de multiplicar ${decorationN}`.bgBlue.black) : '';
  for (let m = 1; m <= limit; m++) {
    resultTable += `${n}x${m}=${m * n}\n`;
    show
      ? console.log(
          `${decorationN} ${colors.rainbow('x').underline} ${m} ${
            colors.green('=').dim
          } ${m * n}`
        )
      : '';
  }
  return resultTable;
};

const getTabla = async (n, l = false, limit) => {
  try {
    const isValid = typeof n === 'number' && true;
    if (n && isValid) {
      // writeFile
      fs.writeFileSync(`./assets/tabla-${n}.txt`, tabla(n, l, limit));
      return `tabla-${n}.txt`.yellow.bold.italic;
    } else {
      return `${colors.red('No se pudo crear el archivo')}`;
    }
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getTabla,
};
