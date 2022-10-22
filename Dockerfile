FROM node:alpine AS production

# Declaring env
ENV NODE_ENV production

# Setting up the work directory
WORKDIR /memoryrecall/prod

# Installing dependencies
COPY ./package.json /memoryrecall/prod
RUN npm install

# Copying all the files in our project
COPY . .

EXPOSE 3000

# Starting our application
CMD npm start