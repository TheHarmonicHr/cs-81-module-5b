# Reflection: Module 5B – activityTracker.js

Before writing any code, I predicted that physical activities would dominate my week and that journaling or therapy would likely be the most enjoyable. I also guessed that evening activities might have lower enjoyment due to fatigue.

After running my analysis, I found that physical activities did take up the most time, but evening activities like journaling and gaming actually had some of the highest enjoyment scores. That was surprising — I expected to be too tired at night, but it turns out those low-pressure, solo moments helped me recharge.

 Early on, I ran into syntax errors: I forgot commas between object properties, used semicolons (`;`) instead of colons (`:`) in key-value pairs, and had inconsistent casing in property names like `timeofDay` vs `timeOfDay`. These small mistakes broke the entire file, and debugging them taught me how sensitive JavaScript is to structure. I now understand how crucial precision is when working with data objects.

Once I got past the setup, writing analysis functions became easier. I found `.filter()` especially useful for narrowing down data based on conditions like category or time of day. Combining it with `.map()` or `.reduce()` allowed me to quickly calculate total hours, averages, and identify patterns I wasn’t expecting.

Writing my own higher-order function (`filterByCondition()`) helped me understand that functions really save time and are incredibly useful.

This project helped me reflect not just on my JavaScript logic, but on my real-life patterns and assumptions. 