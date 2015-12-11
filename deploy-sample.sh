echo "Building Ember app"
ember build

echo "Compressing Dist"
cd dist && zip -r ~/compressed_dist.zip ./*

echo "Clearing current server version"
ssh SERVER -l root "cd /var/www/html && rm -rf * && exit"

echo "Transfering dist to server"
scp -r ~/compressed_dist.zip root@SERVER:/var/www/html

echo "Uncompressing and deploying"
ssh SERVER -l root "cd /var/www/html && unzip compressed_dist.zip && rm compressed_dist.zip && exit"

echo "Clearing temporary files"
cd ~ && rm compressed_dist.zip
