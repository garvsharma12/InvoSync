# 🧾 InvoSync — Smart Invoice Management System

InvoSync is a robust, end-to-end **invoice generation and management system** built using a modern full-stack architecture — **React**, **Spring Boot**, and **MongoDB** — integrated with **event-driven AWS services** for real-time streaming and scalable processing.

---

## 🚀 Features

- 🔐 **Secure Authentication** (JWT, Role-based)
- 🧾 **Invoice Creation & Management**
- 📊 **Dashboard for Payment Status**
- 📥 **Download & Preview Invoices**
- ☁️ **Cloud-Native Architecture**
- 🔁 **Event-Driven Invoice Processing** via AWS Streams
- 📱 **Responsive UI** with optimized UX

---

## 🛠️ Tech Stack

| Layer     | Technology            |
|-----------|------------------------|
| Frontend  | React.js, Tailwind CSS |
| Backend   | Spring Boot (Java 17)  |
| Database  | MongoDB                |
| API       | RESTful APIs           |
| Streaming | AWS DynamoDB, SQS, Lambda, MSK, EventBridge |
| Deployment| Docker, AWS            |

---

## 🧩 Architecture Overview

```mermaid
graph TD
  UI[React Frontend] -->|API Calls| BE[Spring Boot API]
  BE --> DB[(MongoDB)]
  DB -->|ChangeStream| DDB[DynamoDB Streams]
  DDB --> EB[EventBridge Pipes]
  EB --> Q[SQS (with DLQ)]
  Q --> L[Lambda Processor]
  L --> MSK[Kafka Topic (MSK)]
  L --> DBUpdate[Update MongoDB Status]

InvoSync supports reliable real-time streaming of invoice events across services:

    📥 Invoice Insert/Update → DynamoDB Stream

    📡 Stream Filter via EventBridge Pipes

    📬 SQS Queue buffers events with DLQ for failures

    🧠 Lambda consumes from SQS:

        Sends data to MSK (Kafka)

        Updates status in MongoDB

    This decouples storage, processing, and streaming logic for better scalability and fault tolerance.

📌 Use Cases

    Freelancers needing digital invoice tracking

    Small/Medium businesses automating billing

    Enterprises building modular billing systems

🛡️ Security

    Spring Security for Authentication

    JWT Tokens for Session Management

    IAM Roles for AWS resource isolation
