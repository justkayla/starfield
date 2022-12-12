class Star {
  constructor(x, y, z) {
    // Full width and height of screen
    this.x = random(-width, width);
    this.y = random(-height, height);
    this.z = random(width);
    this.pz = this.z;

    this.col = color(`hsl(${~~random(360)}, 100%, 50%)`);
  }

  update() {
    this.z = this.z - speed;
    /**
     * If z is less than 1
     * z resets
     * x and y are given random positions
     */
    if (this.z < 1) {
      this.z = width;
      this.x = random(-width, width);
      this.y = random(-height, height);
      this.pz = this.z;
    }
  }

  show() {
    fill(255);
    noStroke();

    //
    let sx = map(this.x / this.z, 0, 1, 0, width);
    let sy = map(this.y / this.z, 0, 1, 0, height);

    /**
     * Map z value of circle
     * When closer, should be bigger
     * When farther away, should be smaller (start at 0)
     */
    let r = map(this.z, 0, width, 20, 0);
    circle(sx, sy, r);

    // Previous location for trailing effect
    let px = map(this.x / this.pz, 0, 1, 0, width);
    let py = map(this.y / this.pz, 0, 1, 0, height);

    this.pz = this.z;

    stroke(this.col);
    line(px, py, sx, sy);
  }
}
