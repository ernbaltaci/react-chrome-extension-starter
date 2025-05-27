let constants;
const env = process.env.NODE_ENV;

switch (env) {
  case 'development':
    constants = require('./constantDev');
    break;
  default:
    constants = require('./constantProd');
}

export const { BACKEND_URL } = constants;

