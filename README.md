# VM-Based Microservice Deployment Using VirtualBox

## 📌 Project Overview
This project demonstrates the deployment of a **RESTful microservice** on a backend virtual machine and its consumption by a client virtual machine over a **VirtualBox-configured virtual network**. The system simulates a real-world distributed architecture using Linux-based virtual machines and HTTP-based communication.

---

## 🖥️ System Architecture

![Architecture Diagram](architecture/architecture.png)

### Components
- **Backend VM**
  - Ubuntu Server
  - Hosts a Node.js RESTful API
  - Listens on port `3000`
  - Provides system and service information as JSON

- **Client VM**
  - Ubuntu Server
  - Sends HTTP requests using `curl`
  - Verifies network connectivity using `ping`

---

## ⚙️ Technologies Used
- Oracle VirtualBox
- Ubuntu Server 24.04 LTS
- Node.js
- Express.js
- curl
- Linux Networking Tools (`ping`, `ip`)

---

## 🚀 Setup Instructions

### 1. Create Virtual Machines
Create two Ubuntu Server virtual machines in VirtualBox:
- `Backend-VM`
- `Client-VM`

Recommended configuration:
- Backend VM: 2 GB RAM, 2 CPU cores, 20 GB disk
- Client VM: 1 GB RAM, 1 CPU core, 10 GB disk

---

### 2. Configure Networking
Set both VMs to the same network mode:
- **Host-Only Adapter** or **Bridged Adapter**

Verify IP addresses:
```bash
ip a
