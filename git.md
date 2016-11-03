#### * create empty remote repository
```
git init --bare repositoryName.git
```
Git就会创建一个裸仓库，裸仓库`没有工作区`，因为服务器上的Git仓库纯粹是为了共享，所以不让用户直接登录到服务器上去改工作区，并且服务器上的Git仓库通常都以`.git`结尾
#### * add remote
```
git remote add [originName] user@server:/path/to/repo.git
```
为仓库添加远程裸仓
```
git push -u [originName] master 
```
远程裸仓库添加成功后，就可以把本地的仓库推送到远程的仓库中，`-u` 可以把本地master 和 远程 master分支关联起来，以便在以后的推送中免去分支名称
