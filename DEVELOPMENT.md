# Development

To develop within this repository you should have the following installed.

- node v16
- yarn v1
- git
- code editor

## Setting Up Your Environment

To start development, you have to clone the repository onto your local machine.

```shell
git clone git@github.com:jblevins1991/styless-react.git
```

Once that is finished, you will need to understand how development is done on this 
repository.

### Git Workflow

This repository uses trunk based development. There aren't release braches or anything 
of that nature. We utilize a lot of GitHub Action workflows to ensure that we are 
delivering quality code.

Our automated checks include the following:
- run unit tests
- run eslint
- run snyk (coming soon...)

### Git Hooks

To make my lazy life easier, I implemented git hooks to run the tests, linter, and code 
formatter on push. If any of those fail, the push is aborted until the outstanding issues 
are fixed and commited.

## Libaries Used

The following libraries are non-infrastructure based libraries that you will be expected 
to work with.

- [react]() - UI library
- [react-dom]() - UI DOM library
- [classnames]() - class appending library
- [jest]() - test runner
- [@testing-library/react]() - UI testing library
- [@testing-library/user-event]() - User Event Simulation Library