#Step 1 : Use an existing docker image as a base
FROM node:alpine
# Step 2: Download and install dependencies
WORKDIR /app
COPY package.json .
RUN npm install 
COPY . .
# Step 3: Tell the image what to do when it starts as container
CMD ["npm","start"]