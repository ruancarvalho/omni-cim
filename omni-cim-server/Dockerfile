# pull official base image
FROM node:13.12.0-alpine

# set working directory
WORKDIR /omni-cim-server/

# add `/app/node_modules/.bin` to $PATH
# ENV PATH /omni-cim-panel/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install --silent
RUN npm install -g sequelize-cli

# add entire app
COPY . ./

# start app
CMD ["npm", "start"]