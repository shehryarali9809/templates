export class Todos{
    serial: number
    title: string
    desc: string
    active: boolean
    
    constructor(serial: number, title: string, desc: string, active: boolean) {
        this.serial = serial;
        this.title = title;
        this.desc = desc;
        this.active = active;
    }

}