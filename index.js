const Application = require('@waline/vercel');

module.exports = Application({
  async postSave(comment) {
    //do what ever you want after save comment
  }
});

const Waline = require('@waline/vercel');

module.exports = Waline({
  forbiddenWords: [
    '习近平',
    '毛泽东',
    '密码'    
  ]
});
