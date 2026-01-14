
Package Managers
A package manager is a tool that helps developers install, update, remove, and manage external libraries (packages)*used in a project. Instead of writing everything from scratch, developers can reuse existing code written by others.
If you want to make HTTP requests in Node.js, you can install a ready-made package like `axios` using a package manager instead of writing your own HTTP logic.
Why do we need package managers in backend development?
Backend applications depend on many third-party libraries such as:
1 Frameworks (Express)
2 Database drivers (Mongoose, pg)
3 Utility libraries (bcrypt, dotenv)

Package managers help to:
1 Save development time
2 Maintain consistent versions of libraries
3 Easily share and run projects on different machines



NPM (Node Package Manager)
NPM (Node Package Manager) is the default package manager for Node.js. It comes automatically installed when Node.js is installed.

It provides:
Access to thousands of open-source packages
Tools to manage project dependencies
Node.js applications heavily rely on external packages
It simplifies installing and updating dependencies
It helps manage project configuration and scripts
NPM:

Installs required packages using `npm install`
Keeps track of dependencies in `package.json`
Locks exact versions in `package-lock.json`


c. Backend Project Initialization
```bash
npm init
```
This command initializes a new Node.js project.
`npm init`- Starts an interactive setup
`npm init -y`-Skips all questions


d. Files and Folders Created After Project Initialization

package.json
The main configuration file of a Node.js project
Contains all installed project dependencies
This folder holds the actual code of all installed packages.

 package-lock.json--Records the exact versions of installed dependencies
* Ensures consistent installations across all environments
