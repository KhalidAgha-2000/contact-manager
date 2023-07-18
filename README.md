# Project Name

Contact Manager

## Description

Contact Manager is a web application built using Laravel, MySQL, and Next.js. It allows users to manage their contacts efficiently by providing features such as listing contact information, adding, deleting, and editing contacts. The application also implements email and phone number validation to ensure data integrity.

## Technologies Used

- Laravel: Backend framework for building the RESTful API and managing database migrations.
- MySQL: Database management system used to store contact information.
- Next.js: Frontend framework for building the user interface and implementing client-side logic.
- Bootstrap: CSS framework used to create responsive and visually appealing UI components.

## Installation and Setup

1. Clone the repository from GitHub: `git clone https://github.com/your-username/contact-manager.git`
2. Navigate to the project directory: `cd contact-manager`
3. Install backend dependencies: `composer install`
4. Create a copy of the `.env.example` file and rename it to `.env`: `cp .env.example .env`
5. Configure the database connection in the `.env` file with your MySQL credentials.
6. Generate the application key: `php artisan key:generate`
7. Run the database migrations: `php artisan migrate`
8. Install frontend dependencies: `npm install`
9. Start the development server: `npm run dev`
10. Access the application in your browser: `http://localhost:3000`

## Inserting Data

- To add data to the contacts table, use the following SQL query:

 > INSERT INTO contacts (full_name, email, phone_number, country, city)
VALUES 
('John Doe', 'john@example.com', '1234567890', 'USA', 'New York'),
('Jane Smith', 'jane@example.com', '9876543210', 'Canada', 'Toronto'),
('Michael Johnson', 'michael@example.com', '78521478', 'UK', 'London'),
-- Add more data here
;

- You can execute this query in phpMyAdmin

## Usage

1. Open the application and navigate to the "Contacts" page to view and manage your existing contacts.
2. Click the "Add Contact" button to add a new contact.
3. Edit or delete contacts by clicking the respective buttons in the contact list.
4. Make sure to enter valid email and phone number formats for proper validation.


## Postman Collection
To interact with the API endpoints and test the functionalities of the Contact Manager project, you can use the provided Postman collection. Follow the steps below to import the collection into Postman:

1- Visit the Postman collection file from the following location: 
 - https://documenter.getpostman.com/view/25121847/2s946h9sVq

2- Click on "Run in Postman" button.

3- In the dialog, click on the available application.

4- Once the collection is uploaded, you will see it listed in the left sidebar of Postman.

You can now explore the available endpoints, request bodies, and response structures in the collection to interact with the Pro_Manage API.

## Contact

If you have any questions or suggestions regarding this project, feel free to reach out .

- Name : Mohamad Khalid Kassem Agha
- Email : mkhalid.k.agha@gmail.com
- LinkedIn : https://www.linkedin.com/in/khalid-agha/

Feel free to customize the sections and information based on your specific project requirements.

