const indianFirstNames = [
  "Aarav", "Vivaan", "Aditya", "Vihaan", "Arjun", "Sai", "Ayaan", "Krishna", "Ishaan", "Shaurya",
  "Diya", "Saanvi", "Aanya", "Peehu", "Ananya", "Myra", "Kiara", "Kriti", "Riya", "Aarohi",
  "Rahul", "Rohan", "Vikram", "Sneha", "Priya", "Amit", "Neha", "Kiran", "Pooja", "Rajesh"
];

const indianLastNames = [
  "Patel", "Sharma", "Singh", "Kumar", "Das", "Bose", "Gupta", "Verma", "Rao", "Joshi",
  "Iyer", "Chauhan", "Bhat", "Nair", "Reddy", "Menon", "Kapoor", "Mehta", "Malhotra", "Agarwal",
  "Yadav", "Tiwari", "Mishra", "Pandey", "Chatterjee", "Bhattacharya", "Sinha", "Srivastava", "Deshmukh", "Jain"
];

export function transformUser(user) {
  // Only transform the predefined DummyJSON users (IDs usually 1-30+ but let's just do it for all existing numeric IDs safely)
  if (!user || !user.id) return user;
  
  // Use user.id to deterministically pick a name so it stays consistent across pages
  const firstIndex = (user.id * 7) % indianFirstNames.length;
  const lastIndex = (user.id * 11) % indianLastNames.length;
  
  const firstName = indianFirstNames[firstIndex];
  const lastName = indianLastNames[lastIndex];
  
  return {
    ...user,
    firstName: firstName,
    lastName: lastName,
    email: `${firstName.toLowerCase()}.${lastName.toLowerCase()}@example.com`
  };
}
