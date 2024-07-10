#!/bin/bash

# Array of models to migrate
models=("customers" "loans" "vehicles" "payments")

# Loop through each model and run the migration commands
for model in "${models[@]}"
do
    echo "Making migrations for $model..."
    docker-compose run django python manage.py makemigrations $model
    
    echo "Migrating $model..."
    docker-compose run django python manage.py migrate $model
    
    echo "$model migration completed."
done

echo "All migrations completed."
