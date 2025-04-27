echo "Deploy to WAS DEV"
pnpm build && \
scp -P 26022 -r ./apps/portfolio-web/dist/* mars:/usr/share/nginx/html/app && \
scp -P 26022 -r ./apps/wbs-web/dist/* mars:/usr/share/nginx/html/web
