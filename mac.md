###使用mac ssh远程登录服务器
如果在mac下没有以`.ssh`为后缀的私有key，则得从在windows上用puttygen 把`.ppk`后缀的私有key转换成`.ssh`后缀的私有key.   
> 打开puttygen.exe，读入ppk文件，点击conversions菜单，选择Openssh，把文件存为`file_name.ssh`.   
> 然后把该文件转到mac中，改变`file_name.ssh`的权限，可设为 `700`, 在文件所在目录，运行以下命令：      
> chmod 700 file_name.ssh    
> 修改文件访问权限后，通过以下命令，使用ssh 私有key远程登录 服务器：   
> ssh -2 user@ip -i file_name.ssh
