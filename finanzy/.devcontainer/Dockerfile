# .devcontainer Dockerfile
FROM mcr.microsoft.com/vscode/devcontainers/python:3.10

# Install PostgreSQL client
RUN apt-get update && apt-get install -y postgresql-client

# Set the default shell to bash instead of sh
ENV SHELL /bin/bash

# Upgrade pip and install dependencies
COPY requirements.txt /tmp/requirements.txt
RUN pip install --upgrade pip && pip install -r /tmp/requirements.txt
