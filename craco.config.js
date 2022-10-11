const path = require('path');

const resolvePath = (p) => path.resolve(__dirname, p);

module.exports = {
  webpack: {
    alias: {
      '@components': resolvePath('./src/components'),
      '@defaultComponents': resolvePath('./src/components/defaultComponents'),
      '@higherOrderComponents': resolvePath('./src/components/higherOrderComponents'),
      '@assets': resolvePath('./src/assets'),
      '@helpers': resolvePath('./src/helpers'),
      '@models': resolvePath('./src/models'),
      '@scssAbstracts': resolvePath('./src/scssAbstracts'),
    },
  },
};
