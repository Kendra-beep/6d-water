let M = 0
basic.forever(function () {
    M = pins.analogReadPin(AnalogPin.P1)
    if (M >= 100) {
        pins.digitalWritePin(DigitalPin.P0, 1)
        music.playTone(262, music.beat(BeatFraction.Whole))
        music.rest(music.beat(BeatFraction.Whole))
        music.playTone(262, music.beat(BeatFraction.Whole))
        pins.digitalWritePin(DigitalPin.P0, 1)
    } else {
        pins.digitalWritePin(DigitalPin.P0, 0)
        pins.digitalWritePin(DigitalPin.P2, 0)
    }
})
