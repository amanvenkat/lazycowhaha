const util = require('../data/util.js');

module.exports = {
    name: 'beg',
    async execute(memer, message) {

        await util.addCD(message.author.id, this.name, {
            cd: 35000,
            msg: 'Stop begging so much, it makes you look like a little baby.\nYou can have more coins in'
        });
        
        const prompt = await message.channel.send('Hm, let me think...').catch(() => {});
        await util.wait(1000);
        await prompt.edit('Hm, let me think... 🤔').catch(() => {});
        await util.wait(2000);
        if (Math.random() >= 0.5) {
            await util.updateDBUser(message.author.id, {
                pocket: 543
            });
            await prompt.edit('Ok sure, have few coins.').catch(() => {});
        } else {
            await prompt.edit('Nah, no coin for you.').catch(() => {});
        }


    },
};