const { WebClient } = require('@slack/web-api');

// Slackのトークンを環境変数から取得
const SLACK_TOKEN = process.env.SLACK_TOKEN;
const CHANNEL_ID = 'C07HCPM5HD5'; // 送信先のチャンネルID

// Slack Web APIクライアントを初期化
const client = new WebClient(SLACK_TOKEN);

(async () => {
  try {
    // メッセージを送信
    const result = await client.chat.postMessage({
      channel: CHANNEL_ID,
      text: 'おはようございます！', // 送信するメッセージ
    });
    console.log('Message sent: ', result.ts);
  } catch (error) {
    console.error('Error sending message: ', error);
  }
})();
