# Learning Emporium Portal

Django 4.2.8 with Supabase PostgreSQL database and Django Rest Framework

1. [Project Structure](#project-structure)
2. [Getting the app running](#getting-the-app-running)
3. [Development](#development)

## Project Structure

The project is organized into several components:

- **8bit-site**: The main Django project directory.

  - **db_file_storage/**: File storage systems that allows us to store files by raw bytes and mimetype in database.

  - **vercel_app/**: Main or 'host' app
    - **settings.py**: Configuration settings for the project, including database settings, middleware, installed apps, and other project-specific configurations. Models are defined here.
    - **urls.py**: URL configuration for the project, mapping URLs to views.
  - **main_app/**: main app
    - **frontend/**: Folder that holds react project src files
    - **migrations/**: Database migration files.
    - **static/**: Static files (CSS, JavaScript, images).
    - **templates/**: HTML templates.
    - **admin.py**: Admin interface configuration.
    - **forms.py**: HTML forms. Forms define how data is input and validated by the user.
    - **models.py**: Data models. Models define the structure of the database and interact with data.
    - **serializers.py**: Serializers for converting complex data types, such as querysets and model instances, to native Python datatypes that can then be easily rendered into JSON, XML, or other content types.
    - **tests.py**: Unit tests.
    - **urls.py**: URL configuration for the portal app, mapping URLs to views.
    - **views.py**: View functions or classes. Views handle HTTP requests and return HTTP responses.

  - **manage.py**: Django's command-line utility for administrative tasks.
  - **requirements.txt**: Txt file that holds all of the projects dependencies.

## Getting the server running


1. In a new terminal run `pip install -r requirements.txt `
2. in ./vercel_app folder, create a new file called local_settings.py and add

```
from pathlib import Path

BASE_DIR = Path(__file__).resolve().parent.parent

DEBUG=True
```
3. In ./vercel_app folder, create a new file called .env and add the environment variables from our project discord channel 8bit-ste

4. Start the app by running `python manage.py runserver` in terminal, the app should be running locally on port 8000, http://localhost:8000

## Frontend development
1. Have three terminals open; one for  the server, npm related commands and one for running __python manage.py collectstatic__
2. In your first terminal, start the server with __python manage.py runserver__
3. In your second terminal, cd into the frontend with __cd main_app/frontend__ then run npm run dev
This will render out the JavaScript files into the static/dist folder
4. In your third terminal, everytime you make a change to frontend src files, run __python manage.py collectstatic__ to apply the changes.


