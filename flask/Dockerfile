# Use an official Python runtime as the base image
FROM python:3.11.5-slim

# Set the working directory in the container
WORKDIR /app

# Install pipenv
RUN pip install pipenv

# Copy Pipfile and Pipfile.lock to ensure both are copied
COPY Pipfile Pipfile.lock /app/

# Install dependencies using pipenv
RUN pipenv install --deploy --ignore-pipfile

# Copy the current directory contents into the container
COPY . /app

# Make port 5000 available to the outside world
EXPOSE 8000

# Define the command to run the app using pipenv
CMD ["pipenv", "run", "flask", "run", "--host=0.0.0.0", "--port=8000"]
