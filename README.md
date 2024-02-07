# Getting Started with Create React App
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Introduction
This project demonstrates Salesforce data interaction using Node.js and [jsforce](https://jsforce.github.io/).
This is a POC designed to understand how A React App using Node can fetch data from a Salesforce org levaraging jsforce lib that communicates through APIs to Salesforce

### Requirements
Ensure you have the following libraries installed:
- jsforce
- dotenv

Run the following command to install the required dependencies:

```sh
npm install jsforce dotenv
```

# Clone and Setup
### Clone the repository:

```sh
git clone https://github.com/tomsouza4/query-data-from-salesforce-using-jsforce.git
```

Navigate to the project directory:
```sh 
cd my-salesforce-app
```

Install dependencies:
```sh 
npm install
```

Run the React app:
```sh
npm start
```

Execute the script:
```sh
node src/CreateFields.js
```

# Output Sample
Access Token Example: 
`00D8b0000022ug0!AQ8AQDTB8oa2CJdKDtx7t68ZbGid27hrU9BhTyG7WLbZBila46v5F7Gzap9pWCxVF8VDfUk.jD7h7t9q6mbYP._bjjDSQc22`

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

### Connected App to be created in Salesforce
- Create the connected app
<img width="515" alt="image" src="https://github.com/tomsouza4/my-salesforce-app/assets/11336182/bfa6f3cd-3873-4e1b-a1df-ec38de23a20b">

- Set the Permitted Users & IP Relaxation
<img width="937" alt="image" src="https://github.com/tomsouza4/my-salesforce-app/assets/11336182/52232489-fadb-4f8f-8daa-b3f91aeb206a">


