### 数据库名 JueJin
```sql
CREATE DATABASE IF NOT EXISTS juejie; 
USE juejie;
```
### 文章表表名 `article`

|字段名意义| 字段名|备注|
|---|---|---|
|id|id|自增唯一|
|作者名|author||
|发布时间|releasetime||
|点赞数|give||
|收藏数|collect||
|文章内容|content||
|标题|title||
|目录|catalogue|数组|

```sql
CREATE TABLE IF NOT EXISTS article (
    `id` INT PRIMARY KEY AUTO_INCREMENT,
    `author` VARCHAR(255),
    `releasetime` DATETIME,
    `give` INT,
    `collect` INT,
    `content` TEXT,
    `title` VARCHAR(255),
    `catalogue` TEXT
)
```

### 用户表 `user`
|字段意义|字段名|备注|
|---|---|---|
|id|id|自增唯一|
|账号|account|
|密码|password|
|昵称|nickname|
|关键词|antistop|数组|
|头像|profile|
|注册时间|regtime|
```sql
Create table if not exists user (
    `id` INT PRIMARY KEY AUTO_INCREMENT,
    `account` VARCHAR(255),
    `password` VARCHAR(255),
    `nickname` VARCHAR(255),
    `antistop` VARCHAR(255),
    `profile` VARCHAR(255),
    `regtime` DATETIME
)
```

### 关键词表表名 `keyword`

|字段意义|字段名|备注|
|---|---|---|
|id|id|自增唯一|
|关键词名|keyname|

```sql
Create table if not exists keyword {
    `id` INT PRIMARY KEY AUTO_INCREMENT,
    `keyname` VARCHAR(255)
}
```