import Phaser from 'phaser'

import TextureKeys from '../consts/TextureKeys'

export default class LaserObstacle extends Phaser.GameObjects.Container {
  constructor(scene: Phaser.Scene, x: number, y: number) {
    super(scene, x, y)

    // create a top
    const top = scene.add.image(0, 0, TextureKeys.LaserEnd)
      .setOrigin(0.5, 0)

    // create a middle and set it below the top
    const middle = scene.add.image(0, top.y + top.displayHeight, TextureKeys.LaserMiddle)
      .setOrigin(0.5, 0)
    
    // set height of the middle laser to 200px
    middle.setDisplaySize(middle.width, 100)

    // create a bottom that is flipped and bellow the middle
    const bottom = scene.add.image(0, middle.y + middle.displayHeight, TextureKeys.LaserEnd)
      .setOrigin(0.5, 0)
      .setFlipY(true)
    
    // add them all to the Container
    this.add(top)
    this.add(middle)
    this.add(bottom)

    scene.physics.add.existing(this, true)

    const body = this.body as Phaser.Physics.Arcade.Body
    const width = top.displayWidth
    const height = top.displayHeight + middle.displayHeight + bottom.displayHeight

    body.setSize(width, height)
    body.setOffset(-width * 0.5, 0)

    // reposition the body
    body.position.x = this.x + body.offset.x
    body.position.y = this.y
  }
}