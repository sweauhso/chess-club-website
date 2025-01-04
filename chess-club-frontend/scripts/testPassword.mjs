import bcrypt from "bcryptjs";

const testPassword = async () => {
  const enteredPassword = "Pd0J4pfj1NqAGlI8awsd"; // ✅ Password you type in login
  const storedHash = "$2a$10$uMmIBzYrc0AZSSfT1CBwHOMf9bI8eQAnhl8A7yU7RtH0qxG4lXuuO"; // ✅ Your stored hash

  const match = await bcrypt.compare(enteredPassword, storedHash);
  console.log(match ? "✅ Password matches!" : "❌ Password does NOT match!");
};

testPassword();
