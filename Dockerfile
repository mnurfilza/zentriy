# Gunakan Node.js versi terbaru sebagai base image
FROM node:latest as builder

# Set working directory di dalam container
WORKDIR /app

# Menyalin package.json dan package-lock.json terlebih dahulu
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy seluruh kode aplikasi ke dalam container
COPY . .

# Build aplikasi Next.js
RUN npm run build

# Stage kedua untuk menjalankan aplikasi
FROM node:latest

# Set working directory di dalam container
WORKDIR /app

# Copy hasil build dari stage pertama
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json .
COPY --from=builder /app/node_modules ./node_modules

# Expose port yang digunakan oleh aplikasi
EXPOSE 3000

# Command untuk menjalankan aplikasi Next.js
CMD ["npm", "start"]
