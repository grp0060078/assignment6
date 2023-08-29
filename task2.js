class calculate {
    constructor(baseFare,perMileRate,perMinuteRate) {
        this.baseFare =baseFare;
        this.perMileRate =perMileRate;
        this.perMinuteRate =perMinuteRate;
    }

}
let calc =new calculate(2000,200,20);
console.log(calc)