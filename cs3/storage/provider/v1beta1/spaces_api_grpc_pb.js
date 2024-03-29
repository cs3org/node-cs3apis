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
var grpc = require('grpc');
var cs3_storage_provider_v1beta1_spaces_api_pb = require('../../../../cs3/storage/provider/v1beta1/spaces_api_pb.js');
var cs3_identity_user_v1beta1_resources_pb = require('../../../../cs3/identity/user/v1beta1/resources_pb.js');
var cs3_rpc_v1beta1_status_pb = require('../../../../cs3/rpc/v1beta1/status_pb.js');
var cs3_storage_provider_v1beta1_resources_pb = require('../../../../cs3/storage/provider/v1beta1/resources_pb.js');
var cs3_types_v1beta1_types_pb = require('../../../../cs3/types/v1beta1/types_pb.js');
var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js');

function serialize_cs3_storage_provider_v1beta1_CreateStorageSpaceRequest(arg) {
  if (!(arg instanceof cs3_storage_provider_v1beta1_spaces_api_pb.CreateStorageSpaceRequest)) {
    throw new Error('Expected argument of type cs3.storage.provider.v1beta1.CreateStorageSpaceRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_storage_provider_v1beta1_CreateStorageSpaceRequest(buffer_arg) {
  return cs3_storage_provider_v1beta1_spaces_api_pb.CreateStorageSpaceRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cs3_storage_provider_v1beta1_CreateStorageSpaceResponse(arg) {
  if (!(arg instanceof cs3_storage_provider_v1beta1_spaces_api_pb.CreateStorageSpaceResponse)) {
    throw new Error('Expected argument of type cs3.storage.provider.v1beta1.CreateStorageSpaceResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_storage_provider_v1beta1_CreateStorageSpaceResponse(buffer_arg) {
  return cs3_storage_provider_v1beta1_spaces_api_pb.CreateStorageSpaceResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cs3_storage_provider_v1beta1_DeleteStorageSpaceRequest(arg) {
  if (!(arg instanceof cs3_storage_provider_v1beta1_spaces_api_pb.DeleteStorageSpaceRequest)) {
    throw new Error('Expected argument of type cs3.storage.provider.v1beta1.DeleteStorageSpaceRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_storage_provider_v1beta1_DeleteStorageSpaceRequest(buffer_arg) {
  return cs3_storage_provider_v1beta1_spaces_api_pb.DeleteStorageSpaceRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cs3_storage_provider_v1beta1_DeleteStorageSpaceResponse(arg) {
  if (!(arg instanceof cs3_storage_provider_v1beta1_spaces_api_pb.DeleteStorageSpaceResponse)) {
    throw new Error('Expected argument of type cs3.storage.provider.v1beta1.DeleteStorageSpaceResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_storage_provider_v1beta1_DeleteStorageSpaceResponse(buffer_arg) {
  return cs3_storage_provider_v1beta1_spaces_api_pb.DeleteStorageSpaceResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cs3_storage_provider_v1beta1_ListStorageSpacesRequest(arg) {
  if (!(arg instanceof cs3_storage_provider_v1beta1_spaces_api_pb.ListStorageSpacesRequest)) {
    throw new Error('Expected argument of type cs3.storage.provider.v1beta1.ListStorageSpacesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_storage_provider_v1beta1_ListStorageSpacesRequest(buffer_arg) {
  return cs3_storage_provider_v1beta1_spaces_api_pb.ListStorageSpacesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cs3_storage_provider_v1beta1_ListStorageSpacesResponse(arg) {
  if (!(arg instanceof cs3_storage_provider_v1beta1_spaces_api_pb.ListStorageSpacesResponse)) {
    throw new Error('Expected argument of type cs3.storage.provider.v1beta1.ListStorageSpacesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_storage_provider_v1beta1_ListStorageSpacesResponse(buffer_arg) {
  return cs3_storage_provider_v1beta1_spaces_api_pb.ListStorageSpacesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cs3_storage_provider_v1beta1_UpdateStorageSpaceRequest(arg) {
  if (!(arg instanceof cs3_storage_provider_v1beta1_spaces_api_pb.UpdateStorageSpaceRequest)) {
    throw new Error('Expected argument of type cs3.storage.provider.v1beta1.UpdateStorageSpaceRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_storage_provider_v1beta1_UpdateStorageSpaceRequest(buffer_arg) {
  return cs3_storage_provider_v1beta1_spaces_api_pb.UpdateStorageSpaceRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cs3_storage_provider_v1beta1_UpdateStorageSpaceResponse(arg) {
  if (!(arg instanceof cs3_storage_provider_v1beta1_spaces_api_pb.UpdateStorageSpaceResponse)) {
    throw new Error('Expected argument of type cs3.storage.provider.v1beta1.UpdateStorageSpaceResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_storage_provider_v1beta1_UpdateStorageSpaceResponse(buffer_arg) {
  return cs3_storage_provider_v1beta1_spaces_api_pb.UpdateStorageSpaceResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// Spaces API
//
// The Spaces API is meant to manipulate spaces in the service.
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
var SpacesAPIService = exports.SpacesAPIService = {
  // Creates a storage space.
createStorageSpace: {
    path: '/cs3.storage.provider.v1beta1.SpacesAPI/CreateStorageSpace',
    requestStream: false,
    responseStream: false,
    requestType: cs3_storage_provider_v1beta1_spaces_api_pb.CreateStorageSpaceRequest,
    responseType: cs3_storage_provider_v1beta1_spaces_api_pb.CreateStorageSpaceResponse,
    requestSerialize: serialize_cs3_storage_provider_v1beta1_CreateStorageSpaceRequest,
    requestDeserialize: deserialize_cs3_storage_provider_v1beta1_CreateStorageSpaceRequest,
    responseSerialize: serialize_cs3_storage_provider_v1beta1_CreateStorageSpaceResponse,
    responseDeserialize: deserialize_cs3_storage_provider_v1beta1_CreateStorageSpaceResponse,
  },
  // Lists storage spaces.
listStorageSpaces: {
    path: '/cs3.storage.provider.v1beta1.SpacesAPI/ListStorageSpaces',
    requestStream: false,
    responseStream: false,
    requestType: cs3_storage_provider_v1beta1_spaces_api_pb.ListStorageSpacesRequest,
    responseType: cs3_storage_provider_v1beta1_spaces_api_pb.ListStorageSpacesResponse,
    requestSerialize: serialize_cs3_storage_provider_v1beta1_ListStorageSpacesRequest,
    requestDeserialize: deserialize_cs3_storage_provider_v1beta1_ListStorageSpacesRequest,
    responseSerialize: serialize_cs3_storage_provider_v1beta1_ListStorageSpacesResponse,
    responseDeserialize: deserialize_cs3_storage_provider_v1beta1_ListStorageSpacesResponse,
  },
  // Updates a storage space.
updateStorageSpace: {
    path: '/cs3.storage.provider.v1beta1.SpacesAPI/UpdateStorageSpace',
    requestStream: false,
    responseStream: false,
    requestType: cs3_storage_provider_v1beta1_spaces_api_pb.UpdateStorageSpaceRequest,
    responseType: cs3_storage_provider_v1beta1_spaces_api_pb.UpdateStorageSpaceResponse,
    requestSerialize: serialize_cs3_storage_provider_v1beta1_UpdateStorageSpaceRequest,
    requestDeserialize: deserialize_cs3_storage_provider_v1beta1_UpdateStorageSpaceRequest,
    responseSerialize: serialize_cs3_storage_provider_v1beta1_UpdateStorageSpaceResponse,
    responseDeserialize: deserialize_cs3_storage_provider_v1beta1_UpdateStorageSpaceResponse,
  },
  // Deletes a storage space.
deleteStorageSpace: {
    path: '/cs3.storage.provider.v1beta1.SpacesAPI/DeleteStorageSpace',
    requestStream: false,
    responseStream: false,
    requestType: cs3_storage_provider_v1beta1_spaces_api_pb.DeleteStorageSpaceRequest,
    responseType: cs3_storage_provider_v1beta1_spaces_api_pb.DeleteStorageSpaceResponse,
    requestSerialize: serialize_cs3_storage_provider_v1beta1_DeleteStorageSpaceRequest,
    requestDeserialize: deserialize_cs3_storage_provider_v1beta1_DeleteStorageSpaceRequest,
    responseSerialize: serialize_cs3_storage_provider_v1beta1_DeleteStorageSpaceResponse,
    responseDeserialize: deserialize_cs3_storage_provider_v1beta1_DeleteStorageSpaceResponse,
  },
};

exports.SpacesAPIClient = grpc.makeGenericClientConstructor(SpacesAPIService);
