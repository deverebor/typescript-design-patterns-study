# TypeScript design patterns study

> Playground for studying design patterns, solid principles, GoF, testing and more with TypeScript

## Index

- [TypeScript design patterns study](#typescript-design-patterns-study)
  - [Index](#index)
    - [Introduction](#introduction)
      - [Folder structure](#folder-structure)
    - [Running App](#running-app)
    - [Using the project](#using-the-project)
      - [SOLID](#solid)
      - [TestPratice](#testpratice)
      - [GoF](#gof)

### Introduction

This repo has been created to study design patterns, solid principles, GoF, testing and more with TypeScript.

#### Folder structure

All topics are in the `src` folder, separated by they topic. All topic has an `README.md` file and his sub topics as well.

### Running App

To install follow these steps:

> Clone the repo

```zsh
git clone git@github.com:deverebor/typescript-design-patterns-study.git
```

> Enter the repo directory

```zsh
cd typescript-design-patterns-study
```

> Install the dependencies

```zsh
npm i
```

### Using the project

Follow these steps:

#### [SOLID](src/SOLID/)

- npm run start:srp - single responsibility principle
- npm run start:ocp - open closed principle
- npm run start:lsp - liskov substitution principle
- npm run start:isp - interface segregation principle
- npm run start:dip - dependency inversion principle
- npm run start:legacy

#### [TestPratice](src/TestPratice/)

- npm run test - test the project
- npm run test:silent - silent with watch test
- npm run test:coverage - to generate coverage report

#### [GoF](src/GOF/)

- creational
  - [Singleton](src/GOF/creational/singleton/) - npm run creational:singleton
  - [Builder](src/GOF/creational/builder/) - npm run creational:builder

> Initialize the project you want

```zsh
npm run start:dip
```
