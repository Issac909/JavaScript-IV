// CODE here for your Lambda Classes
class Person {
    constructor(attr) {
        this.name = attr.name,
        this.location - attr.location,
        this.age = attr.age    
        
    }
    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}.`;
    }
}

class Instructor extends Person {
    constructor(iAttr) {
        super (iAttr)
        this.specialty = iAttr.specialty,
        this.favLanguage = iAttr.favLanguage,
        this.catchPhrase = iAttr.catchPhrase
    }
    demo(subject){
        return `Today we are learning ${subject}`;
    }
    grade(name, subject){
        return `${name} recieves a perfect score on ${subject}.`;
    }
}

class Student extends Person {
    constructor (sAttr) {
        super(sAttr)
        this.previousBackground = sAttr.previousBackground,
        this.className = sAttr.className,
        this.favSubjects = sAttr.favSubjects
    }
    
    
    listsSubjects() {
        return `My favorite subjects are: ${this.favSubjects[0]}, ${this.favSubjects[1]}, and ${this.favSubjects[2]}.`;
    }
    PRAssignment(subject){
        return `${this.name} has submitted a PR for ${subject}`;
    }
    sprintChallenge(subject){
        return `${this.name} has begun sprint challenge on ${subject}`;
    }
}

class ProjectManager extends Instructor {
    constructor (pmAttr) {
        super (pmAttr)
        this.gradClassName = pmAttr.gradClassName,
        this.favInstructor = pmAttr.favInstructor
    }
    standUp(channel, subject) {
        return `${this.name} announces to ${channel}, @channel standy code on ${subject}`;
    }
    debugsCode(name, subject) {
        return `${this.name} debugs ${name}'s code on ${subject}`;
    }
}
const liz = new ProjectManager ({
    name: 'Liz',
    location: 'New York',
    age: 45,
    favLanguage: 'Python',
    specialty: 'User Interface',
    catchPhrase: 'Never quit!',
    gradClassName: 'UX08',
    favInstructor: 'Karin'
})

const bob = new ProjectManager ({
    name: 'Bob',
    location: 'Nevada',
    age: 50,
    favLanguage: 'Swift',
    specialty: 'Data Science',
    catchPhrase: 'Mistakes are to learn from.',
    gradClassName: 'DS14',
    favInstructor: 'Karin'
})

const jessica = new ProjectManager ({
    name: 'Jessica',
    location: 'San Diego',
    age: 38,
    favLanguage: 'Java',
    specialty: 'Software Engeineer',
    catchPhrase: 'Just keep swimming!',
    gradClassName: 'CS11',
    favInstructor: 'Karin'
})


const fred = new Instructor({
    name: 'Fred',
    location: `Bedrock`,
    age: 37,
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies!`
  })

  const karin = new Instructor({
    name: 'Karin',
    location: 'New Hampshire',
    age: 28,
    favLanguage: 'Python',
    specialty: 'Back-End',
    catchPhrase: 'It all comes with practice.'
  })

  const carl = new Instructor({
    name: 'Carl',
    location: 'Carlsbad',
    age: 42,
    favLanguage: 'C#',
    specialty: 'Software Applications',
    catchPhrase: 'Built right. Never rebuild.'
  })

  const sara = new Student ({
      name: 'Sara',
      location: 'Buffalo',
      age: 22,
      previousBackground: 'Accounting',
      className: 'WEB22',
      favSubjects: [
          'JavaScript',
          'Front-End',
          'Computer Science'
      ]
  })

  const peter = new Student ({
    name: 'Peter',
    location: 'Quahog',
    age: 46,
    previousBackground: 'Fisherman',
    className: 'RD4848',
    favSubjects: [
        'Football',
        'Seth Macfarlane',
        'Beer'
    ]
})

const craig = new Student ({
    name: 'Craig',
    location: 'Ohio',
    age: 24,
    previousBackground: 'Robotics',
    className: 'WEB25',
    favSubjects: [
        'Programming',
        'Web Development',
        'Computer Science'
    ]
})

console.log(fred.speak());
console.log(fred.demo('Web Development'));
console.log(craig.listsSubjects());
console.log(sara.PRAssignment('Front-End'))
console.log(craig.sprintChallenge('User-Interface'));
console.log(karin.grade(peter.name, 'JavaScript'));
console.log(jessica.standUp('WEB22_PR', 'Front-End'));
console.log(bob.debugsCode(sara.name, 'PRAssignment'));
console.log(fred.catchPhrase);