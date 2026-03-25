process.chdir('C:/Users/alexj/GENAISTEALTH');
const port = process.env.PORT || 3000;
process.argv = [process.argv[0], process.argv[1], 'dev', '-p', String(port)];
require('C:/Users/alexj/GENAISTEALTH/node_modules/next/dist/bin/next');
