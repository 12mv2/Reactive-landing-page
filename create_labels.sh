#!/bin/bash

# Replace with your repository (username/repo)
REPO="your-username/your-repo"

# Define the labels to create
labels=("critical" "important" "optional" "enhancement" "bug" "accessibility" "performance" "SEO" "documentation" "design")

# Loop through the labels and create them
for label in "${labels[@]}"; do
  gh label create "$label" --repo "$REPO" --description "Automatically created label"
done
