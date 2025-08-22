# 软考系统架构师：网络协议与端口速记宝典

> 网络协议和端口号是系统架构师考试的高频考点，需要准确记忆各种协议的端口号、传输层协议类型等。本文整理了考试必备的网络协议知识，用颜色标记重点，助您高效备考。

<style>
.highlight-red {
  background-color: #ffebee;
  color: #c62828;
  padding: 2px 6px;
  border-radius: 4px;
  font-weight: bold;
}

.highlight-blue {
  background-color: #e3f2fd;
  color: #1565c0;
  padding: 2px 6px;
  border-radius: 4px;
  font-weight: bold;
}

.highlight-green {
  background-color: #e8f5e8;
  color: #2e7d32;
  padding: 2px 6px;
  border-radius: 4px;
  font-weight: bold;
}

.highlight-orange {
  background-color: #fff3e0;
  color: #ef6c00;
  padding: 2px 6px;
  border-radius: 4px;
  font-weight: bold;
}

.highlight-purple {
  background-color: #f3e5f5;
  color: #7b1fa2;
  padding: 2px 6px;
  border-radius: 4px;
  font-weight: bold;
}

.port-table {
  background-color: #f8f9fa;
  border: 2px solid #dee2e6;
  border-radius: 8px;
  padding: 16px;
  margin: 16px 0;
}

.tcp-box {
  background-color: #e8f4fd;
  border-left: 4px solid #2196f3;
  padding: 12px;
  margin: 16px 0;
  border-radius: 4px;
}

.udp-box {
  background-color: #e8f5e8;
  border-left: 4px solid #4caf50;
  padding: 12px;
  margin: 16px 0;
  border-radius: 4px;
}

.exam-memory {
  background-color: #fff9c4;
  border: 2px solid #fbc02d;
  border-radius: 8px;
  padding: 16px;
  margin: 16px 0;
}

.protocol-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 16px;
  margin: 16px 0;
}

.protocol-card {
  background-color: #f8f9fa;
  border: 1px solid #dee2e6;
  border-radius: 8px;
  padding: 16px;
}

.memory-tip {
  background-color: #f3e5f5;
  border-left: 4px solid #9c27b0;
  padding: 12px;
  margin: 16px 0;
  border-radius: 4px;
}
</style>

## 📋 目录

[[toc]]

## 🌐 网络协议基础知识

### TCP vs UDP 特性对比

<div class="tcp-box">
<strong>🔵 TCP（传输控制协议）</strong>
<ul>
<li><span class="highlight-red">面向连接</span>：三次握手建立连接</li>
<li><span class="highlight-red">可靠传输</span>：确认应答、重传机制</li>
<li><span class="highlight-blue">流量控制</span>：滑动窗口机制</li>
<li><span class="highlight-blue">拥塞控制</span>：避免网络拥塞</li>
<li><span class="highlight-green">适用场景</span>：需要可靠传输的应用</li>
</ul>
</div>

<div class="udp-box">
<strong>🟢 UDP（用户数据报协议）</strong>
<ul>
<li><span class="highlight-red">无连接</span>：直接发送数据</li>
<li><span class="highlight-red">不可靠传输</span>：不保证数据到达</li>
<li><span class="highlight-blue">低开销</span>：头部简单，效率高</li>
<li><span class="highlight-blue">实时性好</span>：无需建立连接</li>
<li><span class="highlight-green">适用场景</span>：实时性要求高的应用</li>
</ul>
</div>

<div class="exam-memory">
<strong>🎯 记忆口诀</strong>：
<br><span class="highlight-red">TCP可靠重连接，UDP快速不保证</span>
<br><span class="highlight-blue">TCP像打电话（先拨号），UDP像发短信（直接发）</span>
</div>

## 📊 常用协议端口对照表

### 🔴 TCP协议端口（必背）

<div class="port-table">

| 协议 | 端口号 | 全称 | 用途 | 记忆技巧 |
|------|--------|------|------|----------|
| <span class="highlight-red">HTTP</span> | <span class="highlight-red">80</span> | HyperText Transfer Protocol | 网页浏览 | **8**0 = **H**TTP |
| <span class="highlight-red">HTTPS</span> | <span class="highlight-red">443</span> | HTTP Secure | 安全网页浏览 | **4**4**3** = **S**ecure |
| <span class="highlight-red">FTP</span> | <span class="highlight-red">21</span> | File Transfer Protocol | 文件传输 | **21** = **F**TP |
| <span class="highlight-red">FTP数据</span> | <span class="highlight-red">20</span> | FTP Data | FTP数据传输 | 21-1=20 |
| <span class="highlight-red">SSH</span> | <span class="highlight-red">22</span> | Secure Shell | 安全远程登录 | **22** = **S**SH |
| <span class="highlight-red">Telnet</span> | <span class="highlight-red">23</span> | Telnet | 远程登录 | 22+1=23 |
| <span class="highlight-red">SMTP</span> | <span class="highlight-red">25</span> | Simple Mail Transfer Protocol | 邮件发送 | **25** = **S**MTP |
| <span class="highlight-red">POP3</span> | <span class="highlight-red">110</span> | Post Office Protocol v3 | 邮件接收 | **110**报警 |
| <span class="highlight-red">IMAP</span> | <span class="highlight-red">143</span> | Internet Message Access Protocol | 邮件访问 | 143=**I**MAP |
| <span class="highlight-red">LDAP</span> | <span class="highlight-red">389</span> | Lightweight Directory Access Protocol | 目录服务 | **389** = LDAP |
| <span class="highlight-red">LDAPS</span> | <span class="highlight-red">636</span> | LDAP over SSL | 安全目录服务 | 389×2≈636 |

</div>

### 🟢 UDP协议端口（必背）

<div class="port-table">

| 协议 | 端口号 | 全称 | 用途 | 记忆技巧 |
|------|--------|------|------|----------|
| <span class="highlight-green">DNS</span> | <span class="highlight-green">53</span> | Domain Name System | 域名解析 | **53** = **D**NS |
| <span class="highlight-green">DHCP服务器</span> | <span class="highlight-green">67</span> | Dynamic Host Configuration Protocol | 动态IP分配 | **67** = Server |
| <span class="highlight-green">DHCP客户端</span> | <span class="highlight-green">68</span> | DHCP Client | DHCP客户端 | 67+1=68 |
| <span class="highlight-green">TFTP</span> | <span class="highlight-green">69</span> | Trivial File Transfer Protocol | 简单文件传输 | **69** = **T**FTP |
| <span class="highlight-green">NTP</span> | <span class="highlight-green">123</span> | Network Time Protocol | 网络时间同步 | **123**时间 |
| <span class="highlight-green">SNMP</span> | <span class="highlight-green">161</span> | Simple Network Management Protocol | 网络管理 | **161** = SNMP |
| <span class="highlight-green">SNMP Trap</span> | <span class="highlight-green">162</span> | SNMP Trap | SNMP陷阱 | 161+1=162 |
| <span class="highlight-green">Syslog</span> | <span class="highlight-green">514</span> | System Log | 系统日志 | **514** = Syslog |

</div>

### 🟣 TCP/UDP双协议端口

<div class="port-table">

| 协议 | 端口号 | TCP/UDP | 用途 | 备注 |
|------|--------|---------|------|------|
| <span class="highlight-purple">DNS</span> | <span class="highlight-purple">53</span> | TCP+UDP | 域名解析 | UDP查询，TCP传输大数据 |
| <span class="highlight-purple">Echo</span> | <span class="highlight-purple">7</span> | TCP+UDP | 回显服务 | 测试用 |
| <span class="highlight-purple">Discard</span> | <span class="highlight-purple">9</span> | TCP+UDP | 丢弃服务 | 测试用 |
| <span class="highlight-purple">Daytime</span> | <span class="highlight-purple">13</span> | TCP+UDP | 日期时间服务 | 获取系统时间 |

</div>

## 🎯 考试重点协议详解

### Web服务协议

<div class="protocol-grid">
<div class="protocol-card">
<strong><span class="highlight-red">HTTP (端口80)</span></strong>
<ul>
<li><strong>协议类型</strong>：TCP</li>
<li><strong>主要用途</strong>：网页浏览、API调用</li>
<li><strong>特点</strong>：明文传输、无状态</li>
<li><strong>考点</strong>：默认端口80必背</li>
</ul>
</div>

<div class="protocol-card">
<strong><span class="highlight-red">HTTPS (端口443)</span></strong>
<ul>
<li><strong>协议类型</strong>：TCP</li>
<li><strong>主要用途</strong>：安全网页浏览</li>
<li><strong>特点</strong>：SSL/TLS加密</li>
<li><strong>考点</strong>：443是HTTP+SSL</li>
</ul>
</div>
</div>

### 文件传输协议

<div class="protocol-grid">
<div class="protocol-card">
<strong><span class="highlight-red">FTP (端口21/20)</span></strong>
<ul>
<li><strong>协议类型</strong>：TCP</li>
<li><strong>控制连接</strong>：端口21</li>
<li><strong>数据连接</strong>：端口20</li>
<li><strong>特点</strong>：双连接模式</li>
</ul>
</div>

<div class="protocol-card">
<strong><span class="highlight-green">TFTP (端口69)</span></strong>
<ul>
<li><strong>协议类型</strong>：UDP</li>
<li><strong>主要用途</strong>：简单文件传输</li>
<li><strong>特点</strong>：无认证、轻量级</li>
<li><strong>应用</strong>：网络设备配置</li>
</ul>
</div>
</div>

### 邮件服务协议

<div class="protocol-grid">
<div class="protocol-card">
<strong><span class="highlight-red">SMTP (端口25)</span></strong>
<ul>
<li><strong>协议类型</strong>：TCP</li>
<li><strong>主要用途</strong>：邮件发送</li>
<li><strong>方向</strong>：客户端→服务器</li>
<li><strong>考点</strong>：只负责发送</li>
</ul>
</div>

<div class="protocol-card">
<strong><span class="highlight-red">POP3 (端口110)</span></strong>
<ul>
<li><strong>协议类型</strong>：TCP</li>
<li><strong>主要用途</strong>：邮件接收下载</li>
<li><strong>特点</strong>：下载后删除服务器邮件</li>
<li><strong>考点</strong>：离线邮件处理</li>
</ul>
</div>

<div class="protocol-card">
<strong><span class="highlight-red">IMAP (端口143)</span></strong>
<ul>
<li><strong>协议类型</strong>：TCP</li>
<li><strong>主要用途</strong>：邮件在线访问</li>
<li><strong>特点</strong>：邮件保留在服务器</li>
<li><strong>考点</strong>：多设备同步</li>
</ul>
</div>
</div>

### 远程访问协议

<div class="protocol-grid">
<div class="protocol-card">
<strong><span class="highlight-red">SSH (端口22)</span></strong>
<ul>
<li><strong>协议类型</strong>：TCP</li>
<li><strong>主要用途</strong>：安全远程登录</li>
<li><strong>特点</strong>：加密传输</li>
<li><strong>考点</strong>：替代Telnet</li>
</ul>
</div>

<div class="protocol-card">
<strong><span class="highlight-red">Telnet (端口23)</span></strong>
<ul>
<li><strong>协议类型</strong>：TCP</li>
<li><strong>主要用途</strong>：远程终端登录</li>
<li><strong>特点</strong>：明文传输（不安全）</li>
<li><strong>考点</strong>：已被SSH替代</li>
</ul>
</div>
</div>

### 网络基础服务

<div class="protocol-grid">
<div class="protocol-card">
<strong><span class="highlight-green">DNS (端口53)</span></strong>
<ul>
<li><strong>协议类型</strong>：UDP（主要）/TCP</li>
<li><strong>主要用途</strong>：域名解析</li>
<li><strong>UDP</strong>：普通查询</li>
<li><strong>TCP</strong>：区域传输、大响应</li>
</ul>
</div>

<div class="protocol-card">
<strong><span class="highlight-green">DHCP (端口67/68)</span></strong>
<ul>
<li><strong>协议类型</strong>：UDP</li>
<li><strong>服务器端口</strong>：67</li>
<li><strong>客户端端口</strong>：68</li>
<li><strong>用途</strong>：自动IP地址分配</li>
</ul>
</div>
</div>

## 📝 考试真题与解析

### 【例题1】协议识别题

**题目**：以下哪些协议使用UDP作为传输层协议？
A. HTTP  B. DNS  C. SMTP  D. DHCP  E. FTP

<div class="memory-tip">
<strong>🎯 解题技巧</strong>：
<br>快速判断UDP协议的特征：
<ul>
<li>需要<span class="highlight-green">实时性</span>的服务（DNS查询、DHCP）</li>
<li>需要<span class="highlight-green">广播</span>的服务（DHCP发现）</li>
<li><span class="highlight-green">简单查询</span>类服务（DNS、NTP）</li>
</ul>
</div>

**答案**：B、D

**解析**：
- A. HTTP：TCP协议，需要可靠传输
- **B. DNS：UDP协议，快速查询**  ✓
- C. SMTP：TCP协议，邮件传输需要可靠性
- **D. DHCP：UDP协议，需要广播发现服务器**  ✓
- E. FTP：TCP协议，文件传输需要可靠性

### 【例题2】端口号选择题

**题目**：某系统需要配置邮件服务器，管理员需要在防火墙上开放哪些端口？
A. 21, 22, 80  B. 25, 110, 143  C. 53, 67, 68  D. 161, 162, 514

<div class="exam-memory">
<strong>🎯 邮件服务三剑客</strong>：
<ul>
<li><span class="highlight-red">SMTP-25</span>：发送邮件</li>
<li><span class="highlight-red">POP3-110</span>：接收邮件（下载）</li>
<li><span class="highlight-red">IMAP-143</span>：接收邮件（在线）</li>
</ul>
</div>

**答案**：B

**解析**：
- 邮件服务需要开放：SMTP(25)、POP3(110)、IMAP(143)
- A选项是FTP、SSH、HTTP
- C选项是DNS、DHCP
- D选项是SNMP、Syslog

### 【例题3】协议应用场景题

**题目**：某企业需要实现以下功能，请为每个功能选择最适合的协议：
1. 员工通过浏览器访问公司内网系统
2. 系统管理员远程登录服务器
3. 自动分配IP地址给新接入设备
4. 域名解析服务

<div class="memory-tip">
<strong>🎯 应用场景记忆法</strong>：
<ul>
<li><span class="highlight-blue">浏览器访问</span> → HTTP/HTTPS</li>
<li><span class="highlight-blue">远程登录</span> → SSH（安全）/Telnet（不安全）</li>
<li><span class="highlight-blue">自动分配IP</span> → DHCP</li>
<li><span class="highlight-blue">域名解析</span> → DNS</li>
</ul>
</div>

**答案**：
1. HTTP(80)/HTTPS(443)
2. SSH(22)
3. DHCP(67/68)
4. DNS(53)

## 🧠 高效记忆方法

### 端口号记忆技巧

<div class="exam-memory">
<strong>🎯 数字联想记忆法</strong>：

<div class="protocol-grid">
<div class="protocol-card">
<strong>HTTP-80</strong>
<br>"<span class="highlight-red">8</span>0" = "<span class="highlight-red">H</span>TTP"
<br>8像H的形状
</div>

<div class="protocol-card">
<strong>HTTPS-443</strong>
<br>"<span class="highlight-red">4</span>4<span class="highlight-red">3</span>" = "<span class="highlight-red">S</span>ecure"
<br>4像安全锁
</div>

<div class="protocol-card">
<strong>FTP-21</strong>
<br>"<span class="highlight-red">21</span>" = "<span class="highlight-red">F</span>TP"
<br>21世纪文件传输
</div>

<div class="protocol-card">
<strong>SSH-22</strong>
<br>"<span class="highlight-red">22</span>" = "<span class="highlight-red">S</span>SH"
<br>22像双把钥匙（安全）
</div>

<div class="protocol-card">
<strong>Telnet-23</strong>
<br>"<span class="highlight-red">23</span>" = SSH后一个
<br>SSH的不安全版本
</div>

<div class="protocol-card">
<strong>SMTP-25</strong>
<br>"<span class="highlight-red">25</span>" = "<span class="highlight-red">S</span>MTP"
<br>25岁发邮件
</div>

<div class="protocol-card">
<strong>DNS-53</strong>
<br>"<span class="highlight-red">53</span>" = "<span class="highlight-red">D</span>NS"
<br>53像域名解析
</div>

<div class="protocol-card">
<strong>DHCP-67/68</strong>
<br>"<span class="highlight-red">67/68</span>" = "DHCP"
<br>67服务器，68客户端
</div>

<div class="protocol-card">
<strong>POP3-110</strong>
<br>"<span class="highlight-red">110</span>" = "报警电话"
<br>邮件到达提醒
</div>

<div class="protocol-card">
<strong>IMAP-143</strong>
<br>"<span class="highlight-red">143</span>" = "一生邮"
<br>邮件永远在服务器
</div>
</div>
</div>

### 协议分类记忆

<div class="tcp-box">
<strong>🔵 TCP协议记忆口诀</strong>：
<br><span class="highlight-red">"HTTP HTTPS FTP SSH，邮件SMTP POP IMAP"</span>
<br><strong>特点</strong>：需要可靠传输的重要服务
</div>

<div class="udp-box">
<strong>🟢 UDP协议记忆口诀</strong>：
<br><span class="highlight-red">"DNS DHCP TFTP快，SNMP NTP时间到"</span>
<br><strong>特点</strong>：需要速度和实时性的服务
</div>

### 邮件协议记忆法

<div class="memory-tip">
<strong>🎯 邮件协议三兄弟</strong>：
<ul>
<li><span class="highlight-red">SMTP-25</span>：<strong>S</strong>end <strong>M</strong>ail <strong>T</strong>o <strong>P</strong>eople（发送邮件给别人）</li>
<li><span class="highlight-red">POP3-110</span>：<strong>P</strong>ick <strong>O</strong>ff <strong>P</strong>ost（取走邮件）</li>
<li><span class="highlight-red">IMAP-143</span>：<strong>I</strong>n <strong>M</strong>ail <strong>A</strong>lways <strong>P</strong>resent（邮件始终存在）</li>
</ul>
</div>

## 📊 考试重点端口汇总表

<div class="port-table">

### 🔴 TCP协议（必背20个）

| 协议 | 端口 | 协议 | 端口 |
|------|------|------|------|
| <span class="highlight-red">HTTP</span> | <span class="highlight-red">80</span> | <span class="highlight-red">HTTPS</span> | <span class="highlight-red">443</span> |
| <span class="highlight-red">FTP</span> | <span class="highlight-red">21</span> | <span class="highlight-red">FTP数据</span> | <span class="highlight-red">20</span> |
| <span class="highlight-red">SSH</span> | <span class="highlight-red">22</span> | <span class="highlight-red">Telnet</span> | <span class="highlight-red">23</span> |
| <span class="highlight-red">SMTP</span> | <span class="highlight-red">25</span> | <span class="highlight-red">POP3</span> | <span class="highlight-red">110</span> |
| <span class="highlight-red">IMAP</span> | <span class="highlight-red">143</span> | <span class="highlight-red">LDAP</span> | <span class="highlight-red">389</span> |

### 🟢 UDP协议（必背10个）

| 协议 | 端口 | 协议 | 端口 |
|------|------|------|------|
| <span class="highlight-green">DNS</span> | <span class="highlight-green">53</span> | <span class="highlight-green">DHCP服务器</span> | <span class="highlight-green">67</span> |
| <span class="highlight-green">DHCP客户端</span> | <span class="highlight-green">68</span> | <span class="highlight-green">TFTP</span> | <span class="highlight-green">69</span> |
| <span class="highlight-green">NTP</span> | <span class="highlight-green">123</span> | <span class="highlight-green">SNMP</span> | <span class="highlight-green">161</span> |

</div>

## 🎯 考前冲刺速记

<div class="exam-memory">
<strong>📚 考试前30分钟必背清单</strong>：

**TCP协议端口（10个必背）**：
- <span class="highlight-red">HTTP-80, HTTPS-443, FTP-21/20, SSH-22, Telnet-23</span>
- <span class="highlight-red">SMTP-25, POP3-110, IMAP-143</span>

**UDP协议端口（8个必背）**：
- <span class="highlight-green">DNS-53, DHCP-67/68, TFTP-69</span>
- <span class="highlight-green">NTP-123, SNMP-161</span>

**记忆检验口诀**：
- <span class="highlight-blue">"80网页443安全，21传文件20数据"</span>
- <span class="highlight-blue">"22登录23远程，25发邮件110收"</span>
- <span class="highlight-blue">"53解析67分配，69简传123时间"</span>
</div>

### 快速判断技巧

<div class="memory-tip">
<strong>🎯 协议类型快速判断</strong>：

**TCP协议特征**：
- 需要<span class="highlight-red">可靠传输</span>的服务
- <span class="highlight-red">文件传输</span>类（FTP、HTTP）
- <span class="highlight-red">邮件服务</span>类（SMTP、POP3、IMAP）
- <span class="highlight-red">远程登录</span>类（SSH、Telnet）

**UDP协议特征**：
- 需要<span class="highlight-green">快速响应</span>的服务
- <span class="highlight-green">查询类</span>服务（DNS）
- <span class="highlight-green">广播类</span>服务（DHCP）
- <span class="highlight-green">实时类</span>服务（NTP、流媒体）
</div>

## 💡 实战应用场景

### 防火墙端口配置

<div class="protocol-grid">
<div class="protocol-card">
<strong>Web服务器</strong>
<br>需要开放：
<ul>
<li>TCP 80 (HTTP)</li>
<li>TCP 443 (HTTPS)</li>
</ul>
</div>

<div class="protocol-card">
<strong>邮件服务器</strong>
<br>需要开放：
<ul>
<li>TCP 25 (SMTP)</li>
<li>TCP 110 (POP3)</li>
<li>TCP 143 (IMAP)</li>
</ul>
</div>

<div class="protocol-card">
<strong>DNS服务器</strong>
<br>需要开放：
<ul>
<li>UDP 53 (查询)</li>
<li>TCP 53 (区域传输)</li>
</ul>
</div>

<div class="protocol-card">
<strong>文件服务器</strong>
<br>需要开放：
<ul>
<li>TCP 21 (FTP控制)</li>
<li>TCP 20 (FTP数据)</li>
<li>TCP 22 (SFTP)</li>
</ul>
</div>
</div>

### 网络故障排查

<div class="memory-tip">
<strong>🔧 常见端口故障排查</strong>：

**无法访问网站**：
1. 检查TCP 80端口是否开放
2. 确认HTTP服务是否启动
3. 验证防火墙规则

**邮件发送失败**：
1. 检查TCP 25端口连通性
2. 确认SMTP服务配置
3. 验证邮件服务器地址

**远程登录失败**：
1. 检查TCP 22端口状态
2. 确认SSH服务运行
3. 验证用户权限配置
</div>

## 📚 总结与备考建议

### 核心知识点回顾

<div class="exam-memory">
<strong>🎯 考试必掌握要点</strong>：

1. **端口号记忆**：重点掌握常用20个协议的端口号
2. **协议分类**：准确区分TCP和UDP协议
3. **应用场景**：理解不同协议的适用场合
4. **故障排查**：掌握基于端口的网络故障分析

<strong>备考策略</strong>：
- <span class="highlight-red">重复记忆</span>：每天复习端口对照表
- <span class="highlight-blue">联想记忆</span>：使用数字联想和口诀
- <span class="highlight-green">实践应用</span>：结合实际网络配置场景
- <span class="highlight-orange">模拟考试</span>：多做相关题目巩固记忆
</div>

### 学习建议

1. **制作便携卡片**：将重点端口制作成小卡片，随时复习
2. **分类分批记忆**：按协议类型分批背诵，避免混淆
3. **结合实际应用**：通过配置实际服务加深理解
4. **定期自测**：设置提醒，定期检验记忆效果

---

*本文涵盖了软考系统架构师考试中网络协议的核心知识点，建议结合实际网络环境进行练习，在理解的基础上强化记忆。网络协议是信息系统的基础，掌握这些知识对系统架构师工作具有重要意义。*

## 🏷️ 标签

`软考` `系统架构师` `网络协议` `端口号` `TCP` `UDP` `HTTP` `SMTP` `DNS` `考试速记`
