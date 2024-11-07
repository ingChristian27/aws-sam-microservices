# AWS SAM CRUD Application

This project is a CRUD (Create, Read, Update, Delete) application built with AWS SAM (Serverless Application Model). It demonstrates how to build and deploy serverless applications using AWS Lambda and API Gateway, organized into multiple functions for modularity.

## Project Structure

The project is organized as follows:

- `src/functions/`: Contains the individual AWS Lambda functions.
- `template.yaml`: AWS SAM template that defines the resources, including functions and API Gateway endpoints.
- `samconfig.toml`: Configuration for AWS SAM CLI.

## Requirements

- AWS SAM CLI
- Node.js (for Lambda functions)
- AWS Account and AWS credentials set up
- Docker (for local testing with SAM)

## Setup