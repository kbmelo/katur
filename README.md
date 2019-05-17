# Katur
## Accounts
+ Heroku (**login:** heroku@citi.org.br **password:** trocaocartao_19)
+ Firebase (add here)
+ RegistroBR (add here)(**login:** add here **password:** add here)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You will need to have nodemon installed on your machine. For that, simply run:

```
npm install -g nodemon
```

### Installing

To run the project for the **first** time you must follow this steps:

Clone the GitHub repository

```
git clone https://github.com/CITi-UFPE/renata-onepage.git
```

Enter the project folder

```
cd katur
```

Install the dependencies of the front-end and back-end

```
npm run i
```

## Running the project

create **.env** file and copy

```
add .env code here
```

Build the React app

```
npm run build
```

Start both servers

```
npm start
```

Now, you can see the React app running at [localhost:3000](http://localhost:3000) and the Node API running at [localhost:3001](http://localhost:3001)

## Deployment

The project is deployed on Heroku with continuous deploy of branch _master_.

Production app: <add here />

## Built With

* **Node** - _for back-end_.
* **React** - for _front-end_.

## GitHub

### Branches
They can be:
+ master
+ develop
+ feature
+ bugfix
+ hotfix
+ release

Their names must follow this template: `feature/branch-name`

### Commits
Must begin with the name of the branch you developed on, following the model: _“Feature(name-of-feature) rest of commit…”._

Must be simple and show briefly what you just did.

Ex: `git commit -m “Feature(banner-parallax) Added the parallax effect to the background”`

### Pull Requests
First, proceed with _rebase_:
1. _commit_ the changes on your branch
2. Go to the original branch (develop ou master) with `git checkout develop` (or master)
3. Run `git pull`
4. Go back to your branch with `git checkout "your-branch"`
5. Run `git rebase develop` (or master)
6. Follow the steps to conclude the _rebase_, solving conflicts and running `git add .` and then `git rebase --continue`
7. Whan finished rebasing, run `git push -f origin "your-branch"`. Now your Pull Request can be opened on GitHub.

If possible, use this template for the pull request body:
```
### Issue Name
**What I did:**

- First thing I did...

- Second thing I did...

**How I did:**

- Brief notes on how the issue was solved (technically)
