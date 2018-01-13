export default class User {
  constructor(name, scores) {
    this.name = name
    this.photo = `/pics/${name.replace(/\s/g, '_')}.jpeg`
    this.scores = scores
  }
}

export const dummyData = [
  new User('Emma Stone', [4, 3, 2, 5, 2, 3, 4, 2, 4, 5]),
  new User('Kate Upton', [4, 2, 3, 5, 2, 4, 1, 2, 5, 5]),
  new User('Mark Wahlberg', [1, 5, 3, 2, 5, 2, 3, 4, 1, 5]),
  new User('Barack Obama', [2, 5, 3, 4, 2, 3, 4, 2, 3, 4]),
  new User('John Oliver', [3, 4, 2, 3, 5, 2, 4, 5, 2, 3]),
]
