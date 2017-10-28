# Print the art to the scren
cat art.txt
echo "Installing the dependencies for projects"

# Get ref to the parent working directory
parent_working_dir=$(pwd)

echo "Installing front-end dependencies"
cd $parent_working_dir"/../app/imagetagger-frontend"
bower install
echo "Finished installing front-end dependencies"

echo "


"

echo "Installing back-end dependencies"
cd $parent_working_dir"/../app/imagetagger-backend"
npm install
echo "Finished installing back-end dependencies"