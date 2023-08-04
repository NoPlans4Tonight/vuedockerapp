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

# Expose port 8080 for the Vue.js development server
EXPOSE 8080

# Start the Vue.js development server with HMR
CMD ["npm", "run", "serve"]