# Development

## Why does this project exist?
This project exists to create a beginner-friendly, community-oriented,
free software licensed language learning application. If you want to learn more
about LibreLingo's background, [I recommend reading my article](https://dev.to/kantord/why-i-built-librelingo-280o).

## Project structure

### Clickable flow chart
``` mermaid
graph LR
 YAML[YAML course] --> LOAD
 LOAD[librelingo-yaml-loader] --> EXPORT[librelingo-json-export]
 EXPORT -->|JSON files| APP
 LOAD -->|TODO| AUDIO
 LOAD -->|TODO| IMAGE
 AUDIO[Audio files] --> APP
 IMAGE[Image files] --> APP
 TYPES[librelingo-types] --> LOAD
 UTILS[librelingo-utils] --> LOAD

 click APP "https://github.com/kantord/LibreLingo/tree/main/apps/web"
 click EXPORT "https://pypi.org/project/librelingo-json-export/"
 click UTILS "https://pypi.org/project/librelingo-utils/"
 click TYPES "https://pypi.org/project/librelingo-types/"
 click IMAGE "https://github.com/kantord/LibreLingo/tree/main/apps/web/static/images"
 click AUDIO "https://github.com/kantord/LibreLingo/tree/main/apps/web/static/voice"
 click LOAD "https://pypi.org/project/librelingo-yaml-loader/"
 click YAML "https://github.com/kantord/LibreLingo/tree/main/courses"
```

## Setting up the development environment

Clone the repository:

```sh
git clone git@github.com:kantord/LibreLingo.git
```

Move into the repo directory:

```sh
cd LibreLingo
```

### Web app

You will need [Node](https://nodejs.org/en/). Note that this project is not yet compatible with Node v16.

Install dependencies:

```sh
yarn set version classic
yarn
```

Start the development server:

```sh
yarn web dev
```

Now you should be able to see your app on [http://localhost:3000/](http://localhost:3000/)

### Exporting a course from YAML

You will need [Poetry](https://python-poetry.org/).

Install dependencies at the top level and for the app:
```sh
poetry install
cd apps/librelingo_yaml_loader
poetry install
cd ../..
```

Export a course:
```sh
./scripts/exportYamlCourse.sh <course directory name>
```

## Setting up Semaphore CI in a clone

In order for Semaphore CI to correctly operate, you will need to set up certain secrets.

This might not be necessary for you in all cases, but it cannot be avoided if you want to fully fork the repo, or work on CI configuration related tasks.

[Consult this page to read about setting up secrets in Semaphore CI.](https://docs.semaphoreci.com/essentials/using-secrets/)

Here's a list of the tokens you need to set up. Each of them is a link to a page explaining how to obtain the token:

- [GH_TOKEN](https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token)
- [KNAPSACK_PRO_TEST_SUITE_TOKEN_CYPRESS](https://www.npmjs.com/package/@knapsack-pro/cypress#configuration-steps)
- [PERCY_TOKEN](https://docs.percy.io/docs/environment-variables)
