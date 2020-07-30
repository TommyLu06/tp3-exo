input.onButtonPressed(Button.A, function () {
    if (px > 0) {
        led.unplot(px, py)
        px += -1
        led.plot(px, py)
    }
})
input.onButtonPressed(Button.B, function () {
    if (px < 4) {
        led.unplot(px, py)
        px += 1
        led.plot(px, py)
    }
})
let py = 0
let px = 0
let x = randint(0, 4)
let y = -1
px = 2
py = 4
basic.forever(function () {
    led.plot(px, py)
    basic.pause(100)
    led.unplot(x, y)
    y += 1
    led.plot(x, y)
    if (y > 4) {
        led.unplot(x, y)
        x = randint(0, 4)
        y = -1
    }
    if (px == x && py == y) {
        basic.showString("mort")
    }
})
