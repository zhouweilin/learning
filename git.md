####create empty remote repository
```
git init --bare repositoryName.git
```
Git就会创建一个裸仓库，裸仓库`没有工作区`，因为服务器上的Git仓库纯粹是为了共享，所以不让用户直接登录到服务器上去改工作区，并且服务器上的Git仓库通常都以`.git`结尾
