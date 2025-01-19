#!/bin/bash

# Replace with your repository (username/repo)
REPO="12mv2/Reactive-landing-page"

# Read JSON tasks
while IFS= read -r row; do
  title=$(echo "$row" | jq -r '.title')
  body=$(echo "$row" | jq -r '.body')
  # Convert the array of labels into a comma-separated string
  labels=$(echo "$row" | jq -r '.labels | join(",")')

  # Validate task fields
  if [[ -z "$title" || -z "$body" ]]; then
    echo "Error: Missing title or body in task."
    continue
  fi

  # Create the issue
  gh issue create --repo "$REPO" --title "$title" --body "$body" --label "$labels"
done < <(jq -c '.[]' tasks.json)
