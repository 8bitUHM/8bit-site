FROM python:3.12

ARG PROJECT_SECRET=build-time-placeholder
ENV PROJECT_SECRET=${PROJECT_SECRET}
ENV PYTHONUNBUFFERED=1

WORKDIR /app

RUN apt-get update && apt-get install -y \
    curl \
    postgresql-client \
    && curl -fsSL https://deb.nodesource.com/setup_18.x | bash - \
    && apt-get install -y nodejs \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

COPY requirements.txt /app/
RUN pip install --no-cache-dir -r requirements.txt

COPY . /app/

WORKDIR /app/main_app/frontend
RUN npm install && npm run build

WORKDIR /app/learning/frontend
RUN npm install && npm run build

WORKDIR /app
RUN python manage.py collectstatic --noinput

RUN sed -i 's/\r$//' /app/scripts/entrypoint.sh && chmod +x /app/scripts/entrypoint.sh

EXPOSE 8000

ENTRYPOINT ["/app/scripts/entrypoint.sh"]
