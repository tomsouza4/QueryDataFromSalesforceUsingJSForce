let jsforce = require('jsforce');

// Load and check config
require('dotenv').config();
const mandatoryConfigParams = ['loginUrl', 'consumerKey', 'consumerSecret', 'callbackUrl', 'username', 'password'];
const missingConfigParams = mandatoryConfigParams.filter(param => !process.env[param]);
if (missingConfigParams.length > 0) {
  console.error('Cannot start app: Missing mandatory configuration parameters in the .env file:', missingConfigParams.join(', '));
  process.exit(-1);
}

let conn = new jsforce.Connection({
  oauth2: {
    loginUrl: process.env.loginUrl,
    clientId: process.env.consumerKey,
    clientSecret: process.env.consumerSecret,
    redirectUri: process.env.callbackUrl
  }
});

conn.login(process.env.username, process.env.password, function (err, userInfo) {
  if (err) {
    return console.error('Login failed:', err);
  }

  console.log('Access Token:', conn.accessToken);
  console.log('Instance URL:', conn.instanceUrl);
  console.log('User ID:', userInfo.id);
  console.log('Org ID:', userInfo.organizationId);

  fetchAccountRecords(conn);
});

function fetchAccountRecords(conn) {
  conn.query('SELECT Id, Name FROM Account', function (err, result) {
    if (err) {
      return console.error('Failed to fetch Account records:', err);
    }
    console.log('Total records:', result.totalSize);
    console.log('Fetched records:', result.records.length);

    displayAccountRecords(result.records);
  });
}

function displayAccountRecords(records) {
  console.log(`Fetched ${records.length} records:`);
  records.forEach(record => {
    console.log(`- ${record.Name} (${record.Id})`);
  });
}
