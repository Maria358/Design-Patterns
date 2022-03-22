class Server {
    constructor(name, ip) {
        this.name = name;
        this.ip = ip;
    };

    getUrl() {
        return `https://${this.ip}:300`;
    };
}

const aws = new Server('AWS German', '812.21.211.312');
console.log(aws.getUrl());