const { getTabla } = require('./helpers/generateTable');
const argv = require('./config/yargs');

getTabla(parseInt(argv.base), argv.list, argv.t)
  .then((file) => console.log(`archivo creado: ${file}`))
  .catch((error) => console.log(error));
