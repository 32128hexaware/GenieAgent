var Slack = require('slack-node');

webhookUri = "https://hooks.slack.com/services/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";

slack = new Slack();
slack.setWebhook(webhookUri);

slack.webhook({
  channel: "#general",
  username: "citi_smart",
  text: "This is posted to #general and comes from a bot named webhookbot."
}, function(err, response) {
  console.log(response);
});
