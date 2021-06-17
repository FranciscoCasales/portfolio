import type { Config } from '@jest/types';

export default async (): Promise<Config.InitialOptions> => {
  return {
    verbose: true,
    testPathIgnorePatterns: ['<rootDir>/node_modules', '<rootDir>/dist>'],
    moduleNameMapper: {
      '\\.(pdf)$': '<rootDir>/src/__mocks__/fileMock.ts',
      '\\.(scss|css)$': '<rootDir>/src/__mocks__/styleMock.ts',
      '^@components/(.*)$': '<rootDir>/src/components/$1',
      '^@containers/(.*)$': '<rootDir>/src/containers/$1',
      '^@routes/(.*)$': '<rootDir>/src/routes/$1',
      '^@customTypes/(.*)$': '<rootDir>/src/types/$1',
      '^@hooks/(.*)$': '<rootDir>/src/hooks/$1',
      '^@models/(.*)$': '<rootDir>/src/models/$1',
      '^@constants/(.*)$': '<rootDir>/src/constants/$1',
      '^@context/(.*)$': '<rootDir>/src/context/$1',
      '^@data/(.*)$': '<rootDir>/src/assets/data/$1',
      '^@mocks/(.*)$': '<rootDir>/src/__mocks__/$1',
    },
    testEnvironment: 'jsdom',
  };
};
