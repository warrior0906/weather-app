module.exports = {
    collectCoverage: true,
    moduleFileExtensions: ['ts', 'tsx', 'js'],
    globals: {
        'ts-jest': {
            babelConfig: true,
        },
    },
    "testEnvironment": "jsdom",
    testRegex: '(/__tests__/.*|\\.(test|spec))\\.(ts|tsx|js)$',
    "moduleNameMapper": {
        "\\.(css|less|sass|scss)$": "<rootDir>/__mocks__/styleMock.js",
        "\\.(gif|ttf|eot|svg)$": "<rootDir>/__mocks__/fileMock.js"
    },
};

