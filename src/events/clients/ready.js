module.exports = {
    name: "ready",
    once: true,
    async execute(){
        console.log(`${client.user.tag} is logged in!`)
    }
};