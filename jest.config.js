/** @type {import('@jest/types').Config.InitialOptions} */
const config = {
    moduleFileExtensions: [
        'ts',
        'tsx',
        'js',
        'jsx'
    ],
    setupFilesAfterEnv: [
        './jest.setup.js'
    ],
    testMatch: [
        '**/__tests__/**/*.+(ts|js)?(x)',
        '**/+(*.)+(spec|test).+(ts|js)?(x)'
    ],
    testPathIgnorePatterns: [
        '/node_modules/',
        '/dist/'
    ],
    verbose: true,
}

// eslint-disable-next-line no-undef
module.exports = config;