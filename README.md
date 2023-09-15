#  Questions and ans: 

- Add at least 3 Project features 

 ## Ans:
- User can purchase any course they want.
- User cannot purchase more than 20 hours.
- User can see the total price of the course.


- Discuss how you managed the state in your assignment project.

## Ans:
- In my assignment project, I used some techniques and libraries to manage state effectively in  this application. State management is crucial in React because it helps maintain the data flow and ensures that components stay synchronized. Here are the key approaches I employed:

For managing local component-level state, I used the useState hook. It allows me to declare and manage state variables within functional components. This is suitable for handling UI-related state changes and user interactions within a single component.

I also managed data from sources by using techniques like asynchronous API calls with the fetch API. I typically used useState and useEffect hooks to handle loading states and update UI components when data is fetched.

For passing state between parent and child components, I used props. State lifting is a common pattern in React where the parent component manages and passes down state to its child components through props.

