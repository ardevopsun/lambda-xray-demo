# Trace Serverless API Calls with AWS Lambda and AWS X-Ray

This project demonstrates how to trace serverless API calls using AWS Lambda and AWS X-Ray.

## Architecture

Client → API Gateway → Lambda Function (Node.js) → AWS X-Ray

## Prerequisites

- AWS CLI configured
- AWS account with IAM access
- Node.js installed
- Optional: Postman/cURL to test the API

## Setup Instructions

1. Install dependencies:
   ```bash
   npm install aws-xray-sdk
