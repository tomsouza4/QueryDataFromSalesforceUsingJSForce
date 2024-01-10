# Getting Started with Create React App
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Introduction
This project demonstrates Salesforce data interaction using Node.js and [jsforce](https://jsforce.github.io/).

### Requirements
Ensure you have the following libraries installed:
- jsforce
- dotenv

Run the following command to install the required dependencies:
`npm install jsforce dotenv`

# Clone and Setup
### Clone the repository:

`git clone https://github.com/tomsouza4/my-salesforce-app.git`

Navigate to the project directory:
`cd my-salesforce-app`

Install dependencies:
`npm install`

Run the React app:
`npm start`

Execute the script:
`node src/CreateFields.js`

# Output Sample
Access Token: 00D8b0000022ug0!AQ8AQDTB8oa2CJdKDtx7t68ZbGid27hrU9BhTyG7WLbZBila46v5F7Gzap9pWCxVF8VDfUk.jD7h7t9q6mbYP._bjjDSQc22

Instance URL: https://wise-goat-rgjb32-dev-ed.trailblaze.my.salesforce.com

User ID: 0058b00000HEcA4AAL
Org ID: 00D8b0000022ug0EAA

Total records: 22
Fetched records: 22

Fetched 22 records:
- My Account #1 (0018b00002XvzaDAAR)
- My Account #2 (0018b00002XvzaEAAR)
- My Account #1 (0018b00002XvzaIAAR)
- My Account #2 (0018b00002XvzaJAAR)
...
- Postman (0018b00002NN8lBAAT)
- Captain Bly’s Finest Treasure Chests (0018b00002NNJ56AAH)

# Important Notes
If your Salesforce password and token include a single quote, make sure to escape it with a backslash (\) to prevent issues with code interpretation.

### Additional Note
Be cautious with special characters like single quotes in your Salesforce password or token, as they might affect code interpretation.
