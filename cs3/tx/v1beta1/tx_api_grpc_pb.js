// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
// Copyright 2018-2019 CERN
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
// In applying this license, CERN does not waive the privileges and immunities
// granted to it by virtue of its status as an Intergovernmental Organization
// or submit itself to any jurisdiction.
//
'use strict';
var grpc = require('@grpc/grpc-js');
var cs3_tx_v1beta1_tx_api_pb = require('../../../cs3/tx/v1beta1/tx_api_pb.js');
var cs3_rpc_v1beta1_status_pb = require('../../../cs3/rpc/v1beta1/status_pb.js');
var cs3_sharing_ocm_v1beta1_resources_pb = require('../../../cs3/sharing/ocm/v1beta1/resources_pb.js');
var cs3_tx_v1beta1_resources_pb = require('../../../cs3/tx/v1beta1/resources_pb.js');
var cs3_types_v1beta1_types_pb = require('../../../cs3/types/v1beta1/types_pb.js');

function serialize_cs3_tx_v1beta1_CancelTransferRequest(arg) {
  if (!(arg instanceof cs3_tx_v1beta1_tx_api_pb.CancelTransferRequest)) {
    throw new Error('Expected argument of type cs3.tx.v1beta1.CancelTransferRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_tx_v1beta1_CancelTransferRequest(buffer_arg) {
  return cs3_tx_v1beta1_tx_api_pb.CancelTransferRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cs3_tx_v1beta1_CancelTransferResponse(arg) {
  if (!(arg instanceof cs3_tx_v1beta1_tx_api_pb.CancelTransferResponse)) {
    throw new Error('Expected argument of type cs3.tx.v1beta1.CancelTransferResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_tx_v1beta1_CancelTransferResponse(buffer_arg) {
  return cs3_tx_v1beta1_tx_api_pb.CancelTransferResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cs3_tx_v1beta1_GetTransferStatusRequest(arg) {
  if (!(arg instanceof cs3_tx_v1beta1_tx_api_pb.GetTransferStatusRequest)) {
    throw new Error('Expected argument of type cs3.tx.v1beta1.GetTransferStatusRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_tx_v1beta1_GetTransferStatusRequest(buffer_arg) {
  return cs3_tx_v1beta1_tx_api_pb.GetTransferStatusRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cs3_tx_v1beta1_GetTransferStatusResponse(arg) {
  if (!(arg instanceof cs3_tx_v1beta1_tx_api_pb.GetTransferStatusResponse)) {
    throw new Error('Expected argument of type cs3.tx.v1beta1.GetTransferStatusResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_tx_v1beta1_GetTransferStatusResponse(buffer_arg) {
  return cs3_tx_v1beta1_tx_api_pb.GetTransferStatusResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cs3_tx_v1beta1_ListTransfersRequest(arg) {
  if (!(arg instanceof cs3_tx_v1beta1_tx_api_pb.ListTransfersRequest)) {
    throw new Error('Expected argument of type cs3.tx.v1beta1.ListTransfersRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_tx_v1beta1_ListTransfersRequest(buffer_arg) {
  return cs3_tx_v1beta1_tx_api_pb.ListTransfersRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cs3_tx_v1beta1_ListTransfersResponse(arg) {
  if (!(arg instanceof cs3_tx_v1beta1_tx_api_pb.ListTransfersResponse)) {
    throw new Error('Expected argument of type cs3.tx.v1beta1.ListTransfersResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_tx_v1beta1_ListTransfersResponse(buffer_arg) {
  return cs3_tx_v1beta1_tx_api_pb.ListTransfersResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cs3_tx_v1beta1_PullTransferRequest(arg) {
  if (!(arg instanceof cs3_tx_v1beta1_tx_api_pb.PullTransferRequest)) {
    throw new Error('Expected argument of type cs3.tx.v1beta1.PullTransferRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_tx_v1beta1_PullTransferRequest(buffer_arg) {
  return cs3_tx_v1beta1_tx_api_pb.PullTransferRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cs3_tx_v1beta1_PullTransferResponse(arg) {
  if (!(arg instanceof cs3_tx_v1beta1_tx_api_pb.PullTransferResponse)) {
    throw new Error('Expected argument of type cs3.tx.v1beta1.PullTransferResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_tx_v1beta1_PullTransferResponse(buffer_arg) {
  return cs3_tx_v1beta1_tx_api_pb.PullTransferResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cs3_tx_v1beta1_RetryTransferRequest(arg) {
  if (!(arg instanceof cs3_tx_v1beta1_tx_api_pb.RetryTransferRequest)) {
    throw new Error('Expected argument of type cs3.tx.v1beta1.RetryTransferRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_tx_v1beta1_RetryTransferRequest(buffer_arg) {
  return cs3_tx_v1beta1_tx_api_pb.RetryTransferRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cs3_tx_v1beta1_RetryTransferResponse(arg) {
  if (!(arg instanceof cs3_tx_v1beta1_tx_api_pb.RetryTransferResponse)) {
    throw new Error('Expected argument of type cs3.tx.v1beta1.RetryTransferResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_tx_v1beta1_RetryTransferResponse(buffer_arg) {
  return cs3_tx_v1beta1_tx_api_pb.RetryTransferResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// Tx API
//
// The Tx API provides data transfer capabilities.
//
// The key words "MUST", "MUST NOT", "REQUIRED", "SHALL", "SHALL
// NOT", "SHOULD", "SHOULD NOT", "RECOMMENDED",  "MAY", and
// "OPTIONAL" in this document are to be interpreted as described in
// RFC 2119.
//
// The following are global requirements that apply to all methods:
// Any method MUST return CODE_OK on a succesful operation.
// Any method MAY return NOT_IMPLEMENTED.
// Any method MAY return INTERNAL.
// Any method MAY return UNKNOWN.
// Any method MAY return UNAUTHENTICATED.
var TxAPIService = exports.TxAPIService = {
  // Requests the destination to pull a resource from source.
// Returns a PullTransferResponse
pullTransfer: {
    path: '/cs3.tx.v1beta1.TxAPI/PullTransfer',
    requestStream: false,
    responseStream: false,
    requestType: cs3_tx_v1beta1_tx_api_pb.PullTransferRequest,
    responseType: cs3_tx_v1beta1_tx_api_pb.PullTransferResponse,
    requestSerialize: serialize_cs3_tx_v1beta1_PullTransferRequest,
    requestDeserialize: deserialize_cs3_tx_v1beta1_PullTransferRequest,
    responseSerialize: serialize_cs3_tx_v1beta1_PullTransferResponse,
    responseDeserialize: deserialize_cs3_tx_v1beta1_PullTransferResponse,
  },
  // Requests a transfer status.
getTransferStatus: {
    path: '/cs3.tx.v1beta1.TxAPI/GetTransferStatus',
    requestStream: false,
    responseStream: false,
    requestType: cs3_tx_v1beta1_tx_api_pb.GetTransferStatusRequest,
    responseType: cs3_tx_v1beta1_tx_api_pb.GetTransferStatusResponse,
    requestSerialize: serialize_cs3_tx_v1beta1_GetTransferStatusRequest,
    requestDeserialize: deserialize_cs3_tx_v1beta1_GetTransferStatusRequest,
    responseSerialize: serialize_cs3_tx_v1beta1_GetTransferStatusResponse,
    responseDeserialize: deserialize_cs3_tx_v1beta1_GetTransferStatusResponse,
  },
  // Requests to cancel a transfer.
cancelTransfer: {
    path: '/cs3.tx.v1beta1.TxAPI/CancelTransfer',
    requestStream: false,
    responseStream: false,
    requestType: cs3_tx_v1beta1_tx_api_pb.CancelTransferRequest,
    responseType: cs3_tx_v1beta1_tx_api_pb.CancelTransferResponse,
    requestSerialize: serialize_cs3_tx_v1beta1_CancelTransferRequest,
    requestDeserialize: deserialize_cs3_tx_v1beta1_CancelTransferRequest,
    responseSerialize: serialize_cs3_tx_v1beta1_CancelTransferResponse,
    responseDeserialize: deserialize_cs3_tx_v1beta1_CancelTransferResponse,
  },
  // Requests a list of transfers received by the authenticated principle.
// If a filter is specified, only transfers satisfying the filter MUST be returned.
listTransfers: {
    path: '/cs3.tx.v1beta1.TxAPI/ListTransfers',
    requestStream: false,
    responseStream: false,
    requestType: cs3_tx_v1beta1_tx_api_pb.ListTransfersRequest,
    responseType: cs3_tx_v1beta1_tx_api_pb.ListTransfersResponse,
    requestSerialize: serialize_cs3_tx_v1beta1_ListTransfersRequest,
    requestDeserialize: deserialize_cs3_tx_v1beta1_ListTransfersRequest,
    responseSerialize: serialize_cs3_tx_v1beta1_ListTransfersResponse,
    responseDeserialize: deserialize_cs3_tx_v1beta1_ListTransfersResponse,
  },
  // Requests retrying a transfer.
retryTransfer: {
    path: '/cs3.tx.v1beta1.TxAPI/RetryTransfer',
    requestStream: false,
    responseStream: false,
    requestType: cs3_tx_v1beta1_tx_api_pb.RetryTransferRequest,
    responseType: cs3_tx_v1beta1_tx_api_pb.RetryTransferResponse,
    requestSerialize: serialize_cs3_tx_v1beta1_RetryTransferRequest,
    requestDeserialize: deserialize_cs3_tx_v1beta1_RetryTransferRequest,
    responseSerialize: serialize_cs3_tx_v1beta1_RetryTransferResponse,
    responseDeserialize: deserialize_cs3_tx_v1beta1_RetryTransferResponse,
  },
};

exports.TxAPIClient = grpc.makeGenericClientConstructor(TxAPIService);
