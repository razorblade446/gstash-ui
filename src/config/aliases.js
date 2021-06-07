const aliases = (prefix = 'src') => ({
  '@components': `${prefix}/components`,
  '@contexts': `${prefix}/contexts`,
  '@hooks': `${prefix}/hooks`,
  '@pages': `${prefix}/pages`,
  '@routes': `${prefix}/routes`,
  '@services': `${prefix}/services`,
  '@styles': `${prefix}/styles`,
  '@utils': `${prefix}/utils`,
});

module.exports = aliases;