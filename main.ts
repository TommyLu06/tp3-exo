input.onButtonPressed(Button.A, function () {
    if (px > 0) {
        led.unplot(px, py)
        px += -1
        led.plot(px, py)
    } else {
        led.unplot(px, py)
        px = 4
        led.plot(px, py)
    }
})
input.onButtonPressed(Button.B, function () {
    if (px < 4) {
        led.unplot(px, py)
        px += 1
        led.plot(px, py)
    } else {
        led.unplot(px, py)
        px = 0
        led.unplot(px, py)
    }
})
let py = 0
let px = 0
let x = randint(0, 4)
let x2 = randint(0, 4)
let y = -1
px = 2
py = 4
basic.forever(function () {
    led.plot(px, py)
    basic.pause(200)
    led.unplot(x, y)
    led.unplot(x2, y)
    y += 1
    led.plot(x, y)
    led.plot(x2, y)
    if (y > 4) {
        led.unplot(x, y)
        led.unplot(x2, y)
        x = randint(0, 4)
        x2 = randint(0, 4)
        y = -1
    }
    if (px == x && py == y) {
        basic.showString("mort")
    }
    if (px == x2 && py == y) {
        basic.showString("mort")
    }
})
