# TechKart Full-Stack E-commerce Platform

TechKart is a full-stack e-commerce platform built with the MERN stack. It includes both backend APIs and a modern React frontend to provide a complete shopping experience.

## 📂 Project Structure

- [Backend (API)](./backend)  
  Node.js + Express backend with RESTful APIs, authentication, product & order management, payment integration, and more.

- [Frontend (Client)](./frontend)  
  React-based frontend with Redux Toolkit, infinite scrolling, optimistic UI updates, QR code scanning, and responsive design.

## 🚀 Getting Started

Please refer to the respective README files inside each folder for detailed information about the project:

- [Backend README](./backend/README.md)
- [Frontend README](./frontend/README.md)

---

### 📋 Prerequisites for 🚀 Running the Project Locally

Before you start, make sure you have the following installed:

- [NodeJS](https://nodejs.org/)
- [Docker](https://www.docker.com/)
- Make sure port **80** is available, or update the port in [`docker-compose.yml`](./docker-compose.yml)

---

### 🔄 Cloning the Repository

```bash
git clone git@github.com:subratamondal1029/techkart.git
```

---

### ⚙️ Configuring Environment Variables

Use the [`.env.example(frontend)`](./frontend/.env.example) & [`.env.example(backend)`](./backend/.env.example) file as a template to create your own `.env` files:

```yaml
PORT=8000
ORIGIN=http://localhost
NODE_ENV=production
```

---

### 🏁 Starting the Project

```bash
cd techkart
docker compose up -d --build # build and up containers
docker cp ./backup/db/ techkart-mongo:./backup/ # copy mongoDB backup
docker exec -it techkart-mongo bash # connect to mongoDB container
mongorestore --uri="mongodb://localhost:27017" --db="techkart" ./backup/techkart/ # restore mongoDB backup
# 537 document(s) restored successfully. 0 document(s) failed to restore.
# if error "0 document(s) restored successfully. 537 document(s) failed to restore. then"
mongosh
use techkart
db.dropDatabase()
exit
mongorestore --uri="mongodb://localhost:27017" --db="techkart" ./backup/techkart/ # restore mongoDB backup


rm -rf backup/* # remove mongoDB backup (optional)
```

### 🧪 Testing User Credentials

Use the following test accounts to log in and explore the platform features:

| Role     | Email                | Password      |
| -------- | -------------------- | ------------- |
| user     | subrata@user.com     | @1Iamuser     |
| seller   | subrata@seller.com   | @1Iamseller   |
| shipment | subrata@shipment.com | @1Iamshipment |
| delivery | subrata@delivery.com | @1Iamdelivery |

> **Note:** These credentials are for testing purposes only. You can also create your own account to explore the full experience.

---
## License

This project is source-visible and shared only for portfolio showcase purposes.  
Commercial use, redistribution, or claiming ownership is not permitted without explicit permission from the author.