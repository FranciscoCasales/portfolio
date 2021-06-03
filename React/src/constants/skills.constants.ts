import { CardModel } from '@models/card-model';

import babelIcon from '@images/frontend/babel.svg';
import webpackIcon from '@images/frontend/webpack.svg';
import javascriptIcon from '@images/frontend/javascript.svg';
import cssIcon from '@images/frontend/css.svg';
import htmlIcon from '@images/frontend/html.svg';
import npmIcon from '@images/frontend/npm.svg';
import sassIcon from '@images/frontend/sass.svg';
import angularIcon from '@images/frontend/angular.svg';
import reactIcon from '@images/frontend/react.svg';
import reduxIcon from '@images/frontend/redux.svg';
import ionicIcon from '@images/frontend/ionic.svg';
import typescriptIcon from '@images/frontend/typescript.svg';
import jestIcon from '@images/frontend/jest.svg';
import ngrxIcon from '@images/frontend/ngrx.svg';
import eslintIcon from '@images/frontend/eslint.svg';

import javaIcon from '@images/backend/java.svg';
import springIcon from '@images/backend/spring.svg';
import mavenIcon from '@images/backend/maven.svg';
import gradleIcon from '@images/backend/gradle.svg';
import nodeIcon from '@images/backend/nodejs.svg';
import expressIcon from '@images/backend/expressjs-icon.svg';
import nestIcon from '@images/backend/nest.svg';
import awsIcon from '@images/backend/aws-icon.svg';
import dockerIcon from '@images/backend/docker.svg';
import jenkinsIcon from '@images/backend/jenkins.svg';
import firebaseIcon from '@images/backend/firebase.svg';
import stripeIcon from '@images/backend/stripe.svg';

import gitIcon from '@images/otherSkills/git.svg';
import huskyIcon from '@images/otherSkills/husky.svg';
import mongodbIcon from '@images/otherSkills/mongodb-icon.svg';
import mariadbIcon from '@images/otherSkills/mariadb-icon.svg';
import postgresqlIcon from '@images/otherSkills/postgresql-icon.svg';
import markdownIcon from '@images/otherSkills/markdown.svg';
import jsonIcon from '@images/otherSkills/json.svg';
import yamlIcon from '@images/otherSkills/yaml.svg';
import terminalIcon from '@images/otherSkills/console.svg';
import linuxIcon from '@images/otherSkills/linux-icon.svg';
import dartIcon from '@images/otherSkills/dart.svg';
import flutterIcon from '@images/otherSkills/flutter-icon.svg';
import swiftIcon from '@images/otherSkills/swift.svg';

export const FRONTEND_SKILLS: CardModel[] = [
  { id: 1, image: babelIcon, alt: 'Babel', desc: 'Babel' },
  { id: 2, image: webpackIcon, alt: 'Webpack', desc: 'Webpack' },
  { id: 3, image: eslintIcon, alt: 'EsLint', desc: 'EsLint' },
  { id: 4, image: javascriptIcon, alt: 'Javascript', desc: 'Javascript' },
  { id: 5, image: cssIcon, alt: 'Css', desc: 'Css' },
  { id: 6, image: htmlIcon, alt: 'Html', desc: 'Html' },
  { id: 7, image: npmIcon, alt: 'Npm', desc: 'Npm' },
  { id: 8, image: angularIcon, alt: 'Angular', desc: 'Angular' },
  { id: 9, image: reactIcon, alt: 'React', desc: 'React' },
  { id: 10, image: reduxIcon, alt: 'Redux', desc: 'Redux' },
  { id: 11, image: ngrxIcon, alt: 'NgRx', desc: 'NgRx' },
  { id: 12, image: jestIcon, alt: 'Jest', desc: 'Jest' },
  { id: 13, image: typescriptIcon, alt: 'Typescript', desc: 'Typescript' },
  { id: 14, image: sassIcon, alt: 'Sass', desc: 'Sass' },
  { id: 15, image: ionicIcon, alt: 'Ionic', desc: 'Ionic' },
];

export const BACKEND_SKILLS: CardModel[] = [
  { id: 1, image: javaIcon, alt: 'Java', desc: 'Java' },
  { id: 2, image: springIcon, alt: 'Spring', desc: 'Spring boot' },
  { id: 3, image: mavenIcon, alt: 'Maven', desc: 'Apache Maven' },
  { id: 4, image: gradleIcon, alt: 'Gradle', desc: 'Gradle' },
  { id: 5, image: nodeIcon, alt: 'NodeJs', desc: 'NodeJs' },
  { id: 6, image: expressIcon, alt: 'Express', desc: 'Express' },
  { id: 7, image: nestIcon, alt: 'Nest', desc: 'Nest' },
  { id: 8, image: awsIcon, alt: 'AWS', desc: 'Amazon Web Services' },
  { id: 9, image: dockerIcon, alt: 'Docker', desc: 'Docker' },
  { id: 10, image: jenkinsIcon, alt: 'Jenkins', desc: 'Jenkins' },
  { id: 11, image: firebaseIcon, alt: 'Firebase', desc: 'Firebase' },
  { id: 12, image: stripeIcon, alt: 'Stripe', desc: 'Stripe' },
];

export const OTHER_SKILLS: CardModel[] = [
  { id: 1, image: gitIcon, alt: 'Git', desc: 'Git' },
  { id: 2, image: huskyIcon, alt: 'Husky', desc: 'Husky' },
  { id: 3, image: mongodbIcon, alt: 'MongoDB', desc: 'MongoDB' },
  { id: 4, image: mariadbIcon, alt: 'MariaDB', desc: 'MariaDB' },
  { id: 5, image: postgresqlIcon, alt: 'PostgreSQL', desc: 'PostgreSQL' },
  { id: 6, image: markdownIcon, alt: 'Markdown', desc: 'Markdown' },
  { id: 7, image: jsonIcon, alt: 'JSON', desc: 'JSON' },
  { id: 8, image: yamlIcon, alt: 'Yaml', desc: 'Yaml' },
  { id: 9, image: terminalIcon, alt: 'Terminal', desc: 'Terminal' },
  { id: 10, image: linuxIcon, alt: 'Linux', desc: 'Linux' },
  { id: 11, image: dartIcon, alt: 'Dart', desc: 'Dart' },
  { id: 12, image: flutterIcon, alt: 'Flutter', desc: 'Flutter' },
  { id: 13, image: swiftIcon, alt: 'Swift', desc: 'Swift' },
];
