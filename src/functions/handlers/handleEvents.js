const fs = require('fs');

module.exports = (client) => {
    client.handleEvents = async () => {
        const eventFolders = fs.readdirSync("./src/events");
        for ( const folder of eventFolders){
            const eventFiles = fs
            .readdirSync(`./src/events/${folder}`)
            .filter((file) => file.endsWith(".js"));
            switch(folder){
                case "client":
                    for ( const files of eventFiles){
                        const event = fs
                        .readdirSync(`../../events/${folder}/${file}`)
                        .filter((file) => file.endsWith(".js"));
                        if (event.once){
                            client.once(event.name, (...args)=> event.execute(...args, client))
                        } else {
                            client.on(event.name, (...args) => event.execute(...args, client));
                        }
                    }
                    break;
                default:
                    break;
            }
        }
    };
};