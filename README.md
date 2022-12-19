# Difference Calculator
### Hexlet tests and linter status:
[![Actions Status](https://github.com/EgorovArtem34/frontend-project-46/workflows/hexlet-check/badge.svg)](https://github.com/EgorovArtem34/frontend-project-46/actions)
[![Maintainability](https://api.codeclimate.com/v1/badges/16be515c33a54715a995/maintainability)](https://codeclimate.com/github/EgorovArtem34/frontend-project-46/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/16be515c33a54715a995/test_coverage)](https://codeclimate.com/github/EgorovArtem34/frontend-project-46/test_coverage)
[![Node CI](https://github.com/EgorovArtem34/frontend-project-46/actions/workflows/nodejs.yml/badge.svg)](https://github.com/EgorovArtem34/frontend-project-46/actions/workflows/nodejs.yml)

Difference calculator is a cli program, which compares two configuration files and shows a difference.

Utility features:
1. Support for different input formats: yaml, json
2. Report generation in the form of plain text, stylish and json

Formatter types:
+ Plain - will show each difference case in a single line, discribing the difference
+ Json - show you the difference in JSON format
+ Stylish -  show the whole structure of a file and all the differences will be marked with "+" or "-"
## Installation
Make sure you have Node.js and npm installed run the following commands:
```shell
node -v
npm -v 
```
Node.js `v13.0.0` or higher must be installed to use difference calculator.
Then install:
1. Clone the repository `git clone https://github.com/EgorovArtem34/frontend-project-lvl46.git`
2. Go to repository directory `cd frontend-project-lvl46`
3. install dependencies `make install`
4. install the package `make link`
## Usage
For get help output use `gendiff -h`
```shell
Usage: gendiff [options] <filepath1> <filepath1>

Compares two configuration files and shows a difference. 

Options:
  -V, --version        output the version number
  -f, --format <type>  output format (default: "stylish")
  -h, --help           display help for command
  ```
## Compare flat .json files:
[![asciicast](https://asciinema.org/a/5zGGbrgTmz6VvQW7Bis1xqPdW.svg)](https://asciinema.org/a/5zGGbrgTmz6VvQW7Bis1xqPdW)
## Comparing files using a stylish formatter:
[![asciicast](https://asciinema.org/a/JFdNjLOxgCKdJH7qVtrYEFJp8.svg)](https://asciinema.org/a/JFdNjLOxgCKdJH7qVtrYEFJp8)
## Comparing files using a plain formatter:
[![asciicast](https://asciinema.org/a/UihRc85K3XMIxWq2p7l8imPg8.svg)](https://asciinema.org/a/UihRc85K3XMIxWq2p7l8imPg8)
## Comparing files using a JSON formatter:
[![asciicast](https://asciinema.org/a/zzqkh6fQPmQJgvN2vK8um5xUk.svg)](https://asciinema.org/a/zzqkh6fQPmQJgvN2vK8um5xUk)