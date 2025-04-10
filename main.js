const timeline = [];

timeline.push({
  type: jsPsychHtmlButtonResponse,
  stimulus: "<p><strong>欢迎来到AI辅助决策实验</strong></p><p>点击开始进入任务</p>",
  choices: ["开始"]
});

timeline.push({
  type: jsPsychHtmlButtonResponse,
  stimulus: "<p>【任务1】当前股市波动剧烈，请在股票A和股票B之间选择更稳妥的一只。</p><p>AI建议：投资A。<br><em>AI推理：A的波动率较低，财务稳定，适合风险规避型投资者。</em></p>",
  choices: ["完全采纳", "部分采纳", "不采纳"]
});

timeline.push({
  type: jsPsychHtmlButtonResponse,
  stimulus: "<p>实验预览结束。谢谢你的参与！</p>",
  choices: ["退出"]
});

jsPsych.run(timeline);
