FROM node:20.18

WORKDIR /usr/local/app

COPY package.json package-lock.json tsconfig.json next.config.mjs .
COPY src ./src

RUN npm ci && npm run build

EXPOSE 3000

RUN useradd app && chown --recursive app .next
USER app

ENTRYPOINT ["npm", "run"]
CMD ["start"]
