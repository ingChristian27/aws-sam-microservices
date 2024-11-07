# AWS SAM CRUD Application

This project is a CRUD (Create, Read, Update, Delete) application built with AWS SAM (Serverless Application Model). It demonstrates how to build and deploy serverless applications using AWS Lambda and API Gateway, organized into multiple functions for modularity.

## Project Structure

The project is organized as follows:

- **`functions/`**: Contains individual directories for each Lambda function, each with its own `package.json` for managing dependencies.
- **`template.yaml`**: The AWS SAM template used for deploying the functions.
- **`install-all.js`**: A script that installs dependencies for all Lambda functions in the project.


## Requirements

- AWS SAM CLI
- Node.js (for Lambda functions)
- AWS Account and AWS credentials set up
- Docker (for local testing with SAM)


## Setup

To get started with the project, follow the steps below to set up your local environment and run the project.

### 1. Clone the repository

First, clone the repository to your local machine:

git clone https://github.com/ingChristian27/aws-sam-microservices.git
cd aws-sam-microservices

npm run install-all

### **2. Install Dependencies for All Functions**

This project contains multiple Lambda functions, each with its own set of dependencies defined in a `package.json` file. To install all dependencies across all functions, follow these steps:

1. In the root of the project, run the following command:

```bash
    npm run install-all
```
    

    This will trigger the `install-all.js` script, which will install the dependencies for each Lambda function located in `src/functions/{function-name}/package.json`.

---

### **3. Deploy the Project to AWS (Optional)**

If you want to deploy the project to AWS using AWS SAM, follow these steps:

#### **Build the Project**

Before deploying, build the project using the SAM CLI:

```bash
sam build
```

### **3. Deploy the Project to AWS (Optional)**

To deploy the project to AWS, run the following command:

```bash
sam deploy --guided
```

The --guided flag will prompt you to provide necessary deployment information, such as:

AWS region
Stack name
AWS credentials
This command will guide you through the deployment process and set up the Lambda functions on AWS.

### **4. Test Locally**

You can test your Lambda functions locally using the AWS SAM CLI:

#### **Start the local API Gateway:**

To invoke your functions via HTTP requests on your local machine, run:

```bash
sam local start-api
```

This will start a local API Gateway server at `http://localhost:3000`, allowing you to invoke the Lambda functions using HTTP requests.

#### **Invoke Functions Locally:**

You can also invoke individual Lambda functions locally using:

```bash
sam local invoke FunctionName
```