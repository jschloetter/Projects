// Life Assignment Generator
// Tired of making choices? Try this!
// This program will give you a fulfilling career, a hobby, and what you should invest in.
// Example: Your career is: HVAC Technician. Your favorite hobby is: model airplanes. You should invest in: AAPL


let TextArray = {
    careerChoices: ['Payroll Clerk', 'Energy Auditor', 'Financial Examiner', 'Telemarketer', 'Janitorial Supervisor', 'Neurodiagnositc Technologist', 'Entertainment Attendant', 'Earth Driller', 'Architectural Drafter'],
    favoriteHobby: ['Morphology', 'Animal Fancy', 'Computer Programming', 'Simple Living', 'Amateur Radio', 'Dining', 'Stretching', 'Metalworking', 'Livestreaming', 'Patch Collecting'],
    investIn: ['Kimberly-Clark Corporation', 'Hartford Financial Services', 'GFL Environmental', 'Southwestern Energy Company', 'AZEK Company Inc', 'YETI Holdings Inc', 'American Eagle Outfitters, Inc', 'Barnes & Nobles Education, Inc', 'Amplify Energy Corp.', 'Five Point Holdings']
}

const generateLifeAssignment = () => {
    let i = Math.floor(Math.random() * 10);
    let j = Math.floor(Math.random() * 10);
    let k = Math.floor(Math.random() * 10);
    return `Your career is: ${TextArray.careerChoices[i]}. Your favorite hobby is: ${TextArray.favoriteHobby[j]}. You should invest in: ${TextArray.investIn[k]}`;
}

console.log(generateLifeAssignment());
