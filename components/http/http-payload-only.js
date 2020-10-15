// Core HTTP component
// Returns a 200 OK response, emits the HTTP payload as an event
module.exports = {
  name: "http-payload-only",
  key: "http-payload-only",
  version: "0.0.2",
  props: {
    http: {
      type: "$.interface.http",
      customResposne: true,
    },
    http_webhook: {
      type: 'app',
      app: 'http_webhook',
    },
  },
  async run(event) {
    const { body } = event;
    this.http.respond({
      status: 200,
      body
    });
    // Emit the HTTP payload
    this.$emit({ body });
  }
};
