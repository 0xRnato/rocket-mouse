import Phaser from 'phaser'

import SceneKeys from '../consts/SceneKeys'
import TextureKeys from '../consts/TextureKeys'
import AnimationKeys from '../consts/AnimationKeys'

export default class Preloader extends Phaser.Scene {
  constructor() {
    super(SceneKeys.Preloader)
  }

  preload() {
    // background
    this.load.image(TextureKeys.Background, 'house/bg_repeat_340x640.png')

    // character
    this.load.atlas(TextureKeys.RocketMouse, 'characters/rocket-mouse.png', 'characters/rocket-mouse.json')
  }

  create() {
    // character animations
    this.anims.create({
      key: AnimationKeys.RocketMouseRun,
      frames: this.anims.generateFrameNames('rocket-mouse', {
        start: 1,
        end: 4,
        prefix: 'rocketmouse_run',
        zeroPad: 2,
        suffix: '.png'
      }),
      frameRate: 10,
      repeat: -1
    })

    this.scene.start(SceneKeys.Game)
  }
}