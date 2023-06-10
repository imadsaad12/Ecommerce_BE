# Specify the base image
FROM node:14-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install
RUN npm install pm2 -g

# Copy the rest of the app files
COPY . .
EXPOSE 4000
# Specify the command to start the app
CMD ["npm", "run","start:dev"]
