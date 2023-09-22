const yargs = require('yargs');

const argv = yargs
  .option('b', {
    alias: 'base',
    demandOption: true,
    type: 'number',
    describe: 'Es el valor que generará dicha tabla',
  })
  .option('l', {
    alias: 'list',
    describe: 'Lista la tabla de multiplicar',
    demandOption: false,
    type: 'boolean',
    default: false,
  })
  .option('t', {
    alias: 'to',
    describe: 'Establece el límite a la hora de multiplicar tantas veces',
    type: 'number',
    default: 10,
    demandOption: false,
  })
  .check((argv, options) => {
    if (!isNaN(argv.b)) {
      return true;
    } else {
      throw new Error('Error al especificar el valor');
    }
  }).argv;

module.exports = argv;
