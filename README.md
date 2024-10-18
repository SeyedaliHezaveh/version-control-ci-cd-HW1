
# Version Control, CI/CD - HW1

**Report on Frontend Development and Deployment to GitHub Pages**

This report outlines the implementation details of a static frontend application using the ReactJS framework and its automated deployment to GitHub Pages via GitHub Actions. The project utilizes git commands for version control, branching, and conflict resolution. Additionally, Continuous Integration/Continuous Deployment (CI/CD) has been set up using GitHub Actions to automatically deploy the project on GitHub Pages.

## Implementation Steps

### 1. Creating a GitHub Repository
A new repository was created on GitHub to host the project.

### 2. Installing React and Creating the Project
The React project was initialized using the following command:

```bash
npx create-react-app my-static-site
```

### 3. Setting Up .gitignore
A .gitignore file was added to the repository with the following content to exclude unnecessary files and directories (e.g., node_modules):

```bash
node_modules/
build/
.DS_Store
```

### 4. Branch Overview

Here is a list of the main branches created during the project:

- **main**
- **dev**
- **feature/item-list**
- **feature/footer**
- **feature-header**
- **initialize**
  - Status: Initial branch for setup
