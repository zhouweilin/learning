## About TCP/IP
####标准组织和RFC
* __IAB(Internet Architecture Board 网络架构委员会):__设置Internet的策略和负责TCP/IP标准未来发展的理事会
* __IEIF(The Internet Engineering Task Force互联网工作任务组):__研究和管辖TCP/IP协议簇工程任务的组织
* __IRTF(Internet Research Task Force互联网研究任务组):__IAB的分支机构，致力于长期的研究    

*Address: [RFC](http://www.rfc-editor.org/), [IAB](https://www.iab.org/), [IETF](http://www.ietf.org/), [IRTF](https://irtf.org/)*

####ICP/IP 处理的核心问题
* 逻辑编址(ARP, RARP)
* 路由选择
* 名称解析(DNS[Domain Name System])
* 错误控制和流量控制
* 应用支持


###TCP/IP protocols
* DHCP(Dynamic Host Configuration Protocol)     
> 集中管理、分配IP地址，使网络中的主机动态地获得IP地址、网关地址、DNS服务器地址等信息   

* SSDP(Simple Service Discovery Protocol)    
> 提供在局部局部网络里面发现设备的几只

* ICMP(Internet Control Message Protocol)   
> TCP/IP协议族的一个子协议,用于在IP主机、路由器之间传递控制消息

* ARP(Address Resolution Protocol)
> 地址解析协议,把逻辑地址解析成相应的物理地址（MAC)   

* RARP(Reverse Address Resolution Protocol)
> 逆地址解析协议,把物理地址解析成相应的逻辑地址