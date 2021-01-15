function getStudentTopNotes(students) {
  // need empty result array
  // itearate through array of objects
  // access notes array
  // sort notes array OR loop through it
  // push highest value into result array

  let highestNotes = [];
  for (let i = 0; i < students.length; i++) {
    if (students[i]['notes'].length >= 1) {
      let highestNote = students[i]['notes'].sort()[students[i]['notes'].length - 1];
      highestNotes.push(highestNote);
    } else {
      highestNotes.push(0);
    }
  }
  return highestNotes;
}

// Test function
function assertArrayEqual(expected, actual, testName) {
  let equalLength = expected.length === actual.length;

  let equalValue = true;
  for (let i = 0; i < expected.length; i++) {
    if (expected[i] !== actual[i]) {
      equalValue = false;
      break;
    }
  }

  if (equalValue && equalLength) {
    console.log('PASSED');
  } else {
    console.log(`FAILED ${testName}\n Expected ${expected}, \n got ${actual}`);
  }
}

// Test cases

let input1 = [
  {
    id: 1,
    name: "Jacek",
    notes: [5, 3, 4, 2, 5, 5]
  },
  {
    id: 2,
    name: "Ewa",
    notes: [2, 3, 3, 3, 2, 5]
  },
  {
    id: 3,
    name: "Zygmunt",
    notes: [2, 2, 4, 4, 3, 3]
  }
];

let actual1 = getStudentTopNotes(input1);
let expected1 = [5, 5, 4];
assertArrayEqual(expected1, actual1, 'Should return top notes');

// Test case with empty array
let input2 = [
  {
    id: 1,
    name: "Jacek",
    notes: [5, 3, 4, 2, 5, 5]
  },
  {
    id: 2,
    name: "Ewa",
    notes: []
  },
  {
    id: 3,
    name: "Zygmunt",
    notes: [2, 2, 4, 4, 3, 3]
  }
];;
let actual2 = getStudentTopNotes(input2);
let expected2 = [5, 0, 4];
assertArrayEqual(expected2, actual2, 'Should return 0 if student doesn\'t have notes');
