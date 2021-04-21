FROM node:current-alpine3.10

WORKDIR /usr/local/crust-docs

COPY . .

RUN yarn install --immutable | grep -v 'YN0013'
RUN yarn docs

ENTRYPOINT yarn serve