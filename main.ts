radio.onReceivedNumber(function (receivedNumber) {
    if (true) {
    	
    } else if (false) {
    	
    } else if (false) {
    	
    } else {
    	
    }
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(0)
    basic.showIcon(IconNames.Target)
})
input.onGesture(Gesture.Shake, function () {
    basic.showIcon(IconNames.Heart)
})
input.onButtonPressed(Button.AB, function () {
    radio.sendNumber(2)
    basic.showIcon(IconNames.Square)
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(1)
    basic.showIcon(IconNames.Scissors)
})
basic.showIcon(IconNames.Yes)
basic.forever(function () {
    radio.setGroup(167)
})
