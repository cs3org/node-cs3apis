// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
// Copyright 2018-2025 CERN
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
var grpc = require('grpc');
var cs3_ocm_incoming_v1beta1_ocm_incoming_api_pb = require('../../../../cs3/ocm/incoming/v1beta1/ocm_incoming_api_pb.js');
var cs3_identity_user_v1beta1_resources_pb = require('../../../../cs3/identity/user/v1beta1/resources_pb.js');
var cs3_rpc_v1beta1_status_pb = require('../../../../cs3/rpc/v1beta1/status_pb.js');
var cs3_sharing_ocm_v1beta1_resources_pb = require('../../../../cs3/sharing/ocm/v1beta1/resources_pb.js');
var cs3_storage_provider_v1beta1_resources_pb = require('../../../../cs3/storage/provider/v1beta1/resources_pb.js');
var cs3_types_v1beta1_types_pb = require('../../../../cs3/types/v1beta1/types_pb.js');

function serialize_cs3_ocm_incoming_v1beta1_CreateOCMIncomingShareRequest(arg) {
  if (!(arg instanceof cs3_ocm_incoming_v1beta1_ocm_incoming_api_pb.CreateOCMIncomingShareRequest)) {
    throw new Error('Expected argument of type cs3.ocm.incoming.v1beta1.CreateOCMIncomingShareRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_ocm_incoming_v1beta1_CreateOCMIncomingShareRequest(buffer_arg) {
  return cs3_ocm_incoming_v1beta1_ocm_incoming_api_pb.CreateOCMIncomingShareRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cs3_ocm_incoming_v1beta1_CreateOCMIncomingShareResponse(arg) {
  if (!(arg instanceof cs3_ocm_incoming_v1beta1_ocm_incoming_api_pb.CreateOCMIncomingShareResponse)) {
    throw new Error('Expected argument of type cs3.ocm.incoming.v1beta1.CreateOCMIncomingShareResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_ocm_incoming_v1beta1_CreateOCMIncomingShareResponse(buffer_arg) {
  return cs3_ocm_incoming_v1beta1_ocm_incoming_api_pb.CreateOCMIncomingShareResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cs3_ocm_incoming_v1beta1_DeleteOCMIncomingShareRequest(arg) {
  if (!(arg instanceof cs3_ocm_incoming_v1beta1_ocm_incoming_api_pb.DeleteOCMIncomingShareRequest)) {
    throw new Error('Expected argument of type cs3.ocm.incoming.v1beta1.DeleteOCMIncomingShareRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_ocm_incoming_v1beta1_DeleteOCMIncomingShareRequest(buffer_arg) {
  return cs3_ocm_incoming_v1beta1_ocm_incoming_api_pb.DeleteOCMIncomingShareRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cs3_ocm_incoming_v1beta1_DeleteOCMIncomingShareResponse(arg) {
  if (!(arg instanceof cs3_ocm_incoming_v1beta1_ocm_incoming_api_pb.DeleteOCMIncomingShareResponse)) {
    throw new Error('Expected argument of type cs3.ocm.incoming.v1beta1.DeleteOCMIncomingShareResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_ocm_incoming_v1beta1_DeleteOCMIncomingShareResponse(buffer_arg) {
  return cs3_ocm_incoming_v1beta1_ocm_incoming_api_pb.DeleteOCMIncomingShareResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cs3_ocm_incoming_v1beta1_UpdateOCMIncomingShareRequest(arg) {
  if (!(arg instanceof cs3_ocm_incoming_v1beta1_ocm_incoming_api_pb.UpdateOCMIncomingShareRequest)) {
    throw new Error('Expected argument of type cs3.ocm.incoming.v1beta1.UpdateOCMIncomingShareRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_ocm_incoming_v1beta1_UpdateOCMIncomingShareRequest(buffer_arg) {
  return cs3_ocm_incoming_v1beta1_ocm_incoming_api_pb.UpdateOCMIncomingShareRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cs3_ocm_incoming_v1beta1_UpdateOCMIncomingShareResponse(arg) {
  if (!(arg instanceof cs3_ocm_incoming_v1beta1_ocm_incoming_api_pb.UpdateOCMIncomingShareResponse)) {
    throw new Error('Expected argument of type cs3.ocm.incoming.v1beta1.UpdateOCMIncomingShareResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_ocm_incoming_v1beta1_UpdateOCMIncomingShareResponse(buffer_arg) {
  return cs3_ocm_incoming_v1beta1_ocm_incoming_api_pb.UpdateOCMIncomingShareResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// OCM Incoming API
//
// The OCM Incoming API is used to persist in the local system the incoming remote
// shares that are sent via the Open Cloud Mesh (OCM) sharing protocol.
// Implementations are expected to expose the `/ocm` endpoints according to the
// OCM API, and in response to those endpoints call the following API.
// Support for multi-protocol shares is included, if the remote sender supplies
// a multi-protocol share.
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
var OcmIncomingAPIService = exports.OcmIncomingAPIService = {
  // Creates a new OCM share in response to a call from remote to `/ocm/shares`. See:
// https://cs3org.github.io/OCM-API/docs.html?branch=v1.2.0&repo=OCM-API&user=cs3org#/paths/~1shares/post
createOCMIncomingShare: {
    path: '/cs3.ocm.incoming.v1beta1.OcmIncomingAPI/CreateOCMIncomingShare',
    requestStream: false,
    responseStream: false,
    requestType: cs3_ocm_incoming_v1beta1_ocm_incoming_api_pb.CreateOCMIncomingShareRequest,
    responseType: cs3_ocm_incoming_v1beta1_ocm_incoming_api_pb.CreateOCMIncomingShareResponse,
    requestSerialize: serialize_cs3_ocm_incoming_v1beta1_CreateOCMIncomingShareRequest,
    requestDeserialize: deserialize_cs3_ocm_incoming_v1beta1_CreateOCMIncomingShareRequest,
    responseSerialize: serialize_cs3_ocm_incoming_v1beta1_CreateOCMIncomingShareResponse,
    responseDeserialize: deserialize_cs3_ocm_incoming_v1beta1_CreateOCMIncomingShareResponse,
  },
  // Updates an OCM share in response to a notification from remote to `/ocm/notifications`. See:
// https://cs3org.github.io/OCM-API/docs.html?branch=v1.2.0&repo=OCM-API&user=cs3org#/paths/~1notifications/post
updateOCMIncomingShare: {
    path: '/cs3.ocm.incoming.v1beta1.OcmIncomingAPI/UpdateOCMIncomingShare',
    requestStream: false,
    responseStream: false,
    requestType: cs3_ocm_incoming_v1beta1_ocm_incoming_api_pb.UpdateOCMIncomingShareRequest,
    responseType: cs3_ocm_incoming_v1beta1_ocm_incoming_api_pb.UpdateOCMIncomingShareResponse,
    requestSerialize: serialize_cs3_ocm_incoming_v1beta1_UpdateOCMIncomingShareRequest,
    requestDeserialize: deserialize_cs3_ocm_incoming_v1beta1_UpdateOCMIncomingShareRequest,
    responseSerialize: serialize_cs3_ocm_incoming_v1beta1_UpdateOCMIncomingShareResponse,
    responseDeserialize: deserialize_cs3_ocm_incoming_v1beta1_UpdateOCMIncomingShareResponse,
  },
  // Deletes an OCM share in response to a notification from remote to `/ocm/notifications`. See:
// https://cs3org.github.io/OCM-API/docs.html?branch=v1.2.0&repo=OCM-API&user=cs3org#/paths/~1notifications/post
deleteOCMIncomingShare: {
    path: '/cs3.ocm.incoming.v1beta1.OcmIncomingAPI/DeleteOCMIncomingShare',
    requestStream: false,
    responseStream: false,
    requestType: cs3_ocm_incoming_v1beta1_ocm_incoming_api_pb.DeleteOCMIncomingShareRequest,
    responseType: cs3_ocm_incoming_v1beta1_ocm_incoming_api_pb.DeleteOCMIncomingShareResponse,
    requestSerialize: serialize_cs3_ocm_incoming_v1beta1_DeleteOCMIncomingShareRequest,
    requestDeserialize: deserialize_cs3_ocm_incoming_v1beta1_DeleteOCMIncomingShareRequest,
    responseSerialize: serialize_cs3_ocm_incoming_v1beta1_DeleteOCMIncomingShareResponse,
    responseDeserialize: deserialize_cs3_ocm_incoming_v1beta1_DeleteOCMIncomingShareResponse,
  },
};

exports.OcmIncomingAPIClient = grpc.makeGenericClientConstructor(OcmIncomingAPIService);
