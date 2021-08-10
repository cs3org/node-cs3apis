# CS3APIS for Node.js

[![Join the conversation](https://badges.gitter.im/cs3org/CS3APIS.svg)](https://gitter.im/cs3org/CS3APIS) [![Latest Version](https://img.shields.io/npm/v/@cs3org/node-cs3apis)](https://www.npmjs.com/package/@cs3org/node-cs3apis) [![Drone CI Build Status](https://img.shields.io/drone/build/cs3org/node-cs3apis?server=https%3A%2F%2Fdrone.cernbox.cern.ch)](https://drone.cernbox.cern.ch/cs3org/node-cs3apis) [![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

API definitions can be found at https://github.com/cs3org/cs3apis

## Install with npm

```bash
npm i @cs3org/node-cs3apis
```

## Example usage
```js
const grpc = require('grpc');
const { GatewayAPIClient } = require('@cs3org/node-cs3apis/cs3/gateway/v1beta1/gateway_api_grpc_pb');
const { AuthenticateRequest } = require('@cs3org/node-cs3apis/cs3/gateway/v1beta1/gateway_api_pb');

const TARGET = process.env.TARGET || 'localhost:19000';

const client = new GatewayAPIClient(TARGET, grpc.credentials.createInsecure());

function authenticate(authType, clientId, clientSecret) {
  const req = new AuthenticateRequest();
  req.setType(authType);
  req.setClientId(clientId);
  req.setClientSecret(clientSecret);
  return new Promise((resolve, reject) => {
    client.authenticate(req, (err, response) => {
      if (err) {
        reject(err);
      } else {
        resolve(response);
      }
    });
  });
}

async function example() {
  try {
    const res = await authenticate('basic', 'einstein', 'relativity');
    // See:
    // * AuthenticateResponse https://github.com/cs3org/cs3apis/blob/a86e5cb6ac360/cs3/gateway/v1beta1/gateway_api.proto#L415
    // * User https://github.com/cs3org/cs3apis/blob/a86e5cb6ac360/cs3/identity/user/v1beta1/resources.proto#L53
    console.log(res.getUser().getDisplayName());
  } catch (e) {
    console.error(e);
  }
}

// ...
example();
```
