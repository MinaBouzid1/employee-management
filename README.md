# Atelier 7  Employee Management System

## 📋 Description

Application Full-Stack complète de gestion d'employés développée avec **Spring Boot** (Backend) et **Angular** (Frontend).  
L'application permet d'effectuer toutes les opérations **CRUD** (Create, Read, Update, Delete) sur une base de données d'employés avec une interface moderne et sécurisée.

---

## 🚀 Technologies Utilisées

### Backend
- **Spring Boot 3** - Framework Java  
- **Spring Data JPA** - Persistance des données  
- **Spring Security** - Authentification Basic Auth  
- **MySQL** - Base de données relationnelle  
- **Lombok** - Réduction du code boilerplate  
- **Maven** - Gestion des dépendances  

### Frontend
- **Angular 17+** - Framework TypeScript  
- **Angular Material** - Composants UI modernes  
- **Bootstrap 5** - Design responsive  
- **RxJS** - Programmation réactive  
- **TypeScript** - Langage de développement  

---

## ⚙️ Installation et Démarrage

### Prérequis
- Java 17+  
- Node.js 18+  
- MySQL 8.0+  
- Angular CLI  

### Configuration de la Base de Données

1. Créez une base de données MySQL :
```sql
CREATE DATABASE employee_management;
```

2. Configurez vos identifiants dans `application.properties` (Backend)

### Backend

```bash
cd employee-management
mvn clean install
mvn spring-boot:run
```

Le serveur démarre sur `http://localhost:8080`

### Frontend

```bash
cd employee-management-frontend
npm install
ng serve
```

L'application démarre sur `http://localhost:4200`

---

## 🔐 Accès

- **URL Frontend**: http://localhost:4200
- **URL Backend**: http://localhost:8080
- **Authentification**: Basic Auth (admin/admin123)

---

## 📊 Fonctionnalités

✅ Gestion complète des employés (CRUD)  
✅ Interface utilisateur moderne et responsive  
✅ Sécurisation des API REST  
✅ Validation des données  
✅ Design époustouflant avec animations  
✅ Recherche et filtrage des employés  
✅ Pagination des résultats  
✅ Messages de confirmation  

---

## 📁 Structure du Projet

### Backend
```
employee-management/
├── src/
│   ├── main/
│   │   ├── java/
│   │   │   └── com/example/employee/
│   │   │       ├── controller/
│   │   │       ├── model/
│   │   │       ├── repository/
│   │   │       ├── service/
│   │   │       └── config/
│   │   └── resources/
│   │       └── application.properties
│   └── test/
└── pom.xml
```

### Frontend
```
employee-management-frontend/
├── src/
│   ├── app/
│   │   ├── components/
│   │   ├── services/
│   │   ├── models/
│   │   └── guards/
│   ├── assets/
│   └── environments/
└── package.json
```

---

## 🔧 Configuration

### Backend (application.properties)

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/employee_management
spring.datasource.username=root
spring.datasource.password=votre_mot_de_passe

spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true

server.port=8080
```

### Frontend (environment.ts)

```typescript
export const environment = {
  production: false,
  apiUrl: 'http://localhost:8080/api'
};
```

---

## 🛠️ API Endpoints

| Méthode | Endpoint | Description |
|---------|----------|-------------|
| GET | `/api/employees` | Récupérer tous les employés |
| GET | `/api/employees/{id}` | Récupérer un employé par ID |
| POST | `/api/employees` | Créer un nouvel employé |
| PUT | `/api/employees/{id}` | Modifier un employé |
| DELETE | `/api/employees/{id}` | Supprimer un employé |

---

## 👤 Modèle Employee

```json
{
  "id": 1,
  "firstName": "John",
  "lastName": "Doe",
  "email": "john.doe@example.com",
  "department": "IT",
  "salary": 50000
}
```

---

⭐ **N'oubliez pas de mettre une étoile si ce projet vous a aidé !** ⭐

