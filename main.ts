namespace SpriteKind {
    export const Object = SpriteKind.create()
    export const citizen = SpriteKind.create()
}
statusbars.onStatusReached(StatusBarKind.Health, statusbars.StatusComparison.LT, statusbars.ComparisonType.Percentage, 50, function (status) {
    assasin.sayText("Me estoy muriendo!", 2000, false)
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    assasin,
    [img`
        . . . . . . f f f f . . . . . . 
        . . . . f f e e e e f f . . . . 
        . . . f e e e f f e e e f . . . 
        . . f f f f f 2 2 f f f f f . . 
        . . f f e 2 e 2 2 e 2 e f f . . 
        . . f e 2 f 2 f f 2 f 2 e f . . 
        . . f f f 2 2 e e 2 2 f f f . . 
        . f f e f 2 f e e f 2 f e f f . 
        . f e e f f e e e e f e e e f . 
        . . f e e e e e e e e e e f . . 
        . . . f e e e e e e e e f . . . 
        . . e 4 f f f f f f f f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 4 4 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f e e e e f f . . . . 
        . . . f e e e f f e e e f . . . 
        . . . f f f f 2 2 f f f f . . . 
        . . f f e 2 e 2 2 e 2 e f f . . 
        . . f e 2 f 2 f f f 2 f e f . . 
        . . f f f 2 f e e 2 2 f f f . . 
        . . f e 2 f f e e 2 f e e f . . 
        . f f e f f e e e f e e e f f . 
        . f f e e e e e e e e e e f f . 
        . . . f e e e e e e e e f . . . 
        . . . e f f f f f f f f 4 e . . 
        . . . 4 f 2 2 2 2 2 e d d 4 . . 
        . . . e f f f f f f e e 4 . . . 
        . . . . f f f . . . . . . . . . 
        `,img`
        . . . . . . f f f f . . . . . . 
        . . . . f f e e e e f f . . . . 
        . . . f e e e f f e e e f . . . 
        . . f f f f f 2 2 f f f f f . . 
        . . f f e 2 e 2 2 e 2 e f f . . 
        . . f e 2 f 2 f f 2 f 2 e f . . 
        . . f f f 2 2 e e 2 2 f f f . . 
        . f f e f 2 f e e f 2 f e f f . 
        . f e e f f e e e e f e e e f . 
        . . f e e e e e e e e e e f . . 
        . . . f e e e e e e e e f . . . 
        . . e 4 f f f f f f f f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 4 4 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f e e e e f f . . . . 
        . . . f e e e f f e e e f . . . 
        . . . f f f f 2 2 f f f f . . . 
        . . f f e 2 e 2 2 e 2 e f f . . 
        . . f e f 2 f f f 2 f 2 e f . . 
        . . f f f 2 2 e e f 2 f f f . . 
        . . f e e f 2 e e f f 2 e f . . 
        . f f e e e f e e e f f e f f . 
        . f f e e e e e e e e e e f f . 
        . . . f e e e e e e e e f . . . 
        . . e 4 f f f f f f f f e . . . 
        . . 4 d d e 2 2 2 2 2 f 4 . . . 
        . . . 4 e e f f f f f f e . . . 
        . . . . . . . . . f f f . . . . 
        `],
    500,
    false
    )
})
function crthealthImg () {
    listafood = [img`
        . . . . . . . e c 7 . . . . . . 
        . . . . e e e c 7 7 e e . . . . 
        . . c e e e e c 7 e 2 2 e e . . 
        . c e e e e e c 6 e e 2 2 2 e . 
        . c e e e 2 e c c 2 4 5 4 2 e . 
        c e e e 2 2 2 2 2 2 4 5 5 2 2 e 
        c e e 2 2 2 2 2 2 2 2 4 4 2 2 e 
        c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
        c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
        c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
        c e e 2 2 2 2 2 2 2 2 2 2 4 2 e 
        . e e e 2 2 2 2 2 2 2 2 2 4 e . 
        . 2 e e 2 2 2 2 2 2 2 2 4 2 e . 
        . . 2 e e 2 2 2 2 2 4 4 2 e . . 
        . . . 2 2 e e 4 4 4 2 e e . . . 
        . . . . . 2 2 e e e e . . . . . 
        `, img`
        . . . . . . . . . . . 6 6 6 6 6 
        . . . . . . . . . 6 6 7 7 7 7 8 
        . . . . . . 8 8 8 7 7 8 8 6 8 8 
        . . e e e e c 6 6 8 8 . 8 7 8 . 
        . e 2 5 4 2 e c 8 . . . 6 7 8 . 
        e 2 4 2 2 2 2 2 c . . . 6 7 8 . 
        e 2 2 2 2 2 2 2 c . . . 8 6 8 . 
        e 2 e e 2 2 2 2 e e e e c 6 8 . 
        c 2 e e 2 2 2 2 e 2 5 4 2 c 8 . 
        . c 2 e e e 2 e 2 4 2 2 2 2 c . 
        . . c 2 2 2 e e 2 2 2 2 2 2 2 e 
        . . . e c c e c 2 2 2 2 2 2 2 e 
        . . . . . . . c 2 e e 2 2 e 2 c 
        . . . . . . . c e e e e e e 2 c 
        . . . . . . . . c e 2 2 2 2 c . 
        . . . . . . . . . c c c c c . . 
        `, img`
        . . . . . . . 6 . . . . . . . . 
        . . . . . . 8 6 6 . . . 6 8 . . 
        . . . e e e 8 8 6 6 . 6 7 8 . . 
        . . e 2 2 2 2 e 8 6 6 7 6 . . . 
        . e 2 2 4 4 2 7 7 7 7 7 8 6 . . 
        . e 2 4 4 2 6 7 7 7 6 7 6 8 8 . 
        e 2 4 5 2 2 6 7 7 6 2 7 7 6 . . 
        e 2 4 4 2 2 6 7 6 2 2 6 7 7 6 . 
        e 2 4 2 2 2 6 6 2 2 2 e 7 7 6 . 
        e 2 4 2 2 4 2 2 2 4 2 2 e 7 6 . 
        e 2 4 2 2 2 2 2 2 2 2 2 e c 6 . 
        e 2 2 2 2 2 2 2 4 e 2 e e c . . 
        e e 2 e 2 2 4 2 2 e e e c . . . 
        e e e e 2 e 2 2 e e e c . . . . 
        e e e 2 e e c e c c c . . . . . 
        . c c c c c c c . . . . . . . . 
        `]
}
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    assasin,
    [img`
        . . . . f f f f f f . . . . . . 
        . . . f 2 f e e e e f f . . . . 
        . . f 2 2 2 f e e e e f f . . . 
        . . f e e e e f f e e e f . . . 
        . f e 2 2 2 2 e e f f f f . . . 
        . f 2 e f f f f 2 2 2 e f . . . 
        . f f f e e e f f f f f f f . . 
        . f e e 4 4 f b e 4 4 e f f . . 
        . . f e d d f 1 4 d 4 e e f . . 
        . . . f d d d d 4 e e e f . . . 
        . . . f e 4 4 4 e e f f . . . . 
        . . . f 2 2 2 e d d 4 . . . . . 
        . . . f 2 2 2 e d d e . . . . . 
        . . . f 5 5 4 f e e f . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . . . . f f f . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . f 2 f e e e e f f . . . . 
        . . f 2 2 2 f e e e e f f . . . 
        . . f e e e e f f e e e f . . . 
        . f e 2 2 2 2 e e f f f f . . . 
        . f 2 e f f f f 2 2 2 e f . . . 
        . f f f e e e f f f f f f f . . 
        . f e e 4 4 f b e 4 4 e f f . . 
        . . f e d d f 1 4 d 4 e e f . . 
        . . . f d d d e e e e e f . . . 
        . . . f e 4 e d d 4 f . . . . . 
        . . . f 2 2 e d d e f . . . . . 
        . . f f 5 5 f e e f f f . . . . 
        . . f f f f f f f f f f . . . . 
        . . . f f f . . . f f . . . . . 
        `,img`
        . . . . f f f f f f . . . . . . 
        . . . f 2 f e e e e f f . . . . 
        . . f 2 2 2 f e e e e f f . . . 
        . . f e e e e f f e e e f . . . 
        . f e 2 2 2 2 e e f f f f . . . 
        . f 2 e f f f f 2 2 2 e f . . . 
        . f f f e e e f f f f f f f . . 
        . f e e 4 4 f b e 4 4 e f f . . 
        . . f e d d f 1 4 d 4 e e f . . 
        . . . f d d d d 4 e e e f . . . 
        . . . f e 4 4 4 e e f f . . . . 
        . . . f 2 2 2 e d d 4 . . . . . 
        . . . f 2 2 2 e d d e . . . . . 
        . . . f 5 5 4 f e e f . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . . . . f f f . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . f 2 f e e e e f f . . . . 
        . . f 2 2 2 f e e e e f f . . . 
        . . f e e e e f f e e e f . . . 
        . f e 2 2 2 2 e e f f f f . . . 
        . f 2 e f f f f 2 2 2 e f . . . 
        . f f f e e e f f f f f f f . . 
        . f e e 4 4 f b e 4 4 e f f . . 
        . . f e d d f 1 4 d 4 e e f . . 
        . . . f d d d d 4 e e e f . . . 
        . . . f e 4 4 4 e d d 4 . . . . 
        . . . f 2 2 2 2 e d d e . . . . 
        . . f f 5 5 4 4 f e e f . . . . 
        . . f f f f f f f f f f . . . . 
        . . . f f f . . . f f . . . . . 
        `],
    500,
    false
    )
})
statusbars.onZero(StatusBarKind.Health, function (status) {
    assasin.startEffect(effects.disintegrate)
    sprites.destroy(assasin)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    assasin,
    [img`
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 2 f . . . 
        . . . f f e e e e f 2 2 2 f . . 
        . . . f e e e f f e e e e f . . 
        . . . f f f f e e 2 2 2 2 e f . 
        . . . f e 2 2 2 f f f f e 2 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e 4 d d d d f . . . 
        . . . . f f e e 4 4 4 e f . . . 
        . . . . . 4 d d e 2 2 2 f . . . 
        . . . . . e d d e 2 2 2 f . . . 
        . . . . . f e e f 4 5 5 f . . . 
        . . . . . . f f f f f f . . . . 
        . . . . . . . f f f . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 2 f . . . 
        . . . f f e e e e f 2 2 2 f . . 
        . . . f e e e f f e e e e f . . 
        . . . f f f f e e 2 2 2 2 e f . 
        . . . f e 2 2 2 f f f f e 2 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e e e d d d f . . . 
        . . . . . f 4 d d e 4 e f . . . 
        . . . . . f e d d e 2 2 f . . . 
        . . . . f f f e e f 5 5 f f . . 
        . . . . f f f f f f f f f f . . 
        . . . . . f f . . . f f f . . . 
        `,img`
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 2 f . . . 
        . . . f f e e e e f 2 2 2 f . . 
        . . . f e e e f f e e e e f . . 
        . . . f f f f e e 2 2 2 2 e f . 
        . . . f e 2 2 2 f f f f e 2 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e 4 d d d d f . . . 
        . . . . f f e e 4 4 4 e f . . . 
        . . . . . 4 d d e 2 2 2 f . . . 
        . . . . . e d d e 2 2 2 f . . . 
        . . . . . f e e f 4 5 5 f . . . 
        . . . . . . f f f f f f . . . . 
        . . . . . . . f f f . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 2 f . . . 
        . . . f f e e e e f 2 2 2 f . . 
        . . . f e e e f f e e e e f . . 
        . . . f f f f e e 2 2 2 2 e f . 
        . . . f e 2 2 2 f f f f e 2 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e 4 d d d d f . . . 
        . . . . 4 d d e 4 4 4 e f . . . 
        . . . . e d d e 2 2 2 2 f . . . 
        . . . . f e e f 4 4 5 5 f f . . 
        . . . . f f f f f f f f f f . . 
        . . . . . f f . . . f f f . . . 
        `],
    500,
    false
    )
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    monster.sayText("Atrapadlo!", 2000, false)
    statusbar.value += -10
    music.play(music.melodyPlayable(music.powerDown), music.PlaybackMode.UntilDone)
})
// Change the car image based on the direction it's
// driving
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    assasin,
    [img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . . f e 2 f f f f f f 2 e f . . 
        . . f f f f e e e e f f f f . . 
        . f f e f b f 4 4 f b f e f f . 
        . f e e 4 1 f d d f 1 4 e e f . 
        . . f e e d d d d d d e e f . . 
        . . . f e e 4 4 4 4 e e f . . . 
        . . e 4 f 2 2 2 2 2 2 f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . f f e 2 f f f f f f 2 e f f . 
        . f f f f f e e e e f f f f f . 
        . . f e f b f 4 4 f b f e f . . 
        . . f e 4 1 f d d f 1 4 e f . . 
        . . . f e 4 d d d d 4 e f e . . 
        . . f e f 2 2 2 2 e d d 4 e . . 
        . . e 4 f 2 2 2 2 e d d e . . . 
        . . . . f 4 4 5 5 f e e . . . . 
        . . . . f f f f f f f . . . . . 
        . . . . f f f . . . . . . . . . 
        `,img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . . f e 2 f f f f f f 2 e f . . 
        . . f f f f e e e e f f f f . . 
        . f f e f b f 4 4 f b f e f f . 
        . f e e 4 1 f d d f 1 4 e e f . 
        . . f e e d d d d d d e e f . . 
        . . . f e e 4 4 4 4 e e f . . . 
        . . e 4 f 2 2 2 2 2 2 f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f e e 2 2 2 2 2 2 e f f . . 
        . f f e 2 f f f f f f 2 e f f . 
        . f f f f f e e e e f f f f f . 
        . . f e f b f 4 4 f b f e f . . 
        . . f e 4 1 f d d f 1 4 e f . . 
        . . e f e 4 d d d d 4 e f . . . 
        . . e 4 d d e 2 2 2 2 f e f . . 
        . . . e d d e 2 2 2 2 f 4 e . . 
        . . . . e e f 5 5 4 4 f . . . . 
        . . . . . f f f f f f f . . . . 
        . . . . . . . . . f f f . . . . 
        `],
    500,
    false
    )
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.citizen, function (sprite, otherSprite) {
    game.showLongText("Hola, cuál es tu nombre? Necesito tu ayuda", DialogLayout.Bottom)
    name_player = game.askForString("Introduce tu nombre")
    pause(2000)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    if (otherSprite.image.equals(img`
        . . . . . . . e c 7 . . . . . . 
        . . . . e e e c 7 7 e e . . . . 
        . . c e e e e c 7 e 2 2 e e . . 
        . c e e e e e c 6 e e 2 2 2 e . 
        . c e e e 2 e c c 2 4 5 4 2 e . 
        c e e e 2 2 2 2 2 2 4 5 5 2 2 e 
        c e e 2 2 2 2 2 2 2 2 4 4 2 2 e 
        c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
        c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
        c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
        c e e 2 2 2 2 2 2 2 2 2 2 4 2 e 
        . e e e 2 2 2 2 2 2 2 2 2 4 e . 
        . 2 e e 2 2 2 2 2 2 2 2 4 2 e . 
        . . 2 e e 2 2 2 2 2 4 4 2 e . . 
        . . . 2 2 e e 4 4 4 2 e e . . . 
        . . . . . 2 2 e e e e . . . . . 
        `)) {
        sprites.destroy(otherSprite)
        music.play(music.melodyPlayable(music.powerUp), music.PlaybackMode.UntilDone)
        statusbar.value += 40
    }
    if (otherSprite.image.equals(img`
        . . . . . . . 6 . . . . . . . . 
        . . . . . . 8 6 6 . . . 6 8 . . 
        . . . e e e 8 8 6 6 . 6 7 8 . . 
        . . e 2 2 2 2 e 8 6 6 7 6 . . . 
        . e 2 2 4 4 2 7 7 7 7 7 8 6 . . 
        . e 2 4 4 2 6 7 7 7 6 7 6 8 8 . 
        e 2 4 5 2 2 6 7 7 6 2 7 7 6 . . 
        e 2 4 4 2 2 6 7 6 2 2 6 7 7 6 . 
        e 2 4 2 2 2 6 6 2 2 2 e 7 7 6 . 
        e 2 4 2 2 4 2 2 2 4 2 2 e 7 6 . 
        e 2 4 2 2 2 2 2 2 2 2 2 e c 6 . 
        e 2 2 2 2 2 2 2 4 e 2 e e c . . 
        e e 2 e 2 2 4 2 2 e e e c . . . 
        e e e e 2 e 2 2 e e e c . . . . 
        e e e 2 e e c e c c c . . . . . 
        . c c c c c c c . . . . . . . . 
        `)) {
        sprites.destroy(otherSprite)
        music.play(music.melodyPlayable(music.powerUp), music.PlaybackMode.UntilDone)
        statusbar.value += 20
    }
    if (otherSprite.image.equals(img`
        . . . . . . . . . . . 6 6 6 6 6 
        . . . . . . . . . 6 6 7 7 7 7 8 
        . . . . . . 8 8 8 7 7 8 8 6 8 8 
        . . e e e e c 6 6 8 8 . 8 7 8 . 
        . e 2 5 4 2 e c 8 . . . 6 7 8 . 
        e 2 4 2 2 2 2 2 c . . . 6 7 8 . 
        e 2 2 2 2 2 2 2 c . . . 8 6 8 . 
        e 2 e e 2 2 2 2 e e e e c 6 8 . 
        c 2 e e 2 2 2 2 e 2 5 4 2 c 8 . 
        . c 2 e e e 2 e 2 4 2 2 2 2 c . 
        . . c 2 2 2 e e 2 2 2 2 2 2 2 e 
        . . . e c c e c 2 2 2 2 2 2 2 e 
        . . . . . . . c 2 e e 2 2 e 2 c 
        . . . . . . . c e e e e e e 2 c 
        . . . . . . . . c e 2 2 2 2 c . 
        . . . . . . . . . c c c c c . . 
        `)) {
        sprites.destroy(otherSprite)
        music.play(music.melodyPlayable(music.powerUp), music.PlaybackMode.UntilDone)
        statusbar.value += 12
    }
})
let name_player = ""
let myRedHouse: Sprite = null
let myPurpleHouse: Sprite = null
let listafood: Image[] = []
let snackhealth: Sprite = null
let statusbar: StatusBarSprite = null
let monster: Sprite = null
let assasin: Sprite = null
tiles.setTilemap(tilemap`nivel`)
assasin = sprites.create(img`
    . . . . . . f f f f f f . . . . 
    . . . . f f e e e e f 2 f . . . 
    . . . f f e e e e f 2 2 2 f . . 
    . . . f e e e f f e e e e f . . 
    . . . f f f f e e 2 2 2 2 e f . 
    . . . f e 2 2 2 f f f f e 2 f . 
    . . f f f f f f f e e e f f f . 
    . . f f e 4 4 e b f 4 4 e e f . 
    . . f e e 4 d 4 1 f d d e f . . 
    . . . f e e e 4 d d d d f . . . 
    . . . . f f e e 4 4 4 e f . . . 
    . . . . . 4 d d e 2 2 2 f . . . 
    . . . . . e d d e 2 2 2 f . . . 
    . . . . . f e e f 4 5 5 f . . . 
    . . . . . . f f f f f f . . . . 
    . . . . . . . f f f . . . . . . 
    `, SpriteKind.Player)
let citizen = sprites.create(img`
    . . . . f f f f . . . . . 
    . . f f f f f f f f . . . 
    . f f f f f f c f f f . . 
    f f f f f f c c f f f c . 
    f f f c f f f f f f f c . 
    c c c f f f e e f f c c . 
    f f f f f e e f f c c f . 
    f f f b f e e f b f f f . 
    . f 4 1 f 4 4 f 1 4 f . . 
    . f e 4 4 4 4 4 4 e f . . 
    . f f f e e e e f f f . . 
    f e f b 7 7 7 7 b f e f . 
    e 4 f 7 7 7 7 7 7 f 4 e . 
    e e f 6 6 6 6 6 6 f e e . 
    . . . f f f f f f . . . . 
    . . . f f . . f f . . . . 
    `, SpriteKind.citizen)
for (let index = 0; index < 7; index++) {
    monster = sprites.create(img`
        . . f f f f f f f . . . . . . . 
        . f f 3 b 3 b 3 f f . . . . . . 
        f f b b 3 b 3 2 3 f f . . . . . 
        f 3 b 3 b 2 b 3 b 3 f f . . . . 
        f b 3 2 3 3 3 b 3 2 3 f . . . . 
        f 7 7 7 7 2 7 7 7 7 7 f . . . . 
        f 7 7 7 7 7 2 7 7 e 7 f . . . . 
        f 7 7 f f 7 7 f f 7 7 f . . . . 
        f e 7 7 7 7 7 7 7 7 e f . . . . 
        . f e 7 7 b b 7 7 e f . . . . . 
        . f f e 7 2 7 7 e f f . . . . . 
        7 7 f b 1 1 7 1 b f 7 7 . . . . 
        2 d f 1 1 7 1 1 1 f d 7 . . . . 
        7 7 f 1 1 1 1 2 1 f 7 7 . . . . 
        . . . f f f f f f . . . . . . . 
        . . . f f . . f f . . . . . . . 
        `, SpriteKind.Enemy)
    tiles.placeOnRandomTile(monster, assets.tile`myTile2`)
    monster.follow(assasin, 10)
}
tiles.placeOnTile(citizen, tiles.getTileLocation(13, 15))
statusbar = statusbars.create(20, 4, StatusBarKind.Health)
statusbar.value = 100
statusbar.attachToSprite(assasin)
crthealthImg()
controller.moveSprite(assasin)
scene.cameraFollowSprite(assasin)
for (let value of tiles.getTilesByType(sprites.dungeon.floorDark3)) {
    snackhealth = sprites.create(listafood[randint(0, 2)], SpriteKind.Food)
    tiles.placeOnTile(snackhealth, value)
}
for (let value of tiles.getTilesByType(assets.tile`myTile2`)) {
    myPurpleHouse = sprites.create(img`
        ....................8a8aa8a8....................
        .................aaa888aa8a8aaa.................
        ..............aaa8aa8a8aa888aa8aaa..............
        ...........8aa8aa8888a8aa8a8888aa8aa8...........
        ........8888aa8aa8aa8a8aa8a8aa8aa8aa8888........
        .....aaa8aa8aa8888aa8a8aa8a8aa8888aa8aa8aaa.....
        ...aa8888aa8aa8aa8aa888aa888aa8aa8aa8aa8888aa...
        dccaa8aa8aa8888aa8aa8a8aa8a8aa8aa8888aa8aa8aaccd
        bcb888aa8aa8aa8aa8aa8a8aa8a8aa8aa8aa8aa8aa888bcb
        dbbaa8aa8888aa8aa8888a8aa8a8888aa8aa8888aa8aabbd
        dbbaa8aa8aa8aa8888aa8a8aa8a8aa8888aa8aa8aa8aabbd
        dccaa8888aa8aa8aa8aa888aa888aa8aa8aa8aa8888aaccd
        bcbaa8aa8aa8888aa8aa8a8aa8a8aa8aa8888aa8aa8aabcb
        dbb888aa8aa8aa8aa8aa8a8aa8a8aa8aa8aa8aa8aa888bbd
        dbbaa8aa8888aa8aa8aa8a8aa8a8aa8aa8aa8888aa8aabbd
        dccaa8aa8aa8aa8aa8888a8aa8a8888aa8aa8aa8aa8aaccd
        bcbaa8888aa8aa8888aa888aa888aa8888aa8aa8888aabcb
        dbbaa8aa8aa8888aa8aa8a8aa8a8aa8aa8888aa8aa8aabbd
        dbb888aa8aa8aa8aa8aa8a8aa8a8aa8aa8aa8aa8aa888bbd
        dccaa8aa8888aa8aa8aa8a8aa8a8aa8aa8aa8888aa8aaccd
        bcbaa8aa8aa8aa8aa8aa888aa888aa8aa8aa8aa8aa8aabcb
        dbbaa8888aa8aa8aa888ccbbbbcc888aa8aa8aa8888aabbd
        dbbaa8aa8aa8aa888ccbbbbbbbbbbcc888aa8aa8aa8aabbd
        dcc888aa8aa888ccbbbbbccccccbbbbbcc888aa8aa888ccd
        bcbaa8aa888ccbbbbbccbddddddbccbbbbbcc888aa8aabcb
        dbbaa8aaccbbbbbccbddddddddddddbccbbbbbccaa8aabbd
        dbbaaccbbbbcccbddddddddddddddddddbcccbbbbccaabbd
        dcccbbbbcccbdddbccbbbbbbbbbbbbccbdddbcccbbbbcccd
        ccccccccbbbbbbbcbddddddddddddddbcbbbbbbbcccccccc
        bddddddddddddbcddddddddddddddddddcbddddddddddddb
        bbcbdddddddddcbd1111111111111111dbcdddddddddbcbb
        bbbcccccccccccd1bbbbbbbbbbbbbbbb1dcccccccccccbbb
        bbbbdddddddddc11beeeeeeeeeeeeeeb11cdddddddddbbbb
        bbb8aaaaaaa8dc1be3b33b33b33b33beb1cd8aaaaaaa8bbb
        bbb888888888dc1be3b33b33b33b33beb1cd888888888bbb
        bbb833333338dcbbf3b3effffffe33bebbcd833333338bbb
        bbb83ff3ff38dcbbf3bffffffffff3bebbcd83ff3ff38bbb
        bbb83cc3cc38dcbbf3effffffffffebebbcd83cc3cc38bbb
        bbb833333338dcbbf3eeeeeeeeeeeebebbcd833333338bbb
        cbb83ff3ff38dcbbe3b33b33b33b33bebbcd83ff3ff38bbc
        cbb83cc3cc38dcbbe3b33b33b33b33bebbcd83cc3cc38bbc
        ccbbbbbbbbbbdcbbe3b33b33b33feeeebbcdbbbbbbbbbbcc
        .cbbdddddddddcbbe3b33b33b33ffffebbcdddddddddbbc.
        ..cbdbbbdbbbdcbbf3b33b33b33f33febbcdbbbdbbbdbc..
        ...cdbbbdbbbdcbbf3b33b33b33bffeebbcdbbbdbbbdc...
        ....bddddddddcbbf3b33b33b33b33bebbcddddddddb....
        .....bdbbbdddcbbf3b33b33b33b33bebbcdddbbbdb.....
        ......bcccbbbcbbe3b33b33b33b33bebbcbbbcccb......
        `, SpriteKind.Object)
    tiles.placeOnTile(myPurpleHouse, value)
}
for (let value2 of tiles.getTilesByType(assets.tile`myTile3`)) {
    myRedHouse = sprites.create(img`
        ......6ccc666c66e4e44e44e44e44ee66c666ccc6......
        .....64eee444c66f4e44e44e44e44ee66c444eee46.....
        ....644444444c66f4e44e44e44e44ee66c444444446....
        ...c4eee4eee4c66f4e44e44e44effee66c4eee4eee4c...
        ..c64eee4eee4c66f4e44e44e44f44fe66c4eee4eee46c..
        .c66444444444c66e4e44e44e44ffffe66c44444444466c.
        cc66666666664c66e4e44e44e44feeee66c46666666666cc
        c66edccdccde4c66e4e44e44e44e44ee66c4edccdccde66c
        c66edffdffde4c66e4e44e44e44e44ee66c4edffdffde66c
        666eddddddde4c66f4eeeeeeeeeeeeee66c4eddddddde666
        666edccdccde4c66f4effffffffffeee66c4edccdccde666
        666edffdffde4c66f4effffffffff4ee66c4edffdffde666
        666eddddddde4c66f4e4effffffe44ee66c4eddddddde666
        666eeeeeeeee4c16e4e44e44e44e44ee61c4eeeeeeeee666
        666e2222222e4c16e4e44e44e44e44ee61c4e2222222e666
        6666444444444c116eeeeeeeeeeeeee611c4444444446666
        666cccccccccccd166666666666666661dccccccccccc666
        66cb444444444cb411111111111111114bc444444444bc66
        64444444444446c444444444444444444c64444444444446
        cccccccc6666666cb44444444444444bc6666666cccccccc
        4ccc6666ccc6444bcc666666666666ccb4446ccc6666ccc4
        46622cc6666ccc64444444444444444446ccc6666cc22664
        46622e22cc66666cc64444444444446cc66666cc22e22664
        6c622e22eeecc66666cc64444446cc66666cceee22e226c6
        4cceee22e22eeecc66666cccccc66666cceee22e22eeecc4
        46622e22e22e22eeecc6666666666cceee22e22e22e22664
        46622eeee22e22e22eeecc6666cceee22e22e22eeee22664
        6c622e22e22e22e22e22eee22eee22e22e22e22e22e226c6
        4cc22e22eeee22e22e22e2e22e2e22e22e22eeee22e22cc4
        466eee22e22e22e22e22e2e22e2e22e22e22e22e22eee664
        46622e22e22eeee22e22e2e22e2e22e22eeee22e22e22664
        6c622eeee22e22eeee22eee22eee22eeee22e22eeee226c6
        4cc22e22e22e22e22eeee2e22e2eeee22e22e22e22e22cc4
        46622e22eeee22e22e22e2e22e2e22e22e22eeee22e22664
        466eee22e22e22e22e22e2e22e2e22e22e22e22e22eee664
        6c622e22e22eeee22e22e2e22e2e22e22eeee22e22e226c6
        4cc22eeee22e22e22e22eee22eee22e22e22e22eeee22cc4
        46622e22e22e22eeee22e2e22e2e22eeee22e22e22e22664
        46622e22eeee22e22eeee2e22e2eeee22e22eeee22e22664
        6c6eee22e22e22e22e22e2e22e2e22e22e22e22e22eee6c6
        4cc22e22e22eeee22e22e2e22e2e22e22eeee22e22e22cc4
        ...22eeee22e22e22e22eee22eee22e22e22e22eeee22...
        .....222e22e22eeee22e2e22e2e22eeee22e22e222.....
        ........eeee22e22e22e2e22e2e22e22e22eeee........
        ...........e22e22eeee2e22e2eeee22e22e...........
        ..............222e22e2e22eee22e222..............
        .................222eee22e2e222.................
        ....................e2e22e2e....................
        `, SpriteKind.Object)
    tiles.placeOnTile(myRedHouse, value2)
}
tiles.placeOnTile(assasin, tiles.getTileLocation(15, 15))
