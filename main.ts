radio.onReceivedNumber(function (receivedNumber) {
    basic.clearScreen()
    basic.pause(1000)
    if (true) {
    	
    } else if (receivedNumber == 0 && (receivedNumber == 1 || receivedNumber == 1 && (receivedNumber == 2 || receivedNumber == 2 && receivedNumber == 0))) {
        basic.showIcon(IconNames.No)
    } else if (receivedNumber == 0 && receivedNumber == 2 || receivedNumber == 1 && (receivedNumber == 0 || receivedNumber == 2 && receivedNumber == 1)) {
        basic.showIcon(IconNames.SmallHeart)
    } else if (receivedNumber == 0 && (receivedNumber == 0 || receivedNumber == 1 && (receivedNumber == 1 || receivedNumber == 2 && receivedNumber == 2))) {
        basic.showIcon(IconNames.Triangle)
    } else {
    	
    }
})
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    basic.pause(500)
    radio.sendNumber(0)
    basic.showIcon(IconNames.Target)
    receivedNumber = 0
})
input.onGesture(Gesture.Shake, function () {
    basic.showIcon(IconNames.Heart)
    receivedNumber = 3
})
input.onButtonPressed(Button.AB, function () {
    basic.clearScreen()
    basic.pause(500)
    radio.sendNumber(2)
    basic.showIcon(IconNames.Square)
    receivedNumber = 2
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    basic.pause(500)
    radio.sendNumber(1)
    basic.showIcon(IconNames.Scissors)
    receivedNumber = 1
})
let receivedNumber = 0
basic.showIcon(IconNames.Yes)
basic.forever(function () {
    radio.setGroup(167)
})
