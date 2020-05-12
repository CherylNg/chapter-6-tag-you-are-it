function Game (speed: number) {
    Chaser.turn(Direction.Right, randint(0, 90))
    Chaser.move(1)
    Chaser.ifOnEdgeBounce()
    if (Chaser.isTouchingEdge()) {
        game.setScore(game.score() + 1)
    }
    if (Chaser.isTouching(Player)) {
        game.gameOver()
    }
    basic.pause(speed)
}
input.onButtonPressed(Button.A, function () {
    Player.move(-1)
})
input.onButtonPressed(Button.B, function () {
    Player.move(1)
})
let Player: game.LedSprite = null
let Chaser: game.LedSprite = null
game.startCountdown(30000)
Chaser = game.createSprite(0, 5)
Player = game.createSprite(2, 0)
Player.turn(Direction.Right, 90)
Player.set(LedSpriteProperty.Brightness, 50)
basic.forever(function () {
    if (edubitPotentioBit.comparePot(PotCompareType.MoreThan, 800)) {
        Game(250)
    } else if (edubitPotentioBit.comparePot(PotCompareType.MoreThan, 400)) {
        Game(500)
    } else {
        Game(750)
    }
})
