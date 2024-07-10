FROM mcr.microsoft.com/vscode/devcontainers/python:3.10

# Install PostgreSQL client
RUN apt-get update && apt-get install -y postgresql-client

# Set the default shell to bash instead of sh
ENV SHELL /bin/bash

# Upgrade pip and install dependencies
RUN pip install --upgrade pip
RUN pip install django_extensions==3.1.0 django_filter==2.4.0 celery==5.0 redis==3.5
