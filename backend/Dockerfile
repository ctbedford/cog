# Use the official Python runtime as a parent image
FROM python:3.9-slim

# Prevent Python from writing pyc files to disc
ENV PYTHONDONTWRITEBYTECODE 1

# Prevent Python from buffering stdout and stderr
ENV PYTHONUNBUFFERED 1

# Set the working directory in the container to /backend
WORKDIR /backend

# Install dependencies
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy the current directory contents into the container at /backend
COPY . .

# Make port 8000 available to the world outside this container
EXPOSE 8000

# Define the command to run your app using gunicorn
CMD ["gunicorn", "--bind", "0.0.0.0:8000", "wsgi:application"]
