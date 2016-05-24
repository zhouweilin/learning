#### 1. install
```
sudo yum install httpd 
```
#### 2. Allow Apache Through the Firewall
Allow the default HTTP and HTTPS port, ports 80 and 443, through firewalld:    
```
sudo firewall-cmd --permanent --add-port=80/tcp
sudo firewall-cmd --permanent --add-port=443/tcp
sudo firewall-cmd --reload
```
#### 3. Configure Apache to Start on Boot
start Apache
```
sudo systemctl start httpd
```
Be sure that Apache starts at boot
```
sudo systemctl enable httpd
```
To check the status of Apache
```
sudo systemctl status httpd
```
To stop Apache
```
sudo systemctl stop httpd
```
#### 4. Modules
To check Loaded Modules
```
sudo httpd -M
```






