#!/bin/sh
read -p "请输入环境test或prod: " env
read -p "请输入是否打包 yes或no:" build

echo -e $build
echo -e $env
if [ $env != "prod" ] && [ $env != "test" ]; then
    echo -e "error: $env"
    exit
fi

name=nzb

# TIP 此处，切记：【=号】两边，不允许有【空格】的存在。
# TIP 如果不如此，则会产生BUG。    BUG解决方法链接：https://blog.csdn.net/benben0729/article/details/80917872
remote_server_address_test_nzb="root@47.242.81.228" # nzb测试环境    228香港

pem_pubkey_file_path_test="../../../../${name}_test.pem" # 测试的pem
project_path=${name}.com                              # 发包的文件夹

eval "remote_server_address_test=\$remote_server_address_test_${name}"
echo -e "remote_server_address_test $remote_server_address_test"

remote_server_address=$remote_server_address_test
pem_pubkey_file_path=$pem_pubkey_file_path_test

server_base_dir="/var/www/$project_path"
server_project_dir="/var/www/$project_path/"               # 项目解压后目录
server_project_dir_blue="/var/www/$project_path/"          # 项目解压后目录
server_current_zip="/var/www/$project_path/dist.zip"       # 现用版本的压缩包
server_backup_zip="/var/www/$project_path/dist_backup.zip" # 上个版本的压缩包
command_to_build_prod="build"                              # 在【npm run 命令】中执行命令
command_to_build_test="docs:build"
local_zip_file_path="../../dist.zip"

echo -e "当前环境: $env"
echo -e "项目名: $name"
echo -e "项目目录名: ${server_current_zip}"
echo -e "服务器地址:  ${remote_server_address}"
echo -e "公钥文件路径:  ${pem_pubkey_file_path}"

echo -e " |a [exec] |a start build ==> build test" # 提示
if [ $build != "no" ]; then
    pnpm run ${command_to_build_test} # 进行打包，会生成一个【dist】文件夹，和一个【dist.zip】压缩包
fi
# 删除 老的zip包 否则压缩包越来越大
rm -f ./dist.zip
cd docs/.vitepress && zip -r ../../dist.zip dist
echo -e " |a [exec] |a clean online www directory ==> and backup" # 提示
ssh -i ${pem_pubkey_file_path} ${remote_server_address} "rm -f  ${server_backup_zip} && mv ${server_current_zip} ${server_backup_zip}"
echo -e " |a [exec] |a transfer local zip ==> and unzip online" # 提示
scp -i ${pem_pubkey_file_path} ${local_zip_file_path} "${remote_server_address}:${server_base_dir}"
ssh -i ${pem_pubkey_file_path} ${remote_server_address} "unzip -o ${server_current_zip} -d ${server_project_dir}"
echo -e " You succeeded in automatically . Congratulations ! \a " # 提示
ssh -i ${pem_pubkey_file_path} ${remote_server_address} " exit"

# 远程部署机 webhook
# 如果用远程机器部署的话就要用到以下方法（基本思路：① 本机只有npm环境，而没有源代码 ② 从远程机器拉取源代码 ③ 源代码有了之后，设置国内镜像源，并且利用国内镜像源安装依赖 ④ 到了第4步，才开始正式执行，自动化部署任务）
# TIP 方法声明 〇
# preHandle(){
#     git pull orgin master
#     pnpm config set registry http://registry.pnpm.taobao.org/
#     pnpm install
#     pnpm run build-prod
# }

# TIP 方法声明 ①
# 清空dist目录
emptyRemoteDist() {
    if [ $env == "test" ]; then # 若为测试环境
        # TIP 关于【echo】，大部分资料，参考稍后的一篇教程。但存在一个小BUG：有些指令名为反斜杠，教程里写作正斜杠，实际上还是反斜杠。     ECHO指令教程：https://blog.csdn.net/oqqssh/article/details/78614002
        # TIP 关于【echo提示声音】，现阶段只在完成后有【六连响】；其它的干扰声音，暂时替换为【|a】；将来有需要，再把【|a】替换为【\a】。
        # echo -e " \a [exec] \a remove remote:yourip folder"   # TIP -e，为开启加强echo模式，可接收特殊转义符指令；\a，若-e开启，则会在指定位置，发出警报声
        # ssh root@yourip "rm -rf /www/jiketoutiao_admin/*"     # TIP 利用ssh，执行远程指令。（不添加指令，则为远程登录；添加指令，则会直接在远程服务器，执行一切指令。（名为【远程指令】，实则和【本地指令】，只有宿主环境区别，自由度上没有任何区别。但是注意：默认没有本机指令的信息打印））
        echo -e " |a [exec] |a Environment:Product.  ${remote_server_address} "
        # 删除远端的解压后目录  不删除目录 做到无感 发包
        #ssh -i "${pem_pubkey_file_path}" ${remote_server_address} "rm -rf ${server_project_dir}"
        # 删除Admin上个版本的压缩包
        ssh -i ${pem_pubkey_file_path} ${remote_server_address} "rm -f  ${server_backup_zip} && mv ${server_current_zip} ${server_backup_zip}"
    else # 若为线上环境
        # echo -e " |a [exec] |a remove remote:yourip folder"   # 同上
        # ssh root@yourip "rm -rf /www/jiketoutiao_admin/*"     # 同上
        echo -e " |a [exec] |a Environment:Development. You get wrong order set .  ${remote_server_address_test} |a |a |a |a |a |a |a |a |a |a |a |a |a |a |a |a |a " # 提示错误
        # 删除远端的解压后目录 不删除目录 做到无感 发包
        #ssh ${remote_server_address} "rm -rf ${server_project_dir}"
        # 删除Admin上个版本的压缩包
        ssh ${remote_server_address} "rm -f  ${server_backup_zip}"
        # 重命名Admin现用版本的压缩包
        ssh ${remote_server_address} "mv ${server_current_zip} ${server_backup_zip}"
    fi
}

# TIP 方法声明 ②
# 发送文件到正式环境，服务器
transferFileToSever() {
    if [ $env == "test" ]; then # 若为测试环境
        # echo -e " |a [exec] |a transfer file to product:yourip sever"   # 同上
        # scp -r ./dist/* root@yourip:/www/jiketoutiao_admin/   # TIP 与【SSH命令】实质上属于同一体系。唯一区别，为【SSH命令】仅在【远程服务器】的内部执行；而【SCP】指令，负责实现【本地、远程不同环境间】，文件的跨环境传输。     参考链接：https://www.cnblogs.com/webnote/p/5877920.html
        # 将本地【admin.zip】压缩文件，上传到【远端】的  /mnt/data/www文件夹下。

        scp -i ${pem_pubkey_file_path} ${local_zip_file_path} "${remote_server_address}:${server_base_dir}"
        # 利用ssh，执行远程指令，解压【admin.zip】压缩文件，到  /mnt/data/www/admin文件夹下。
        ssh -i ${pem_pubkey_file_path} ${remote_server_address} "unzip -o ${server_current_zip} -d ${server_project_dir_blue}"
    else # 若为线上环境
        # echo -e " |a [exec] |a remove remote:yourip folder"   # 同上
        # ssh root@yourip "rm -rf /www/jiketoutiao_admin/*"     # 同上
        echo -e " |a [exec] |a Environment:prod. You get wrong order set .  ${remote_server_address} |a |a |a |a |a |a |a |a |a |a |a |a |a |a |a |a |a " # 提示错误
        scp ${remote_server_address} -r ${local_zip_file_path} "${remote_server_address}:${server_base_dir}"
        ssh ${remote_server_address} "unzip -o ${server_current_zip} -d ${server_project_dir}"
    fi
}
