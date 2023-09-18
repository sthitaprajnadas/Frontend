#!/bin/sh
if [[ -z $(apache2 -v 2>/dev/null) ]] && [[ -z $(httpd -v 2>/dev/null) ]]
then 
    echo "Apache not found"; 
    sudo apt update -y ; 
    sudo apt install apache2 -y ;
    sudo systemctl start apache2 ;
    sudo systemctl enable apache2;
    sudo ufw allow 'Apache';
    usermod -aG root ubuntu
    sudo chmod -R 775 /var/www/html
    echo "Apache installed sucessfully"; 
else
    echo "Apache was already available";    
fi
