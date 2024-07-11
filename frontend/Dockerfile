# Use an official Node runtime as a parent image
FROM node:14

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install any needed packages specified in package.json
RUN npm install

# Bundle app source
COPY . .

# Build the app
RUN npm run build

# Install `serve` to run the application
RUN npm install -g serve

# Define environment variable
ENV PORT 3000

# Run the app when the container launches
CMD ["serve", "-s", "build", "-l", "3000"]

# Expose port 3000 to the outside world
EXPOSE 3000

# Install axios
RUN npm install axios
