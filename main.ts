basic.forever(function () {
    if (input.buttonIsPressed(Button.B)) {
        pins.digitalWritePin(DigitalPin.P2, 0)
        pins.digitalWritePin(DigitalPin.P0, 1)
        basic.pause(5000)
        pins.digitalWritePin(DigitalPin.P0, 0)
        pins.digitalWritePin(DigitalPin.P1, 1)
        basic.pause(2000)
        pins.digitalWritePin(DigitalPin.P1, 0)
    } else {
        pins.digitalWritePin(DigitalPin.P2, 1)
    }
})
