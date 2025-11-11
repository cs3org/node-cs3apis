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
var cs3_ocm_core_v1beta1_ocm_core_api_pb = require('../../../../cs3/ocm/core/v1beta1/ocm_core_api_pb.js');
var cs3_identity_user_v1beta1_resources_pb = require('../../../../cs3/identity/user/v1beta1/resources_pb.js');
var cs3_rpc_v1beta1_status_pb = require('../../../../cs3/rpc/v1beta1/status_pb.js');
var cs3_sharing_ocm_v1beta1_resources_pb = require('../../../../cs3/sharing/ocm/v1beta1/resources_pb.js');
var cs3_storage_provider_v1beta1_resources_pb = require('../../../../cs3/storage/provider/v1beta1/resources_pb.js');
var cs3_types_v1beta1_types_pb = require('../../../../cs3/types/v1beta1/types_pb.js');

function serialize_cs3_ocm_core_v1beta1_CreateOCMCoreShareRequest(arg) {
  if (!(arg instanceof cs3_ocm_core_v1beta1_ocm_core_api_pb.CreateOCMCoreShareRequest)) {
    throw new Error('Expected argument of type cs3.ocm.core.v1beta1.CreateOCMCoreShareRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_ocm_core_v1beta1_CreateOCMCoreShareRequest(buffer_arg) {
  return cs3_ocm_core_v1beta1_ocm_core_api_pb.CreateOCMCoreShareRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cs3_ocm_core_v1beta1_CreateOCMCoreShareResponse(arg) {
  if (!(arg instanceof cs3_ocm_core_v1beta1_ocm_core_api_pb.CreateOCMCoreShareResponse)) {
    throw new Error('Expected argument of type cs3.ocm.core.v1beta1.CreateOCMCoreShareResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_ocm_core_v1beta1_CreateOCMCoreShareResponse(buffer_arg) {
  return cs3_ocm_core_v1beta1_ocm_core_api_pb.CreateOCMCoreShareResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cs3_ocm_core_v1beta1_DeleteOCMCoreShareRequest(arg) {
  if (!(arg instanceof cs3_ocm_core_v1beta1_ocm_core_api_pb.DeleteOCMCoreShareRequest)) {
    throw new Error('Expected argument of type cs3.ocm.core.v1beta1.DeleteOCMCoreShareRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_ocm_core_v1beta1_DeleteOCMCoreShareRequest(buffer_arg) {
  return cs3_ocm_core_v1beta1_ocm_core_api_pb.DeleteOCMCoreShareRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cs3_ocm_core_v1beta1_DeleteOCMCoreShareResponse(arg) {
  if (!(arg instanceof cs3_ocm_core_v1beta1_ocm_core_api_pb.DeleteOCMCoreShareResponse)) {
    throw new Error('Expected argument of type cs3.ocm.core.v1beta1.DeleteOCMCoreShareResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_ocm_core_v1beta1_DeleteOCMCoreShareResponse(buffer_arg) {
  return cs3_ocm_core_v1beta1_ocm_core_api_pb.DeleteOCMCoreShareResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cs3_ocm_core_v1beta1_UpdateOCMCoreShareRequest(arg) {
  if (!(arg instanceof cs3_ocm_core_v1beta1_ocm_core_api_pb.UpdateOCMCoreShareRequest)) {
    throw new Error('Expected argument of type cs3.ocm.core.v1beta1.UpdateOCMCoreShareRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_ocm_core_v1beta1_UpdateOCMCoreShareRequest(buffer_arg) {
  return cs3_ocm_core_v1beta1_ocm_core_api_pb.UpdateOCMCoreShareRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cs3_ocm_core_v1beta1_UpdateOCMCoreShareResponse(arg) {
  if (!(arg instanceof cs3_ocm_core_v1beta1_ocm_core_api_pb.UpdateOCMCoreShareResponse)) {
    throw new Error('Expected argument of type cs3.ocm.core.v1beta1.UpdateOCMCoreShareResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_ocm_core_v1beta1_UpdateOCMCoreShareResponse(buffer_arg) {
  return cs3_ocm_core_v1beta1_ocm_core_api_pb.UpdateOCMCoreShareResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// OCM Core API (deprecated and to be removed, use cs3/ocm/incoming/v1beta1/incoming_api.proto instead)
//
// This API is the mapping for the local system of the Open Cloud Mesh
// (OCM) sharing protocol. Implementations are expected to expose the `/ocm`
// endpoints according to the OCM API, and in response to those endpoints call the
// following API. Support for multi-protocol shares is included, if the remote
// sender supplies a multi-protocol share.
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
var OcmCoreAPIService = exports.OcmCoreAPIService = {
  // Deprecated. Creates a new OCM share, in response to a call from the remote system
createOCMCoreShare: {
    path: '/cs3.ocm.core.v1beta1.OcmCoreAPI/CreateOCMCoreShare',
    requestStream: false,
    responseStream: false,
    requestType: cs3_ocm_core_v1beta1_ocm_core_api_pb.CreateOCMCoreShareRequest,
    responseType: cs3_ocm_core_v1beta1_ocm_core_api_pb.CreateOCMCoreShareResponse,
    requestSerialize: serialize_cs3_ocm_core_v1beta1_CreateOCMCoreShareRequest,
    requestDeserialize: deserialize_cs3_ocm_core_v1beta1_CreateOCMCoreShareRequest,
    responseSerialize: serialize_cs3_ocm_core_v1beta1_CreateOCMCoreShareResponse,
    responseDeserialize: deserialize_cs3_ocm_core_v1beta1_CreateOCMCoreShareResponse,
  },
  // Deprecated. Updates an OCM share, in response to a notification from the remote system
updateOCMCoreShare: {
    path: '/cs3.ocm.core.v1beta1.OcmCoreAPI/UpdateOCMCoreShare',
    requestStream: false,
    responseStream: false,
    requestType: cs3_ocm_core_v1beta1_ocm_core_api_pb.UpdateOCMCoreShareRequest,
    responseType: cs3_ocm_core_v1beta1_ocm_core_api_pb.UpdateOCMCoreShareResponse,
    requestSerialize: serialize_cs3_ocm_core_v1beta1_UpdateOCMCoreShareRequest,
    requestDeserialize: deserialize_cs3_ocm_core_v1beta1_UpdateOCMCoreShareRequest,
    responseSerialize: serialize_cs3_ocm_core_v1beta1_UpdateOCMCoreShareResponse,
    responseDeserialize: deserialize_cs3_ocm_core_v1beta1_UpdateOCMCoreShareResponse,
  },
  // Deprecated. Deletes an OCM share, in response to a notification from the remote system
deleteOCMCoreShare: {
    path: '/cs3.ocm.core.v1beta1.OcmCoreAPI/DeleteOCMCoreShare',
    requestStream: false,
    responseStream: false,
    requestType: cs3_ocm_core_v1beta1_ocm_core_api_pb.DeleteOCMCoreShareRequest,
    responseType: cs3_ocm_core_v1beta1_ocm_core_api_pb.DeleteOCMCoreShareResponse,
    requestSerialize: serialize_cs3_ocm_core_v1beta1_DeleteOCMCoreShareRequest,
    requestDeserialize: deserialize_cs3_ocm_core_v1beta1_DeleteOCMCoreShareRequest,
    responseSerialize: serialize_cs3_ocm_core_v1beta1_DeleteOCMCoreShareResponse,
    responseDeserialize: deserialize_cs3_ocm_core_v1beta1_DeleteOCMCoreShareResponse,
  },
};

exports.OcmCoreAPIClient = grpc.makeGenericClientConstructor(OcmCoreAPIService);
