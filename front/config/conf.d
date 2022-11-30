server {
    listen 80;
    listen [::]:80;

    root /usr/share/nginx/html;
    location / {
       try_files $uri $uri/ /index.html;
    }
}