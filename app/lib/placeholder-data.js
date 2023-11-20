// placeholder data which will seed the database
// should this be character level up needs?
// priorities?
// baseline info for characters?

const users = [
  {
    id: '410544b2-4001-4271-9855-fec4b6a6442a',
    username: 'User',
    email: 'user@nextmail.com',
    password: '123456',
  },
];

const characters = [
  {
    id: '3958dc9e-712f-4377-85e9-fec4b6a6442a',
    name: 'Fake Character',
    level: '1',
    normal: '1',
    skill: '1',
    burst: '1',
  },
];

const inventory = [
  {
    id: '13D07535-C59E-4157-A011-F8D2EF4E0CBB',
    name: 'Fake Item',
    category: 'Local Specialty',
    quantity: '0',
    /* NOTE: Want to include connection to next item in crafting chain? If so where? */
  },
];

const priorities = [
  {
    id: 'CC27C14A-0ACF-4F4A-A6C9-D45682C144B9',
    name: 'Fake Character Level 90',
    subject: 'character',
    category: 'level',
    amount: '90',
    rank: 1,
    /* NOTE: What should this include? How should it work? Tied to account */
  },
];
