@namespace
class SpriteKind:
    Object = SpriteKind.create()
# Game over when you reach the end of the
# neighborhood

def on_overlap_tile(sprite, location):
    game.over(True, effects.confetti)
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        myTile
    """),
    on_overlap_tile)

# Change the car image based on the direction it's
# driving

def on_down_pressed():
    animation.run_image_animation(assasin,
        [img("""
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
            """),
            img("""
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
            """),
            img("""
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
            """),
            img("""
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
            """)],
        500,
        False)
controller.down.on_event(ControllerButtonEvent.PRESSED, on_down_pressed)

def on_right_pressed():
    animation.run_image_animation(assasin,
        [img("""
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
            """),
            img("""
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
            """),
            img("""
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
            """),
            img("""
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
            """)],
        500,
        False)
controller.right.on_event(ControllerButtonEvent.PRESSED, on_right_pressed)

# Lose a point for driving into a house

def on_on_overlap(sprite3, otherSprite2):
    music.play_tone(147, music.beat(BeatFraction.QUARTER))
    music.play_tone(139, music.beat(BeatFraction.QUARTER))
    music.play_tone(131, music.beat(BeatFraction.QUARTER))
    scene.camera_shake(2, 200)
    info.change_score_by(-1)
sprites.on_overlap(SpriteKind.player, SpriteKind.Object, on_on_overlap)

def on_left_pressed():
    animation.run_image_animation(assasin,
        [img("""
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
            """),
            img("""
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
            """),
            img("""
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
            """),
            img("""
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
            """)],
        500,
        False)
controller.left.on_event(ControllerButtonEvent.PRESSED, on_left_pressed)

# Deliver packages up (A) or down (B)

def on_a_pressed():
    pass
controller.A.on_event(ControllerButtonEvent.PRESSED, on_a_pressed)

def on_b_pressed():
    pass
controller.B.on_event(ControllerButtonEvent.PRESSED, on_b_pressed)

# Score a point for delivering packages to houses

def on_on_overlap2(sprite2, otherSprite):
    music.magic_wand.play()
    sprite2.destroy(effects.confetti, 500)
    info.change_score_by(1)
sprites.on_overlap(SpriteKind.projectile, SpriteKind.Object, on_on_overlap2)

def on_up_pressed():
    animation.run_image_animation(assasin,
        [img("""
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
            """),
            img("""
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
            """),
            img("""
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
            """),
            img("""
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
            """)],
        500,
        False)
controller.up.on_event(ControllerButtonEvent.PRESSED, on_up_pressed)

myRedHouse: Sprite = None
myPurpleHouse: Sprite = None
assasin: Sprite = None
scene.set_background_color(7)
tiles.set_tilemap(tilemap("""
    nivel
"""))
assasin = sprites.create(img("""
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
    """),
    SpriteKind.player)
tiles.place_on_random_tile(assasin, assets.tile("""
    myTile
"""))
controller.move_sprite(assasin)
scene.camera_follow_sprite(assasin)
for value in tiles.get_tiles_by_type(assets.tile("""
    myTile2
""")):
    myPurpleHouse = sprites.create(img("""
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
        """),
        SpriteKind.Object)
    tiles.place_on_tile(myPurpleHouse, value)
for value2 in tiles.get_tiles_by_type(assets.tile("""
    myTile3
""")):
    myRedHouse = sprites.create(img("""
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
        """),
        SpriteKind.Object)
    tiles.place_on_tile(myRedHouse, value2)