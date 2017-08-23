#note book

git rm -rf xxx // 删除文件夹，前提已add

git rm -r --cached .
git add .
git commit -m 'update .gitignore'
git reset --hard e377f60e28c8b84158 // 回退到指定版本
git reset --hard HEAD^ // 回退
git checkout . // 本地所有修改的。没有的提交的，都返回到原来的状态
git stash // 把所有没有提交的修改暂存到stash里面。可用git stash pop回复。
git reset --hard HASH // 返回到某个节点，不保留修改。
git reset --soft HASH // 返回到某个节点。保留修改
git push origin <远程分支名>