# Use Node.js version as the parent image
FROM node:16-alpine as build-stage

# Set the working directory in the container
WORKDIR /frontend

# Install app dependencies by copying the package.json and package-lock.json
COPY package*.json ./

# Install all node dependencies
RUN npm install

# Bundle app source inside Docker image
COPY . .

# Build the app for production
RUN npm run build

# Use Nginx to serve the React application
FROM nginx:stable-alpine as production-stage

# Copy the build directory from the previous stage to the Nginx serve folder
COPY --from=build-stage /frontend/build /usr/share/nginx/html

# Expose port 80 to the outside once the container has launched
EXPOSE 80

# The default command to run when starting the container
CMD ["nginx", "-g", "daemon off;"]
