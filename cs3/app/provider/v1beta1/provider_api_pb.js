// source: cs3/app/provider/v1beta1/provider_api.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var cs3_app_provider_v1beta1_resources_pb = require('../../../../cs3/app/provider/v1beta1/resources_pb.js');
goog.object.extend(proto, cs3_app_provider_v1beta1_resources_pb);
var cs3_rpc_v1beta1_status_pb = require('../../../../cs3/rpc/v1beta1/status_pb.js');
goog.object.extend(proto, cs3_rpc_v1beta1_status_pb);
var cs3_storage_provider_v1beta1_resources_pb = require('../../../../cs3/storage/provider/v1beta1/resources_pb.js');
goog.object.extend(proto, cs3_storage_provider_v1beta1_resources_pb);
var cs3_types_v1beta1_types_pb = require('../../../../cs3/types/v1beta1/types_pb.js');
goog.object.extend(proto, cs3_types_v1beta1_types_pb);
goog.exportSymbol('proto.cs3.app.provider.v1beta1.OpenInAppRequest', null, global);
goog.exportSymbol('proto.cs3.app.provider.v1beta1.OpenInAppRequest.ViewMode', null, global);
goog.exportSymbol('proto.cs3.app.provider.v1beta1.OpenInAppResponse', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cs3.app.provider.v1beta1.OpenInAppRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cs3.app.provider.v1beta1.OpenInAppRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cs3.app.provider.v1beta1.OpenInAppRequest.displayName = 'proto.cs3.app.provider.v1beta1.OpenInAppRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cs3.app.provider.v1beta1.OpenInAppResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cs3.app.provider.v1beta1.OpenInAppResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cs3.app.provider.v1beta1.OpenInAppResponse.displayName = 'proto.cs3.app.provider.v1beta1.OpenInAppResponse';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cs3.app.provider.v1beta1.OpenInAppRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.cs3.app.provider.v1beta1.OpenInAppRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cs3.app.provider.v1beta1.OpenInAppRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.app.provider.v1beta1.OpenInAppRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    opaque: (f = msg.getOpaque()) && cs3_types_v1beta1_types_pb.Opaque.toObject(includeInstance, f),
    resourceInfo: (f = msg.getResourceInfo()) && cs3_storage_provider_v1beta1_resources_pb.ResourceInfo.toObject(includeInstance, f),
    viewMode: jspb.Message.getFieldWithDefault(msg, 3, 0),
    accessToken: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cs3.app.provider.v1beta1.OpenInAppRequest}
 */
proto.cs3.app.provider.v1beta1.OpenInAppRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cs3.app.provider.v1beta1.OpenInAppRequest;
  return proto.cs3.app.provider.v1beta1.OpenInAppRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cs3.app.provider.v1beta1.OpenInAppRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cs3.app.provider.v1beta1.OpenInAppRequest}
 */
proto.cs3.app.provider.v1beta1.OpenInAppRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new cs3_types_v1beta1_types_pb.Opaque;
      reader.readMessage(value,cs3_types_v1beta1_types_pb.Opaque.deserializeBinaryFromReader);
      msg.setOpaque(value);
      break;
    case 2:
      var value = new cs3_storage_provider_v1beta1_resources_pb.ResourceInfo;
      reader.readMessage(value,cs3_storage_provider_v1beta1_resources_pb.ResourceInfo.deserializeBinaryFromReader);
      msg.setResourceInfo(value);
      break;
    case 3:
      var value = /** @type {!proto.cs3.app.provider.v1beta1.OpenInAppRequest.ViewMode} */ (reader.readEnum());
      msg.setViewMode(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setAccessToken(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cs3.app.provider.v1beta1.OpenInAppRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cs3.app.provider.v1beta1.OpenInAppRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cs3.app.provider.v1beta1.OpenInAppRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.app.provider.v1beta1.OpenInAppRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOpaque();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      cs3_types_v1beta1_types_pb.Opaque.serializeBinaryToWriter
    );
  }
  f = message.getResourceInfo();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      cs3_storage_provider_v1beta1_resources_pb.ResourceInfo.serializeBinaryToWriter
    );
  }
  f = message.getViewMode();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getAccessToken();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.cs3.app.provider.v1beta1.OpenInAppRequest.ViewMode = {
  VIEW_MODE_INVALID: 0,
  VIEW_MODE_VIEW_ONLY: 1,
  VIEW_MODE_READ_ONLY: 2,
  VIEW_MODE_READ_WRITE: 3,
  VIEW_MODE_PREVIEW: 4
};

/**
 * optional cs3.types.v1beta1.Opaque opaque = 1;
 * @return {?proto.cs3.types.v1beta1.Opaque}
 */
proto.cs3.app.provider.v1beta1.OpenInAppRequest.prototype.getOpaque = function() {
  return /** @type{?proto.cs3.types.v1beta1.Opaque} */ (
    jspb.Message.getWrapperField(this, cs3_types_v1beta1_types_pb.Opaque, 1));
};


/**
 * @param {?proto.cs3.types.v1beta1.Opaque|undefined} value
 * @return {!proto.cs3.app.provider.v1beta1.OpenInAppRequest} returns this
*/
proto.cs3.app.provider.v1beta1.OpenInAppRequest.prototype.setOpaque = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cs3.app.provider.v1beta1.OpenInAppRequest} returns this
 */
proto.cs3.app.provider.v1beta1.OpenInAppRequest.prototype.clearOpaque = function() {
  return this.setOpaque(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.app.provider.v1beta1.OpenInAppRequest.prototype.hasOpaque = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional cs3.storage.provider.v1beta1.ResourceInfo resource_info = 2;
 * @return {?proto.cs3.storage.provider.v1beta1.ResourceInfo}
 */
proto.cs3.app.provider.v1beta1.OpenInAppRequest.prototype.getResourceInfo = function() {
  return /** @type{?proto.cs3.storage.provider.v1beta1.ResourceInfo} */ (
    jspb.Message.getWrapperField(this, cs3_storage_provider_v1beta1_resources_pb.ResourceInfo, 2));
};


/**
 * @param {?proto.cs3.storage.provider.v1beta1.ResourceInfo|undefined} value
 * @return {!proto.cs3.app.provider.v1beta1.OpenInAppRequest} returns this
*/
proto.cs3.app.provider.v1beta1.OpenInAppRequest.prototype.setResourceInfo = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cs3.app.provider.v1beta1.OpenInAppRequest} returns this
 */
proto.cs3.app.provider.v1beta1.OpenInAppRequest.prototype.clearResourceInfo = function() {
  return this.setResourceInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.app.provider.v1beta1.OpenInAppRequest.prototype.hasResourceInfo = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional ViewMode view_mode = 3;
 * @return {!proto.cs3.app.provider.v1beta1.OpenInAppRequest.ViewMode}
 */
proto.cs3.app.provider.v1beta1.OpenInAppRequest.prototype.getViewMode = function() {
  return /** @type {!proto.cs3.app.provider.v1beta1.OpenInAppRequest.ViewMode} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.cs3.app.provider.v1beta1.OpenInAppRequest.ViewMode} value
 * @return {!proto.cs3.app.provider.v1beta1.OpenInAppRequest} returns this
 */
proto.cs3.app.provider.v1beta1.OpenInAppRequest.prototype.setViewMode = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional string access_token = 4;
 * @return {string}
 */
proto.cs3.app.provider.v1beta1.OpenInAppRequest.prototype.getAccessToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.cs3.app.provider.v1beta1.OpenInAppRequest} returns this
 */
proto.cs3.app.provider.v1beta1.OpenInAppRequest.prototype.setAccessToken = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cs3.app.provider.v1beta1.OpenInAppResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.cs3.app.provider.v1beta1.OpenInAppResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cs3.app.provider.v1beta1.OpenInAppResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.app.provider.v1beta1.OpenInAppResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    status: (f = msg.getStatus()) && cs3_rpc_v1beta1_status_pb.Status.toObject(includeInstance, f),
    opaque: (f = msg.getOpaque()) && cs3_types_v1beta1_types_pb.Opaque.toObject(includeInstance, f),
    appUrl: (f = msg.getAppUrl()) && cs3_app_provider_v1beta1_resources_pb.OpenInAppURL.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cs3.app.provider.v1beta1.OpenInAppResponse}
 */
proto.cs3.app.provider.v1beta1.OpenInAppResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cs3.app.provider.v1beta1.OpenInAppResponse;
  return proto.cs3.app.provider.v1beta1.OpenInAppResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cs3.app.provider.v1beta1.OpenInAppResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cs3.app.provider.v1beta1.OpenInAppResponse}
 */
proto.cs3.app.provider.v1beta1.OpenInAppResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new cs3_rpc_v1beta1_status_pb.Status;
      reader.readMessage(value,cs3_rpc_v1beta1_status_pb.Status.deserializeBinaryFromReader);
      msg.setStatus(value);
      break;
    case 2:
      var value = new cs3_types_v1beta1_types_pb.Opaque;
      reader.readMessage(value,cs3_types_v1beta1_types_pb.Opaque.deserializeBinaryFromReader);
      msg.setOpaque(value);
      break;
    case 3:
      var value = new cs3_app_provider_v1beta1_resources_pb.OpenInAppURL;
      reader.readMessage(value,cs3_app_provider_v1beta1_resources_pb.OpenInAppURL.deserializeBinaryFromReader);
      msg.setAppUrl(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cs3.app.provider.v1beta1.OpenInAppResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cs3.app.provider.v1beta1.OpenInAppResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cs3.app.provider.v1beta1.OpenInAppResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.app.provider.v1beta1.OpenInAppResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStatus();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      cs3_rpc_v1beta1_status_pb.Status.serializeBinaryToWriter
    );
  }
  f = message.getOpaque();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      cs3_types_v1beta1_types_pb.Opaque.serializeBinaryToWriter
    );
  }
  f = message.getAppUrl();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      cs3_app_provider_v1beta1_resources_pb.OpenInAppURL.serializeBinaryToWriter
    );
  }
};


/**
 * optional cs3.rpc.v1beta1.Status status = 1;
 * @return {?proto.cs3.rpc.v1beta1.Status}
 */
proto.cs3.app.provider.v1beta1.OpenInAppResponse.prototype.getStatus = function() {
  return /** @type{?proto.cs3.rpc.v1beta1.Status} */ (
    jspb.Message.getWrapperField(this, cs3_rpc_v1beta1_status_pb.Status, 1));
};


/**
 * @param {?proto.cs3.rpc.v1beta1.Status|undefined} value
 * @return {!proto.cs3.app.provider.v1beta1.OpenInAppResponse} returns this
*/
proto.cs3.app.provider.v1beta1.OpenInAppResponse.prototype.setStatus = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cs3.app.provider.v1beta1.OpenInAppResponse} returns this
 */
proto.cs3.app.provider.v1beta1.OpenInAppResponse.prototype.clearStatus = function() {
  return this.setStatus(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.app.provider.v1beta1.OpenInAppResponse.prototype.hasStatus = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional cs3.types.v1beta1.Opaque opaque = 2;
 * @return {?proto.cs3.types.v1beta1.Opaque}
 */
proto.cs3.app.provider.v1beta1.OpenInAppResponse.prototype.getOpaque = function() {
  return /** @type{?proto.cs3.types.v1beta1.Opaque} */ (
    jspb.Message.getWrapperField(this, cs3_types_v1beta1_types_pb.Opaque, 2));
};


/**
 * @param {?proto.cs3.types.v1beta1.Opaque|undefined} value
 * @return {!proto.cs3.app.provider.v1beta1.OpenInAppResponse} returns this
*/
proto.cs3.app.provider.v1beta1.OpenInAppResponse.prototype.setOpaque = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cs3.app.provider.v1beta1.OpenInAppResponse} returns this
 */
proto.cs3.app.provider.v1beta1.OpenInAppResponse.prototype.clearOpaque = function() {
  return this.setOpaque(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.app.provider.v1beta1.OpenInAppResponse.prototype.hasOpaque = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional OpenInAppURL app_url = 3;
 * @return {?proto.cs3.app.provider.v1beta1.OpenInAppURL}
 */
proto.cs3.app.provider.v1beta1.OpenInAppResponse.prototype.getAppUrl = function() {
  return /** @type{?proto.cs3.app.provider.v1beta1.OpenInAppURL} */ (
    jspb.Message.getWrapperField(this, cs3_app_provider_v1beta1_resources_pb.OpenInAppURL, 3));
};


/**
 * @param {?proto.cs3.app.provider.v1beta1.OpenInAppURL|undefined} value
 * @return {!proto.cs3.app.provider.v1beta1.OpenInAppResponse} returns this
*/
proto.cs3.app.provider.v1beta1.OpenInAppResponse.prototype.setAppUrl = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cs3.app.provider.v1beta1.OpenInAppResponse} returns this
 */
proto.cs3.app.provider.v1beta1.OpenInAppResponse.prototype.clearAppUrl = function() {
  return this.setAppUrl(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.app.provider.v1beta1.OpenInAppResponse.prototype.hasAppUrl = function() {
  return jspb.Message.getField(this, 3) != null;
};


goog.object.extend(exports, proto.cs3.app.provider.v1beta1);
