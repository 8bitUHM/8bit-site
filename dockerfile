# Use the official Python image from the Docker Hub
FROM python:3.9

# Set environment variables for Python to run in unbuffered mode
ENV PYTHONUNBUFFERED=1

# Set the working directory within the container
WORKDIR /app

# Copy the requirements file into the container
COPY requirements.txt /app/

# Install dependencies from requirements.txt
RUN pip install --no-cache-dir -r requirements.txt

# Copy the rest of the application code into the container
COPY . /app/

# Expose port 8000 for the Django application
EXPOSE 8000

# Command to run the Django development server
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
