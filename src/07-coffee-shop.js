/**
 * ☕ Bean & Brew Cafe
 *
 * Bean & Brew, the cozy neighborhood cafe, wants to go digital! They
 * need a system that calculates the total price of a coffee order.
 * Here's their menu:
 *
 * Base price by size:
 *   - "small"  → $3.00
 *   - "medium" → $4.00
 *   - "large"  → $5.00
 *
 * Add-on for coffee type:
 *   - "regular"    → +$0.00
 *   - "latte"      → +$1.00
 *   - "cappuccino" → +$1.50
 *   - "mocha"      → +$2.00
 *
 * Optional extras:
 *   - whippedCream → +$0.50 (if true)
 *   - extraShot    → +$0.75 (if true)
 *
 * Rules:
 *   - If size is not "small", "medium", or "large", return -1
 *   - If type is not "regular", "latte", "cappuccino", or "mocha", return -1
 *   - Return the total price rounded to 2 decimal places
 *
 * @param {string} size - "small", "medium", or "large"
 * @param {string} type - "regular", "latte", "cappuccino", or "mocha"
 * @param {{ whippedCream?: boolean, extraShot?: boolean }} extras - Optional extras
 * @returns {number} Total price or -1 for invalid input
 */
export function calculateCoffeePrice(size, type, extras = {}) {
  // Valid options
  const validSizes = ["small", "medium", "large"];
  const validTypes = ["regular", "latte", "cappuccino", "mocha"];

  // Validation
  if (!validSizes.includes(size)) return -1;
  if (!validTypes.includes(type)) return -1;

  let amount = 0;

  // Base price by size
  if (size === "small") {
    amount = 3;
  } else if (size === "medium") {
    amount = 4;
  } else {
    amount = 5;
  }

  // Add type cost
  if (type === "regular") {
    amount += 0;
  } else if (type === "latte") {
    amount += 1;
  } else if (type === "cappuccino") {
    amount += 1.5;
  } else if (type === "mocha") {
    amount += 2;
  }

  // Extras
  if (extras.whippedCream) {
    amount += 0.5;
  }
  if (extras.extraShot) {
    amount += 0.75;
  }

  return amount;
}


