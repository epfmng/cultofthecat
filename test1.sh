sudo apt install net-tools -y
sudo apt-get install update -y
sudo apt-get update -y
sudo apt-get upgrade -y
sudo apt-get install openssh-server -y
systemctl enable ssh
sudo apt-get install vim -y
sudo apt-get install nano-y
sudo apt install bash -y

sudo apt-get install \
    ca-certificates \
    curl \
    gnupg \
    lsb-release \
    -y
 
sudo mkdir -p /etc/apt/keyrings
sudo apt-get install docker-ce docker-ce-cli containerd.io docker-compose-plugin -y

rm -r cultofthecat
git clone https://github.com/epfmng/cultofthecat.git
cd cultofthecat
docker compose down -v
docker compose up db app -d
