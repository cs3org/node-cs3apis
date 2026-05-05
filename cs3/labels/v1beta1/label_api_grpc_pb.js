// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
// Copyright 2018-2026 CERN
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
var cs3_labels_v1beta1_label_api_pb = require('../../../cs3/labels/v1beta1/label_api_pb.js');
var cs3_rpc_v1beta1_status_pb = require('../../../cs3/rpc/v1beta1/status_pb.js');
var cs3_identity_user_v1beta1_resources_pb = require('../../../cs3/identity/user/v1beta1/resources_pb.js');
var cs3_types_v1beta1_types_pb = require('../../../cs3/types/v1beta1/types_pb.js');
var cs3_storage_provider_v1beta1_resources_pb = require('../../../cs3/storage/provider/v1beta1/resources_pb.js');

function serialize_cs3_labels_v1beta1_AddLabelRequest(arg) {
  if (!(arg instanceof cs3_labels_v1beta1_label_api_pb.AddLabelRequest)) {
    throw new Error('Expected argument of type cs3.labels.v1beta1.AddLabelRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_labels_v1beta1_AddLabelRequest(buffer_arg) {
  return cs3_labels_v1beta1_label_api_pb.AddLabelRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cs3_labels_v1beta1_AddLabelResponse(arg) {
  if (!(arg instanceof cs3_labels_v1beta1_label_api_pb.AddLabelResponse)) {
    throw new Error('Expected argument of type cs3.labels.v1beta1.AddLabelResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_labels_v1beta1_AddLabelResponse(buffer_arg) {
  return cs3_labels_v1beta1_label_api_pb.AddLabelResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cs3_labels_v1beta1_ListLabelsRequest(arg) {
  if (!(arg instanceof cs3_labels_v1beta1_label_api_pb.ListLabelsRequest)) {
    throw new Error('Expected argument of type cs3.labels.v1beta1.ListLabelsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_labels_v1beta1_ListLabelsRequest(buffer_arg) {
  return cs3_labels_v1beta1_label_api_pb.ListLabelsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cs3_labels_v1beta1_ListLabelsResponse(arg) {
  if (!(arg instanceof cs3_labels_v1beta1_label_api_pb.ListLabelsResponse)) {
    throw new Error('Expected argument of type cs3.labels.v1beta1.ListLabelsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_labels_v1beta1_ListLabelsResponse(buffer_arg) {
  return cs3_labels_v1beta1_label_api_pb.ListLabelsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cs3_labels_v1beta1_ListResourcesForLabelRequest(arg) {
  if (!(arg instanceof cs3_labels_v1beta1_label_api_pb.ListResourcesForLabelRequest)) {
    throw new Error('Expected argument of type cs3.labels.v1beta1.ListResourcesForLabelRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_labels_v1beta1_ListResourcesForLabelRequest(buffer_arg) {
  return cs3_labels_v1beta1_label_api_pb.ListResourcesForLabelRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cs3_labels_v1beta1_ListResourcesForLabelResponse(arg) {
  if (!(arg instanceof cs3_labels_v1beta1_label_api_pb.ListResourcesForLabelResponse)) {
    throw new Error('Expected argument of type cs3.labels.v1beta1.ListResourcesForLabelResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_labels_v1beta1_ListResourcesForLabelResponse(buffer_arg) {
  return cs3_labels_v1beta1_label_api_pb.ListResourcesForLabelResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cs3_labels_v1beta1_RemoveLabelRequest(arg) {
  if (!(arg instanceof cs3_labels_v1beta1_label_api_pb.RemoveLabelRequest)) {
    throw new Error('Expected argument of type cs3.labels.v1beta1.RemoveLabelRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_labels_v1beta1_RemoveLabelRequest(buffer_arg) {
  return cs3_labels_v1beta1_label_api_pb.RemoveLabelRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cs3_labels_v1beta1_RemoveLabelResponse(arg) {
  if (!(arg instanceof cs3_labels_v1beta1_label_api_pb.RemoveLabelResponse)) {
    throw new Error('Expected argument of type cs3.labels.v1beta1.RemoveLabelResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_labels_v1beta1_RemoveLabelResponse(buffer_arg) {
  return cs3_labels_v1beta1_label_api_pb.RemoveLabelResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// Labels API.
//
// The Labels API is responsible for:
// * Attaching and removing labels to/from resources
// * Listing all resources attached to a given label
// * Listing all unique labels for a given user
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
var LabelsAPIService = exports.LabelsAPIService = {
  // Attach a label to a resource for a user.
addLabel: {
    path: '/cs3.labels.v1beta1.LabelsAPI/AddLabel',
    requestStream: false,
    responseStream: false,
    requestType: cs3_labels_v1beta1_label_api_pb.AddLabelRequest,
    responseType: cs3_labels_v1beta1_label_api_pb.AddLabelResponse,
    requestSerialize: serialize_cs3_labels_v1beta1_AddLabelRequest,
    requestDeserialize: deserialize_cs3_labels_v1beta1_AddLabelRequest,
    responseSerialize: serialize_cs3_labels_v1beta1_AddLabelResponse,
    responseDeserialize: deserialize_cs3_labels_v1beta1_AddLabelResponse,
  },
  // Removes a label from a resource for a user.
removeLabel: {
    path: '/cs3.labels.v1beta1.LabelsAPI/RemoveLabel',
    requestStream: false,
    responseStream: false,
    requestType: cs3_labels_v1beta1_label_api_pb.RemoveLabelRequest,
    responseType: cs3_labels_v1beta1_label_api_pb.RemoveLabelResponse,
    requestSerialize: serialize_cs3_labels_v1beta1_RemoveLabelRequest,
    requestDeserialize: deserialize_cs3_labels_v1beta1_RemoveLabelRequest,
    responseSerialize: serialize_cs3_labels_v1beta1_RemoveLabelResponse,
    responseDeserialize: deserialize_cs3_labels_v1beta1_RemoveLabelResponse,
  },
  // List the unique labels that a user has attached to resources
listLabels: {
    path: '/cs3.labels.v1beta1.LabelsAPI/ListLabels',
    requestStream: false,
    responseStream: false,
    requestType: cs3_labels_v1beta1_label_api_pb.ListLabelsRequest,
    responseType: cs3_labels_v1beta1_label_api_pb.ListLabelsResponse,
    requestSerialize: serialize_cs3_labels_v1beta1_ListLabelsRequest,
    requestDeserialize: deserialize_cs3_labels_v1beta1_ListLabelsRequest,
    responseSerialize: serialize_cs3_labels_v1beta1_ListLabelsResponse,
    responseDeserialize: deserialize_cs3_labels_v1beta1_ListLabelsResponse,
  },
  // List the resources which have a given label attached for a given user
listResourcesForLabel: {
    path: '/cs3.labels.v1beta1.LabelsAPI/ListResourcesForLabel',
    requestStream: false,
    responseStream: false,
    requestType: cs3_labels_v1beta1_label_api_pb.ListResourcesForLabelRequest,
    responseType: cs3_labels_v1beta1_label_api_pb.ListResourcesForLabelResponse,
    requestSerialize: serialize_cs3_labels_v1beta1_ListResourcesForLabelRequest,
    requestDeserialize: deserialize_cs3_labels_v1beta1_ListResourcesForLabelRequest,
    responseSerialize: serialize_cs3_labels_v1beta1_ListResourcesForLabelResponse,
    responseDeserialize: deserialize_cs3_labels_v1beta1_ListResourcesForLabelResponse,
  },
};

exports.LabelsAPIClient = grpc.makeGenericClientConstructor(LabelsAPIService);
