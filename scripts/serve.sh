# Get ref to the parent working directory
parent_working_dir=$(pwd)
echo "Serving front-end"

# Cd into the backend
cd $parent_working_dir"/../app/imagetagger-frontend"
polymer serve --port 8081