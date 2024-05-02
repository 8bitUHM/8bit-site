# GitHub Actions Push Docker Image to AWS ECR

1. [Contents](#contents)
2. [Evironment Variables](#evironment-variables)
3. [How to Use](#how-to-use)

## Contents

This pmp contains a GitHub Actions yaml file that given a Dockerfile for your app in the main project directory, will build your docker image and push it to a AWS ECR repository opon push or pull request merge into main branch.

## Secrects/Variables Used

**In GitHub repository actions secrets:**
- AWS_ACCESS_KEY_ID
- AWS_SECRET_ACCESS_KEY

## How to Use

1. Create a new ECR repository on AWS
2. In the YAML file, replace the last four run steps with the ECR repository push commands that AWS gives you



