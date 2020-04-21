const util = require('util');
const shell= require('python-shell')
let python_shell_run = util.promisify(shell.PythonShell.run);

const sentilizer = (sentence) => {
    return new Promise(
        (resolve, reject) => {
            let options = {
                args: ['-s', '\"' + sentence + '\"']
            };
            python_shell_run('F:\\Projects\\sentiment-analysis\\sentilizer_api\\src\\vader\\vader.py', options)
                .then(result => {
                    console.log(result);

                    let sentiment = result[0];
                    let response = {sentiment: 'Neutral'};
                    if(sentiment === 'neg'){
                        response.sentiment = 'Negative'
                    } else if(sentiment === 'pos'){
                        response.sentiment = 'Positive'
                    } else {
                        response.sentiment = 'Neutral'
                    }
                    resolve(response);
                }).catch((err) => {
                    console.log(err);
                    reject(err);
                })
        }
    )
}

module.exports = sentilizer