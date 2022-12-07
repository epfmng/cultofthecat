sudo apt install net-tools
sudo apt-get install update
sudo apt-get update
sudo apt-get upgrade
sudo apt-get install openssh-server
systemctl enable ssh
sudo apt-get install vim
sudo apt-get install nano
sudo apt install bash 

sudo apt-get update
sudo apt-get install \
    ca-certificates \
    curl \
    gnupg \
    lsb-release
 
sudo mkdir -p /etc/apt/keyrings
#curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
#echo \
#  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu \
#  $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
sudo apt-get update
sudo apt-get install docker-ce docker-ce-cli containerd.io docker-compose-plugin
#sudo docker run hello-world

#sudo apt-get install nodejs
#sudo apt-get install npm
#sudo apt-get install ng-common
#sudo npm install -g @angular/cli --force && sudo npm install --save-dev @angular-devkit/build-angular
#npm cache clean --force & npm uninstall -g angular-cli --force && sudo npm install -g @angular/cli --force && ng --help

#mkdir ~/wordpress
#scp root@192.168.239.153 /Desktop/docker-compose.yml  /wordpress
#docker compose up

git clone https://github.com/epfmng/cultofthecat.git
cd cultofthecat
docker compose down -v
docker compose up db app -d
#npm install
#ng serve
