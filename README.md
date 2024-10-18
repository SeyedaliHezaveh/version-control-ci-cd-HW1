
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

Here's a simplified and updated version of the new sections based on your input:
### 5. Resolving Conflicts

During the merging of branches into dev, two conflicts arose. These conflicts were manually resolved.
### 6. Protecting the main Branch

To prevent direct changes to the main branch, branch protection rules were set up in GitHub. With these restrictions, merging other branches into main is only possible through a Pull Request (PR).
### 7. Automated Deployment with GitHub Actions

For automated deployment to GitHub Pages, GitHub Actions and a predefined workflow were used. The deploy.yml file was added under the .github/workflows directory.
### 8. Final Project Deployment

After merging the dev branch into main using a Pull Request, the project was automatically deployed to GitHub Pages.
