# Use official Nginx image
FROM nginx:stable-alpine

# Remove the default nginx website
RUN rm -rf /usr/share/nginx/html/*

# Copy your pre-built Angular app to Nginx's web root
COPY dist/angular-v20-dummy/browser /usr/share/nginx/html

# Optional: custom nginx config to handle Angular routing
COPY nginx.conf /etc/nginx/conf.d/default.conf

RUN chmod -R 755 /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
