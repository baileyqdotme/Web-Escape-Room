// Rules & Info
const rules = {
    1: "Don't attempt to skip a level by changing the number at the end of the URL. This ruins the fun and you may also miss out on clues.",
    2: "If you're stuck, you can type 'hint()' in the console to get a hint! Use it wisely.",
    3: "Avoid sharing answers with others. Let everyone enjoy the challenge and figure things out on their own."
};

// Display welcome message and rules
console.log("%cWelcome to the Web Escape Room!%c\n\nThis is a web-based escape room. You will need to solve puzzles and find clues to escape by thinking outside the box. Good luck!\n", 
    "color: coral; font-size: 24px; font-weight: bold;", // Magenta color for the welcome text
    "color: #4caf50; font-size: 18px; line-height: 1.5;", // Green for the body text
);

// Display rules
console.log("%cRules:\n", "color: coral; font-size: 20px; font-weight: bold;"); // Orange for Rules heading
for (let rule in rules) {
    console.log(`%c${rule}. ${rules[rule]}`, "color: #4caf50; font-size: 16px;"); // Brown for each rule
}

// script.js

level = null;
last_level = 10;
level_hint = null;

function hint() {
    if (level_hint == null) {
        console.log("No hints available for this level.");
    } else {
        console.log("HINT | "+level_hint);
    }
}
