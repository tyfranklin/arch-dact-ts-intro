# Build an Online Portfolio with TypeScript

- [Introduction](#introduction)
- [1: Setup a dev environment](#1-setup-a-dev-environment)
  - [1.1: Required software](#11-required-software)
    - [1.1.1: Install Git](#111-install-git)
    - [1.1.2: Install NodeJS](#112-install-nodejs)
  - [1.2: Optional software](#12-optional-software)
    - [1.2.1: Pick a terminal emulator](#121-pick-a-terminal-emulator)
    - [1.2.2: Pick an editor](#122-pick-an-editor)
    - [1.2.3: Pick a package manager](#123-pick-a-package-manager)
  - [1.3: Version control](#13-version-control)
    - [1.3.1: Create a Github account](#131-create-a-github-account)
    - [1.3.2: Create an SSH key](#132-create-an-ssh-key)
    - [1.3.3: Add your SSH key to Github](#133-add-your-ssh-key-to-github)
- [2: Setup a project](#2-setup-a-project)
  - [2.1: Setup a boilerplate app](#21-setup-a-boilerplate-app)
    - [2.1.1: Create React app](#211-create-react-app)
    - [2.1.2: Add project to Github](#212-add-project-to-github)
  - [2.2: Configure deployment](#22-configure-deployment)
    - [2.2.1: Prepare for deployment to Github Pages](#221-prepare-for-deployment-to-github-pages)
  - [2.3: Deploy the site to Github pages](#23-deploy-the-site-to-github-pages)
- [3: Develop the site](#3-develop-the-site)
  - [3.1: Choose a UI framework](#31-choose-a-ui-framework)
  - [3.2: Make a homepage](#32-make-a-homepage)
  - [3.3: Add navigation](#33-add-navigation)
  - [3.4: Add a Navigation Menu](#34-add-a-navigation-menu)
  - [3.5: Add a Resume page](#35-add-a-resume-page)
  - [3.6: Add a Projects page](#36-add-a-projects-page)
- [4: Customize (guided experimentation)](#4-customize-guided-experimentation)
  - [4.1: How would you change the default colors?](#41-how-would-you-change-the-default-colors)
  - [4.2: How about a page transition?](#42-how-about-a-page-transition)
  - [4.3: Can we add social media buttons?](#43-can-we-add-social-media-buttons)
  - [4.4: Can we add a Contact page?](#44-can-we-add-a-contact-page)
- [Conclusion](#conclusion)
- [Appendix](#appendix)
  - [Solution: 4.1](#solution-41)
  - [Solution: 4.2](#solution-42)
  - [Solution: 4.3](#solution-43)
  - [Solution: 4.4](#solution-44)

# Introduction

The following will take you step-by-step through the process of creating and
deploying a basic, modern web app. The product in this case is a developer
portfolio.

![site result example](image_000.png)

Many steps can be altered or skipped entirely, depending on your existing setup,
expertise and/or preferences, but this lesson is geared toward beginners. I will
assume we’re starting from scratch and will aim for simplicity. Several steps
may eschew simplicity to familiarize you with current tools and/or processes.

This lesson will only cover
[front-end](https://en.wikipedia.org/wiki/Front-end_web_development) development
with [React](https://reactjs.org/). Lesson 2 will cover full-stack development
using the same approach with [Express](https://expressjs.com/) and
[Mongo](https://www.mongodb.com/). Lesson 3 will focus on
[web services](https://en.wikipedia.org/wiki/Web_service) and
[DevOps](https://aws.amazon.com/devops/what-is-devops/) with
[Azure](https://azure.microsoft.com/en-us/).

# 1: Setup a dev environment

Some of the following setup isn’t strictly necessary to complete this lesson,
but will be necessary for future lessons and will prepare your system for future
development.

## 1.1: Required software

While there are [alternatives to Git](https://stackoverflow.com/q/995636), they
are not as common these days. You should learn Git. To a lesser but still
notable degree, Node is popular in the web dev sphere. For this lesson, both are
required.

### 1.1.1: Install Git

Download installer [here](https://git-scm.com/downloads). Yours is likely a
64-bit system. Use defaults but, if you’re on Windows, make sure to choose "use
git and optional unix tools."

![site result example](image_111.png)

If you forget the step above, you will later receive a "command not found"
message. To fix,
[open your terminal](https://www.howtogeek.com/235101/10-ways-to-open-the-command-prompt-in-windows-10/)
and run `SETX PATH "%PATH%;C:\Program Files\Git\usr\bin"` to update your PATH
variable, or
[edit it in system settings](https://www.java.com/en/download/help/path.xml).

To confirm Git installed successfully, open your terminal, type `git --version`
and press enter. A number should display.

### 1.1.2: Install NodeJS

Download installer [here](https://nodejs.org/en/). The update PATH option should
be checked by default, but if for some reason it doesn't update you can use
where node to get Node’s path on disk and `SETX PATH` like above, or just run
the installer again with the box checked.

ℹ️Note: if you’re on a Unix (Mac or Linux) system, using
[NVM](https://github.com/nvm-sh/nvm#installation-and-update) instead of the
default installer is highly recommended.

To confirm Node installed successfully, open your terminal, type
`node --version` and press enter. A number should display.

## 1.2: Optional software

### 1.2.1: Pick a terminal emulator

You can always use the stock terminal/command-prompt, and some are decent like
Powershell (Windows) and Gnome terminal (most Linux distros), but most
developers end up using alternatives for the extra features and customizability.

Popular options:

- Windows: [Cmder](https://cmder.net/)
- Mac: [iTerm](https://www.iterm2.com/)
- Linux: [Tilix](https://github.com/gnunn1/tilix)

ℹ️Note: Microsoft
[just announced](https://www.theverge.com/2019/5/6/18527870/microsoft-windows-terminal-command-line-tool)
a better stock terminal for Windows 10 which might be out soon, so that might be
worth a look. Also, for further terminal customization in \*nix environments, I
recommend
[oh-my-zsh](https://github.com/robbyrussell/oh-my-zsh/wiki/Installing-ZSH).

### 1.2.2: Pick an editor

There’s a lot of options here, including just a stock text editor, however I
recommend [Visual Studio Code](https://code.visualstudio.com/) as a popular and
relatively beginner-friendly option that will familiarize you with
[IDEs](https://en.wikipedia.org/wiki/Integrated_development_environment).

For this lesson you don’t need any extensions, and you can explore the
[extension market](https://marketplace.visualstudio.com/vscode) at your leisure,
but I recommend finding yourself a linter (like
[TSLint](https://marketplace.visualstudio.com/items?itemName=ms-vscode.vscode-typescript-tslint-plugin))
or
[ESlint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
and a code formatter (like
[Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)).

If you’d like to try something different,
[here are some other common editors](https://designrevision.com/best-code-editor/).
ℹ️Note: if you go with [Vim](https://www.vim.org/), be prepared for a steep
learning curve. [This game](https://vim-adventures.com/) is a fun way to start
learning.

### 1.2.3: Pick a package manager

Basically this is either [Yarn](https://yarnpkg.com/en/) or
[NPM](https://www.npmjs.com/). In this lesson I’ll use Yarn but you’ll see NPM
used in other tutorials. To install yarn, just `npm i -g yarn`.

If you want to use npm just use npm in place of yarn in any of the commands
below.

You’ll also see the use of npx below, which isn’t a typo. It’s a special npm
command for temporarily installing and eXecuting libraries you intend to only
use once.

## 1.3: Version control

This makes it much easier to manage changes in your project, especially with
multiple developers involved. Think of it like a thumbdrive that remembers
exactly how its files have been changed over time. Even for small projects like
the one in this lesson, Version Control is always recommended for project source
code.

The SSH setup below is not strictly required, since you could use the HTTPS
protocol and authenticate in the terminal, however you’ll later need SSH for a
variety of other tasks, and employers will expect you’re familiar with it.

### 1.3.1: Create a Github account

Simple enough: go to the [join page](https://github.com/join) and follow the
instructions, but a quick note regarding username choice:

Some people argue it’s better to use your real name as your username if you
intend to use it as part of your portfolio, sort of like using your name in the
email address you put on your resume instead of your old AIM handle. I never
gave it much thought, personally, but later in this lesson we will host your
site for free at _username.github.io_ so bear that in mind when choosing your
username.

### 1.3.2: Create an SSH key

The steps for this vary depending on your operating system.

- Windows: Use
  [PUTTY](https://docs.joyent.com/public-cloud/getting-started/ssh-keys/generating-an-ssh-key-manually/manually-generating-your-ssh-key-in-windows),
  [OpenSSH](https://docs.microsoft.com/en-us/windows-server/administration/openssh/openssh_install_firstuse),
  or [Git Bash](https://gitforwindows.org/)

- Mac and Linux: use
  [ssh-keygen ](https://docs.joyent.com/public-cloud/getting-started/ssh-keys/generating-an-ssh-key-manually/manually-generating-your-ssh-key-in-mac-os-x)

Without going into
[further detail re: SSH](https://www.hostinger.com/tutorials/ssh-tutorial-how-does-ssh-work),
just know that it’s a way of protecting traffic between computers on the web,
and what the steps above do is create a public key and a private key. The
private key stays on your machine and shouldn’t be shared with anyone. The
public key is given to the service you want to communicate with.

### 1.3.3: Add your SSH key to Github

Follow
[these steps](https://help.github.com/en/articles/adding-a-new-ssh-key-to-your-github-account).

# 2: Setup a project

## 2.1: Setup a boilerplate app

In this section we will generate a
[boilerplate](https://en.wikipedia.org/wiki/Boilerplate_code) React app.
[React](https://reactjs.org/) is a framework created by Facebook that’s fairly
popular right now.

There will likely be some new, trendy framework in a few years, but the
principles and patterns of
[MV\*](https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller)
architecture,
[statefulness](<https://en.wikipedia.org/wiki/State_(computer_science)>), and
[componentization](http://blogs.windriver.com/koning/2006/09/components.html)
aren’t going anywhere and are transferable concepts.

### 2.1.1: Create React app

[Create react app](https://github.com/facebook/create-react-app) is a project
boilerplate generator which abstracts out a lot of typical project complexity.
In our next lesson we will see what a more DIY approach looks like.

Navigate to your project directory using cd (e.g. `cd ~/projects`). If this is
your first project, you can `mkdir project`s and `cd projects`.

Run `npx create-react-app username.github.io --typescript` where "username" is
your GitHub username.

Once complete, navigate into this directory (e.g. `cd my-app`) and `git log` to
see that a git repo was initialized by CRA on your behalf. To escape the log
view, press `Q`.

To view the boilerplate app in its current state, run yarn start and the app
should serve up locally and open in your browser.

### 2.1.2: Add project to Github

This step ensures your code changes are backed up.

Follow the steps on
[this page](https://help.github.com/en/articles/creating-a-new-repository) to
create a remote repo on Github and make sure to not check the box to initialize
the repo (if you accidentally initialize, it’s easy to
[delete](https://help.github.com/en/articles/deleting-a-repository) and recreate
the repo).

Next, [add the remote](https://help.github.com/en/articles/adding-a-remote) URL
to your local repo by running
`git remote add origin git@github.com:username/username.github.io.git` where
"username" is your username.

Finally, push your local repo to Github with
`git push --set-upstream origin master`. If you refresh your repo page, you
should now see your latest files and commits.

## 2.2: Configure deployment

### 2.2.1: Prepare for deployment to Github Pages

Install the [gh-pages](https://www.npmjs.com/package/gh-pages) library with yarn
add gh-pages.

Open _package.json_ which is at the root of the project and add the property
"homepage" to point to a Github pages site like the following:

```JSON
{
  ...
  "homepage": "http://username.github.io"
  ...
}
```

If you visit this URL in the browser now, there won’t be anything to see.

Also, add two lines to "scripts"

```JSON
{
  ...
  "scripts": {
    ...
    "predeploy": "yarn run build",
    "deploy": "gh-pages -d build",
    ...
  },
  ...
}
```

These lines define [npm script](https://docs.npmjs.com/misc/scripts) aliases,
which help to simplify and organize commands and scripting in your project. For
example, the command `yarn run deploy` now executes the command
`gh-pages -d build`, however because "predeploy" is defined, it runs
`yarn run build` prior to deploying, which is the default build command for your
app. To summarize, now whenever you `yarn run deploy`, your app will build and
deploy to Github Pages.
