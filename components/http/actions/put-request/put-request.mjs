import customRequest from "../custom-request/custom-request.mjs";

export default {
  ...customRequest,
  key: "http-put-request",
  name: "PUT Request",
  description: "Make an HTTP PUT request to any URL. Optionally configure query string parameters, headers and basic auth.",
  type: "action",
  version: "1.0.0",
  props: {
    ...customRequest.props,
    /* eslint-disable-next-line pipedream/props-label,pipedream/props-description */
    httpRequest: {
      ...customRequest.props.httpRequest,
      default: {
        method: "PUT",
      },
    },
  },
};
