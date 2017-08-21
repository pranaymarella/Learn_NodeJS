# Learning NodeJS NPM

## NPM

NPM stands for Node Packet Manager, which helps manage Node modules and packages. You can find thousands of free packages to download and use [here](www.npm.js.com).

## Node Package

A Node Package contains all of the files we would need for a module. Like we stated before, module are similar to javascript libraries and we can use these in our projects to speed up development time.

## How to Download a Node Package

- Open a Command Line Interface which has node installed (such as GitBash)
- Use command `npm install ...` where '...' is replaced by name of the node package you'd like to install
- The first time you install a node package, a folder called 'node_modules' will be created in your user root directory and all subsequent packages will be placed there

## Using Node Packages after Installation

Once a node package is installed using the npm, you simple use the `require(NAME_OF_MODULE_INSTALLED)` method to use it in your code.
