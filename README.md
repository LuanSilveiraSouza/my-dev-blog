<h1 align="center" style="display:flex;align-items:center;justify-content:center;">
My Dev Blog
</h1>

<p  align="center">
  <a  href="https://github.com/LuanSilveiraSouza/my-dev-blog/commits/master">
    <img  alt="GitHub last commit"  src="https://img.shields.io/github/last-commit/LuanSilveiraSouza/my-dev-blog?color=282A36&style=for-the-badge">
  </a>

  <a  href="https://app.netlify.com/sites/luansouza-dev/deploys">
    <img  alt="Netlify Status"  src="https://api.netlify.com/api/v1/badges/f3ebc12c-a273-477e-bf0c-96e1591e7fbf/deploy-status">
  </a>
</p>

# Sumary

* [Introduction](#paperclip-introduction)
* [How to Run](#rocket-how-to-use)

# Introduction

As the name says, this project contains the source code for my personal blog and the articles
that I wrote as well. 

The blog is a simple HTML + CSS website. It is statically generated with the help of Parcel, who
builds the article pages based on the Markdown articles that are inserted in a template HTML. 

I have created a custom Parcel plugin to handle the Markdown files and mount the HTML files that needs
to be builded before building the actual website. Because
of this, the project uses Yarn Workspaces to share dependencies between the plugin and the app and
to run commands that interact with both with more ease. 

# How to Run

```bash
# Install dependencies
$ yarn

# Build both projects (/dist folder)
$ yarn build

# Clean dist and cache folder
$ yarn clean

# Start app in dev mode
$ yarn app start

# Serve app build in localhost
$ yarn app serve

# Build app only 
$ yarn app build

# Build plugin only
$ yarn markdown build
```
