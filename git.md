### create empty remote repository
```
git init --bare repositoryName.git
```
Git就会创建一个裸仓库，裸仓库`没有工作区`，因为服务器上的Git仓库纯粹是为了共享，所以不让用户直接登录到服务器上去改工作区，并且服务器上的Git仓库通常都以`.git`结尾
### add remote
```
git remote add [originName] user@server:/path/to/repo.git
```
为仓库添加远程裸仓
```
git push -u [originName] master 
```
远程裸仓库添加成功后，就可以把本地的仓库推送到远程的仓库中，`-u` 可以把本地master 和 远程 master分支关联起来，以便在以后的推送中免去分支名称
### git推送到服务器的git仓库并自动同步到站点目录
在服务器hooks目录下，添加一个post-receive文件，并添加相关语句，赋予post-receive可执行权限，使其可以执行里面的shell脚本    
使用cat语句如下：
```
cat > post-receive <<EOF
>#!/bin/bash
>git --work-tree=/path/to/webroot checkout -f
>EOF

$ chmod +x post-receive   //赋予post-receive可执行权限
```
使用vim则直接在post-receive文件中输入下面内容：
```bash
#!/bin/bash
git --work-tree=/path/to/webroot  checkout -f
```
