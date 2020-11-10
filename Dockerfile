# Node.js and NPM will be installed by default
FROM nikolaik/python-nodejs:latest

# Creating working directory
WORKDIR app/

# Copying package/package-lock and installing dependencies
COPY package*.json ./
RUN npm install

# Bundling app source
COPY . .

# Exposing server port
EXPOSE 8080

# Running server
CMD [ "node", "server.js" ]