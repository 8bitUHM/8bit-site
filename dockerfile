FROM python:3.12

# Project secret key define for build argument
ARG PROJECT_SECRET

# Set environment variables for Python to run in unbuffered mode
ENV PYTHONUNBUFFERED=1

# Set the working directory within the container
WORKDIR /app


# Copy the requirements file into the container
COPY requirements.txt /app/

# Install dependencies from requirements.txt
RUN pip install --no-cache-dir -r requirements.txt

# Copy the rest of the application code
COPY . /app/

FROM node:18

# Navigate to the frontend folder, install dependencies and run the build
WORKDIR /app/main_app/frontend
RUN npm install
RUN npm run build

WORKDIR /app/learning/frontend
RUN npm install
RUN npm run build

# Navigate back to the app directory to run collectstatic
WORKDIR /app
RUN python manage.py collectstatic --noinput

# Expose port 8000 for the Django application
EXPOSE 8000

# Command to run the Django development server
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]