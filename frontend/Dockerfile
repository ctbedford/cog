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

COPY nginx.conf /etc/nginx/conf.d/default.conf

ENV DOCKERIZE_VERSION v0.6.1
RUN wget https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && tar -C /usr/local/bin -xzvf dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && rm dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz


# The default command to run when starting the container
CMD ["nginx", "-g", "daemon off;"]

#test