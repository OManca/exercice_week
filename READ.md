cd ~/git/
mkdir my_app_git_workflow
cd ~/git/my_app_git_workflow
git init
git config --local user.email"ophelie.manca@pop.eu.com"
touch index.html
git add .
git commit -m 'create index.html'
touch styles.css
git add .
git commit -m 'create styles.css'
touch script.js 
git add
git commit -m 'create script.js'
mkdir images
git checkout -b feature/nav-bar/
nano index.html
git add .
git commit -m 'create html for nav-bar'
nano styles.css
git add .
git commit -m 'create css for navbar'
nano script.js
git add .
git commit -m 'create js for navbar'
git checkout master
git merge feature/nav-bar
cat index.html / css / script
git status
git checkout -b feature/footer
nano index.html
git add .
git commit -m 'add html for footer'
nano styles.css
git add .
git commit -m 'add css for footer'
nano script.js
git add .
git commit -m 'add js for footer'
git status
git checkout -b feature/content/
nano index.html
git add .
git commit-m 'add html fort content'
nano styles.css
git add .
git commit -m 'add css for content'
git checkout master
git merge feature/footer
git merge feature/content

touch .gitignore
nano .gitignore
.idea/
.vscode/
secret.yml
database.yml
.DS_Store
git add .
git commit -m 'gitignore'
touch README.md
nano README.md
git add .
git commit -m 'create readme'

