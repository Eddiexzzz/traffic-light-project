input.onButtonPressed(Button.A, function () {
    Mode = 1
})
input.onButtonPressed(Button.B, function () {
    Mode = 2
})
// Sets the program
let Mode = 0
Mode = 0
let A = 0
let B = 0
let Green = 0
let Yellow = 0
let Red = 0
basic.forever(function () {
    if (Mode == 0) {
        Red = 1
        basic.pause(1000)
        Red = 0
        basic.pause(1000)
    }
})
basic.forever(function () {
    while (Mode == 1) {
        Red = 1
        basic.pause(20000)
        Red = 0
        Green = 1
        basic.pause(20000)
        Green = 0
        Yellow = 1
        basic.pause(5000)
        Yellow = 0
    }
})
basic.forever(function () {
    if (Green == 0) {
        pins.digitalWritePin(DigitalPin.P0, 0)
    }
    if (Yellow == 0) {
        pins.digitalWritePin(DigitalPin.P1, 0)
    }
    if (Red == 0) {
        pins.digitalWritePin(DigitalPin.P2, 0)
    }
})
basic.forever(function () {
    if (Green == 1) {
        pins.digitalWritePin(DigitalPin.P0, 1)
    }
    if (Yellow == 1) {
        pins.digitalWritePin(DigitalPin.P1, 1)
    }
    if (Red == 1) {
        pins.digitalWritePin(DigitalPin.P2, 1)
    }
})
