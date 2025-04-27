echo "Deploy to WAS DEV"
pnpm build && \
scp -p 26022 -r ./apps/portfolio-web/dist/* mars:/usr/share/nginx/html/app && \
scp -p 26022 -r ./apps/wbs-web/dist/* mars:/usr/share/nginx/html/web
