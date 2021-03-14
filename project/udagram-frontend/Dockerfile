# Use NodeJS base image
FROM beevelop/ionic:latest

# Create app directory
WORKDIR /app

# Install app dependencies by copying
# package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install
RUN ionic build

# Copy app source
COPY . /app

# Bind the port that the image will run on
EXPOSE 8100

# Define the Docker image's behavior at runtime
CMD ["ionic", "serve"]
