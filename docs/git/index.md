---
title: git常用命令
date: 2023-03-20
permalink: /pages/git/
---

## 程序员必备技能之 `Git`

### 常用命令

#### 拉取代码

```sh
git clone xxx.git
```

#### 创建分支

```sh
git branch dev
# or
git checkout -b dev
# or
git switch -c dev
```

#### 切换本地分支

```sh
git checkout dev
# or
git switch dev
```

#### 切换分支并关联远程分支

```sh
git checkout -b dev origin/dev
# or
git checkout --track origin/dev
```

#### 查看本地所有分支

```sh
git branch
```

#### 查看远程所有分支

```sh
git branch -r
```

#### 删除本地分支

```sh
git branch -d dev
```

#### 删除远程分支

```sh
git push origin -d dev
```

#### 将代码从工作区添加暂存区

```sh
git add .
```

#### 查看尚未暂存的更新

```sh
git diff
```

#### 添加提交信息（`commit` 注释写错，执行 `git commit --amend` 此时会进入默认 `vim` 编辑器，修改注释后保存）

```sh
git commit -m 'xxxx'
```

#### 推送代码到远程分支

```sh
git push origin dev

# 强制推送（常在 git rebase 或 git reset 后使用）
git push -f origin dev
```

#### 拉取远程分支代码

```sh
git pull origin dev
```

#### 合并分支

```sh
git merge dev
```

#### 查看 `git` 状态

```sh
git status
```

#### 查看提交历史

```sh
git log
```

#### 查看可引用的历史版本记录

```sh
git reflog
```

#### 把本地未 `push` 的分叉提交历史整理成直线

```sh
git rebase origin/dev
```

#### 回到 `rebase` 执行之前的状态

```sh
git rebase --abort
```

#### 回退版本

```sh
# 回退指定 commit_id 版本
git reset --hard commit_id

# 回退上一个版本
git reset --soft HEAD^
# or
git reset --soft HEAD~1
```

#### 撤销代码

```sh
git revert commit_id
```

#### 修改分支名

```sh
# 第一步
git branch -m oldBranchName newBranchName

# 第二步
git push origin :oldBranchName

# 第三步
git push --set-upstream origin newBranchName
```

#### 查看 `git` 配置

```sh
# 查看全局配置
git config --global --list

# 查看用户名
git config --global user.name
```

#### 添加用户名

```sh
git config --global --add user.name newName
```

#### 删除用户名

```sh
git config --global --unset user.name
```

#### 修改用户名

```sh
git config --global user.name newName
```

#### 配置 `Git` 用户名和邮箱

```sh
# 用户名
git config --global user.name "Your Name"

# 邮箱
git config --global user.email "email@example.com"
```

#### 统计代码行数

```sh
git ls-files | xargs wc -l
```

