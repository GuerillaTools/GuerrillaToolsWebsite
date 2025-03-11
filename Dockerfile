# Stage 1: Build the app
FROM node:22-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
# Build the production bundle (this outputs to the 'dist' folder by default)
RUN npm run build

# Stage 2: Serve the app with nginx
FROM nginx:alpine
# Copy the build output to nginx’s html folder
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]