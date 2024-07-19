#!/bin/bash

# Check if port number argument is provided
if [ $# -ne 1 ]; then
    echo "Usage: $0 <port_number>"
    exit 1
fi

port_number=$1
file_path="static/public/scripts/index.js"

# Use sed to replace the port number
sed -i "s/9999/${port_number}/" "${file_path}"

echo "Port number in ${file_path} replaced with ${port_number}."
