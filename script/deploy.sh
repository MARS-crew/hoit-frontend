echo "Deploy to WAS DEV"
pnpm build && \
scp -r ./apps/portfolio-web/dist/* mars:/usr/share/nginx/html/app && \
scp -r ./apps/web-web/dist/* mars:/usr/share/nginx/html/web
