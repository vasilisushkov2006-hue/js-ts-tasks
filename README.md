# Test 01: JavaScript another try

Develop solution to the one of the two tasks below

## Task description - maximum 8 points of 10

Develop a simple script to fetch user data from an external API, process it, and display relevant information. Your task is to write JavaScript functions that retrieves a list of users, filters them based on specific criteria, and formats the output.

### Requirements

1. Fetch Data (Async/Await & Promises)

   - Use fetch and async/await to retrieve user data from this API:
     👉 https://jsonplaceholder.typicode.com/users

2. Process the Data

- Extract only users who are based in cities that start with the letter "S".
- Format the output to include:
  - Name
  - Email
  - City
- If no users match the criteria, display a message: "No users found in cities starting with 'S'."

3. Display the Results (Console Output)

- Log the filtered user list to the console in a readable format.

```bash
Filtered Users:
1. Name: Samantha Doe, Email: samantha@example.com, City: Seattle
2. Name: Steve Smith, Email: steve@example.com, City: San Francisco
```

### You will be asked to modify your solutions in order to meet new requirements. The results will have influence on the final points for the task

## Task description - maximum 10 points of 10

Your goal is to create a UserManager class that fetches user data from an API, filters it, processes it, and displays the results.

### Requirements

1. Create a UserManager class

- This class should fetch user data from https://jsonplaceholder.typicode.com/users using async/await.

2. Implement Filtering & Processing Methods

- A method `filterUsersByCity(letter)` that returns users whose city starts with a given letter.
- A method `getUserEmails()` that returns an array of emails.
- A method `getTotalUsernameCharacters()` that returns the total number of characters across all usernames.

3. Display Results in the Console

- Print the filtered users in a readable format.
- If no users match, display: "No users found."

```bash
Filtered Users:
1. Name: Samantha Doe, Email: samantha@example.com, City: Seattle
2. Name: Steve Smith, Email: steve@example.com, City: San Francisco
```

### You will be asked to modify your solutions in order to meet new requirements. The results will have influence on the final points for the task

## General Requirements

- Programming language: JavaScript
- Working environment: Browser
- Run your code in Browser Snippets: Chrome Dev Tools -> Sources tab -> Snippets sub tab on the left -> + New snippet button

## Possible cheating attention

If your solution will be similar to the solutions of other students or AI bots, all students and you will be given 0 points. After all students have been graded, the controversial cases can be discussed:

- you may be asked theoretical questions
- you may be asked questions about your solution
- there may be requests to make changes to your solution
- there may be requests to solve small practical tasks
