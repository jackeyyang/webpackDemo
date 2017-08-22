#note book

git rm -rf xxx // 删除文件夹，前提已add

git rm -r --cached .
git add .
git commit -m 'update .gitignore'
git reset --hard e377f60e28c8b84158 // 回退到指定版本
git reset --hard HEAD^ // 回退