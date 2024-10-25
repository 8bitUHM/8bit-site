# Base stage for Python dependencies
FROM python:3.12 AS python-base

# Project secret key define for build argument
ARG PROJECT_SECRET

# Set environment variables
ENV PYTHONUNBUFFERED=1
WORKDIR /app

# Copy and install Python dependencies
COPY requirements.txt /app/
RUN pip install --no-cache-dir -r requirements.txt

# Copy only the application source code into the base stage
COPY . /app/

FROM node:18 AS frontend-build

# Working directories for each frontend folder
WORKDIR /frontend-main
COPY main_app/frontend/package*.json ./
RUN npm install
COPY main_app/frontend ./
RUN npm run build

WORKDIR /frontend-learning
COPY learning/frontend/package*.json ./
RUN npm install
COPY learning/frontend ./
RUN npm run build

# Final image
FROM python:3.12

# Set environment variables
ENV PYTHONUNBUFFERED=1
WORKDIR /app

# Copy Python dependencies
COPY --from=python-base /app /app

# Copy built frontend assets from the frontend stage to the final image
COPY --from=frontend-build /frontend-main/build /app/main_app/frontend/build
COPY --from=frontend-build /frontend-learning/build /app/learning/frontend/build

# Collect static files
RUN python manage.py collectstatic --noinput

# Expose port 8000 for the Django application
EXPOSE 8000

# Command to run the Django development server
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
