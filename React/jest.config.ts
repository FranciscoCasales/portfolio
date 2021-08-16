import type { Config } from '@jest/types';

export default async (): Promise<Config.InitialOptions> => {
  return {
    verbose: true,
    testPathIgnorePatterns: ['<rootDir>/node_modules', '<rootDir>/dist>'],
    moduleNameMapper: {
      '\\.(pdf)$': '<rootDir>/src/__mocks__/fileMock.ts',
      '\\.(scss|css)$': '<rootDir>/src/__mocks__/styleMock.ts',
      '^frontend/components/(.*)$': '<rootDir>/src/components/$1',
      '^frontend/containers/(.*)$': '<rootDir>/src/containers/$1',
      '^@routes/(.*)$': '<rootDir>/src/routes/$1',
      '^@customTypes/(.*)$': '<rootDir>/src/types/$1',
      '^frontend/hooks/(.*)$': '<rootDir>/src/hooks/$1',
      '^frontend/models/(.*)$': '<rootDir>/src/models/$1',
      '^frontend/constants/(.*)$': '<rootDir>/src/constants/$1',
      '^frontend/context/(.*)$': '<rootDir>/src/context/$1',
      '^frontend/assets/data/(.*)$': '<rootDir>/src/assets/data/$1',
      '^frontend/__mocks__/(.*)$': '<rootDir>/src/__mocks__/$1',
    },
    testEnvironment: 'jsdom',
  };
};
