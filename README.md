# ESPP Budget App

A tool to help you calculate how much you save while taking part in your
organization's
[Employee Stock Purchase Plan (ESPP)](https://en.wikipedia.org/wiki/Employee_stock_purchase_plan).

To demo a live version of this app,
[click here](https://espp-budget-app.herokuapp.com/).

<!-- TABLE OF CONTENTS -->

## Table of Contents

- [About the Project](#about-the-project)
  - [Built With](#built-with)
  - [Tested With](#tested-with)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)
- [Acknowledgements](#acknowledgements)

<!-- ABOUT THE PROJECT -->

## About The Project

[![Budget View][product-screenshot]](assets/screenshot_1.png)

### Built With

- [React](https://reactjs.org/)
- [Redux](https://redux.js.org/)
- [Sass](https://sass-lang.com/)
- [React Router](https://reacttraining.com/react-router/)
- [Node](https://nodejs.org/en/)
- [Express](https://expressjs.com/)

### Tested With

- [Jest](https://jestjs.io/)
- [Enzyme](https://enzymejs.github.io/enzyme/)
- [Redux Mock Store](https://github.com/reduxjs/redux-mock-store)

<!-- GETTING STARTED -->

## Getting Started

### Prerequisites

- npm

```sh
npm install npm@latest -g
```

### Installation

1. Clone the repo

```sh
git clone https://github.com/zhaluza/espp-budget-app.git
```

3. Install NPM packages

```sh
npm i
```

4. Set up your own [OAuth App](https://github.com/settings/developers) on
   Github.

5. For `Homepage URL`, enter `http://localhost:3000`.

6. For `Authorization callback URL`, enter `http://localhost:3000/redirect`.

7. Inside the root directory of your cloned repo, create a file called `.env`.

8. Enter the following credentials from your new Github OAuth app into the file
   like so:

```sh
CLIENT_ID=insert your client id here
CLIENT_SECRET=enter your client secret here
```

<!-- USAGE EXAMPLES -->

## Usage

Boot up the app in dev mode by running the following script:

```sh
npm run dev
```

Want to run the app in production mode? Start up the server with the following
command:

```
npm start
```

You can now access the app at `http://localhost:3000` in your browser.

## Testing

The app's current test coverage consists of unit tests for each of the three
main components. Run tests with the following script:

```
npm test
```

## License

Distributed under the ISC License.
