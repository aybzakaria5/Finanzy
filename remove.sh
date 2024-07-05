#!/bin/bash

# Define the list of files to remove
files=(
    "finanzy/customers/__pycache__/models.cpython-310.pyc"
    "finanzy/finanzy/__pycache__/__init__.cpython-310.pyc"
    "finanzy/finanzy/__pycache__/settings.cpython-310.pyc"
    "finanzy/finanzy/__pycache__/urls.cpython-310.pyc"
    "finanzy/loans/__pycache__/__init__.cpython-310.pyc"
    "finanzy/loans/__pycache__/apps.cpython-310.pyc"
    "finanzy/loans/__pycache__/models.cpython-310.pyc"
    "finanzy/payments/__pycache__/__init__.cpython-310.pyc"
    "finanzy/payments/__pycache__/apps.cpython-310.pyc"
    "finanzy/reports/__pycache__/__init__.cpython-310.pyc"
    "finanzy/reports/__pycache__/apps.cpython-310.pyc"
    "finanzy/vehicles/__pycache__/__init__.cpython-310.pyc"
    "finanzy/vehicles/__pycache__/apps.cpython-310.pyc"
    "finanzy/vehicles/__pycache__/models.cpython-310.pyc"
    "finanzy/customers/migrations/__pycache__/__init__.cpython-310.pyc"
    "finanzy/loans/migrations/__pycache__/__init__.cpython-310.pyc"
    "finanzy/payments/migrations/__pycache__/__init__.cpython-310.pyc"
    "finanzy/reports/migrations/__pycache__/__init__.cpython-310.pyc"
    "finanzy/vehicles/migrations/__pycache__/__init__.cpython-310.pyc"
    
)

# Loop through the list and remove each file
for file in "${files[@]}"; do
    if [ -f "$file" ]; then
        rm "$file"
        echo "Removed $file"
    else
        echo "$file does not exist"
    fi
done