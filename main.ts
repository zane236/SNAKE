input.onButtonPressed(Button.A, function () {
    SNAKE.change(LedSpriteProperty.Y, 1)
    if (SNAKE.isTouchingEdge()) {
        music.play(music.createSoundExpression(WaveShape.Square, 5000, 5000, 255, 138, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
    }
})
input.onButtonPressed(Button.B, function () {
    SNAKE.change(LedSpriteProperty.Y, -1)
    if (SNAKE.isTouchingEdge()) {
        music.play(music.createSoundExpression(WaveShape.Square, 5000, 5000, 255, 138, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
    }
})
let sprite: game.LedSprite = null
let SNAKE: game.LedSprite = null
let count = 0
music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Funk), music.PlaybackMode.LoopingInBackground)
SNAKE = game.createSprite(2, 2)
let HASsPRITE = false
loops.everyInterval(500, function () {
    if (count < 10) {
        SNAKE.move(1)
        SNAKE.ifOnEdgeBounce()
    }
})
basic.forever(function () {
    if (count < 10) {
        if (!(HASsPRITE)) {
            HASsPRITE = true
            sprite = game.createSprite(randint(0, 4), randint(0, 4))
            sprite.change(LedSpriteProperty.Brightness, -150)
        }
    }
})
basic.forever(function () {
    if (SNAKE.isTouching(sprite)) {
        sprite.delete()
        HASsPRITE = false
        music.play(music.createSoundExpression(WaveShape.Sine, 1, 5000, 255, 37, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
        count += 1
        if (count >= 10) {
            SNAKE.delete()
            music.stopAllSounds()
            music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Prelude), music.PlaybackMode.InBackground)
            basic.showString("VICTORY")
        }
    }
})
