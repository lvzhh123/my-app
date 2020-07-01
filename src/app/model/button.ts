export class Botton {
    constructor(
        public iconSrc: string,
        public text: string) { }
}

export class cardInfo {
    constructor(
        public month: string,
        public year: string,
        public pay: string,
        public income: string,
        public accountBalance: string,
        ) { }
}

export class ListInfo {
    constructor(
        public iconSrc: string,
        public title: string,
        public money: string,
        public detail: string
        ) { }
}

export class ListInfos {
    constructor(
        public time: string,
        public infoList: Array<ListInfo>
        ) { }
}