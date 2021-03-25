input.onButtonPressed(Button.A, function () {
    A = 1
    B = 0
})
input.onButtonPressed(Button.B, function () {
    B = 1
    A = 0
})
// Sets the program
let B = 0
let A = 0
let Power = 1
A = 0
B = 0
let Green = 0
let Yellow = 0
let Red = 0
basic.forever(function () {
    if (Green == 0) {
        if (Yellow == 0) {
            if (Red == 0) {
                Red = 1
                basic.pause(1000)
                Red = 0
                basic.pause(1000)
            }
        }
    }
})
basic.forever(function () {
    while (A == 1) {
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
