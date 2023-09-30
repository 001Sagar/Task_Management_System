# Use an official Node.js runtime as the base image
FROM node:14

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Expose a port (e.g., 3000) that your application will listen on
EXPOSE 3000

# Define the command to start your Node.js application
CMD [ "npm", "start" ]
