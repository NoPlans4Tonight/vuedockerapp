# Use an official Node.js runtime as the base image
FROM node:14-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy all files from the current directory to the container
COPY . .

# Specify the command to run when the container starts
CMD ["npm", "run", "dev"]