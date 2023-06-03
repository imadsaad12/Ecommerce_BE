Extensions you should install : 
1. Prettier
2. styled-components
3. Material Icon
4. ES7+ React/Redux/React-Native snippets 

How we are going to create tasks:
1. Go to Issues tab in github
2. Click on new issue
3. add issue description
4. assign issue to developer by clicking on assignees on right list
5. when task is finished click on close issue button in the bottom 


How we are going to merge changes done on you branch to master branch:
1. Create branch with name with the following convention :  TASK-<NUMBER>/<TASK-TITLE> , ex: TASK-132/add-search-bar-component
2. Create PR (check PR topic) with the following description :
    a. what was done
    b. link to BackEnd PR if exist
    c. how to test
    d. Add team members in Reviewers section
3. Any one of the team could pick the PR and review it (unless you want specific member to review it)
4. Reviewer will pull the branch, test it, put comments if something is not working as mentioned in PR and finally will either request changes or approve,
   if PR approved will merge it else will address comments then ask for another review

  ********************** PR example : https://github.com/imadsaad12/IBH_Portfolio/pull/1  ************************



What is Pull Request(PR) :
1. Pull requests let you tell others about changes you've pushed to a branch in a repository on GitHub.
   So whenever you create a PR it make it easier to the reviewer to compare your changes with master branch by looking on green section(as you can see in the example https://github.com/imadsaad12/IBH_Portfolio/pull/1)

How to create PR : 
1. Once you finished your task you have to :
    a. save your change
    b. go to master branch pull latest changes
    c. go back to you branch , merge your branch with master and fix conflict if exist
2. Go to Pull Request branch in https://github.com/imadsaad12/IBH_Portfolio
3. Click on  New pull request
4. Click on compare and pull request
5. write PR description as mentioned in (How we are going to merge changes done on you branch to master branch)

How to review PR : 
1. create branch on your machine with same PR branch name
2. Pull changes from branch
3. test


Git tips : 
1. Add new remote (do this command only when you pull the project from github) :
    a. git remote add origin https://github.com/imadsaad12/IBH_Portfolio.git
3. create branch : git checkout -b <BRANCH_NAME>
3. commit change: 
    a. git add .
    b. git commit -m 'short message describe what done'
4. push change : git push origin <BRANCH_NAME>
5. pull change : git pull origin <BRANCH_NAME>
6. merge your branch with master : git merge master
7. go to another branch : git checkout <BRANCH_NAME>
8. git list of all local branches on your machine : git branch



