# pull the official base image
FROM node:14-alpine
# set working direction
WORKDIR /app
# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH
# install application dependencies
COPY Debt/package.json ./
COPY Debt/package-lock.json ./
RUN npm i
# add app
COPY Debt ./
# start app
CMD ["npm", "start"]
