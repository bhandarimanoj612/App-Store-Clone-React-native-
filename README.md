
# React Native Starter Project (Expo)

Welcome to the React Native Starter Project! This project is designed to provide a ready-to-use setup for starting new React Native projects, eliminating the need to manually install dependencies each time.

## Features

- **Pre-installed Dependencies**: All the essential dependencies are already set up, so you can start developing right away.
- **Optimized Configuration**: The project is configured for optimal performance and development experience.
- **Easy Setup**: Get your project up and running with minimal effort.

## Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (LTS version recommended)
- [Yarn](https://yarnpkg.com/) (optional, but recommended)
- [React Native CLI](https://reactnative.dev/docs/environment-setup) (if not using Expo)

### Installation

1. **Clone the Repository**:

    ```bash
    git clone https://github.com/bhandarimanoj612/React-Native_CompleteProjectStartupFile.git
    ```
    Copy----------------------------------------------------------------------------------->
     ```bash
    cd React-Native_CompleteProjectStartupFile
    ```

2. **Install Dependencies**:

    ```bash
    npm install
    # or
    yarn install
    ```

3. **Run the Project**:

    ```bash
    npm start
    ```

## Project Structure

Here is an overview of the project structure:

```
react-native-starter/
├── .expo
├── assets
├── src/
│   ├── components/
│   ├── screens/
│   ├── navigation/
│   ├── assets/
│   ├── styles/
│   └── utils/
├── .gitignore
├── App.js
├── package.json
├── README.md
└── ...
```

### Pre-installed Packages

The project includes the following dependencies:

```json
"@react-native-async-storage/async-storage": "1.23.1",
"@react-navigation/bottom-tabs": "^6.5.11",
"@react-navigation/native": "^6.1.8",
"@react-navigation/native-stack": "^6.9.14",
"@stripe/stripe-react-native": "0.37.2",
"axios": "^1.6.7",
"expo": "~51.0.7",
"expo-image": "^1.12.9",
"expo-image-picker": "^15.0.5",
"expo-status-bar": "~1.12.1",
"lottie-react-native": "6.7.0",
"nativewind": "^2.0.11",
"react": "18.2.0",
"react-native": "0.74.1",
"react-native-gesture-handler": "~2.16.1",
"react-native-heroicons": "^3.2.0",
"react-native-linking": "^0.0.0",
"react-native-maps": "1.14.0",
"react-native-ratings": "^8.1.0",
"react-native-responsive-screen": "^1.4.2",
"react-native-safe-area-context": "4.10.1",
"react-native-screens": "3.31.1",
"react-native-swipe-list-view": "^3.2.9",
"react-native-swipeable": "^0.6.0",
"react-native-vector-icons": "^10.0.3",
"react-native-virtualized-view": "^1.0.0",
"tailwindcss": "^3.3.2"
```

## Additional Information for Beginners

### Key Topics to Review

1. **JavaScript Fundamentals**
   - **ES6+ Features**: Arrow functions, destructuring, spread/rest operators, template literals, classes, modules.
   - **Promises and Async/Await**: Understanding asynchronous programming.

2. **React Basics**
   - **Components**: Functional vs. class components, component lifecycle methods.
   - **State and Props**: How state and props are used, differences, passing data between components.
   - **Hooks**: `useState`, `useEffect`, `useContext`, custom hooks.
   - **JSX**: Understanding JSX syntax and how it translates to JavaScript.

3. **React Native Specifics**
   - **Core Components**: View, Text, Image, ScrollView, FlatList, SectionList, Touchable components.
   - **Styling**: Flexbox layout, StyleSheet API.
   - **Navigation**: React Navigation (stack, tabs, drawer), passing data between screens.
   - **Native Modules and Components**: Basics of bridging native code with React Native.
   - **APIs**: Fetching data using `fetch` or axios, handling network requests.
   - **State Management**: Basics of Redux or Context API.

4. **Development Tools**
   - **Expo**: What it is, when to use it.
   - **Debugging**: Using React Native Debugger, Chrome DevTools, Flipper.
   - **Build and Deployment**: Basic understanding of building and deploying apps for iOS and Android.

### Practical Tips

1. **Review Documentation and Tutorials**: Go through React Native documentation and some key tutorials or guides.
2. **Build a Small Project**: If you have time, create a small app to demonstrate your skills. This can be a to-do list, a weather app, or a simple game.

### Resources

- [React Native Documentation](https://reactnative.dev/docs/getting-started)
- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [JavaScript Info](https://javascript.info/)
- [Expo Documentation](https://docs.expo.dev/)

### Youtube Channel from me 

-[not just developer](https://www.youtube.com/watch?v=rIYzLhkG9TA&t=2093s)
-[thapa technical](https://www.youtube.com/watch?v=pBEeQ6B6bUI&list=PLwGdqUZWnOp354xMD8u0hxX-1qmCvfLiY)
-[Code with nome](https://www.youtube.com/watch?v=tLl_h6-UIC4)
-[Engineer Codewala](https://www.youtube.com/watch?v=abVcpSRM0Wc&t=250s)

I have added more quick overview for learning react native so that you can start from this git repo

JavaScript Fundamentals

ES6+ Features:
----------------------------------------------------------------------------------------------------------
1)Arrow Functions: Shorter syntax for writing functions with no this binding.
const add = (a, b) => a + b;

2)Destructuring: Extracting values from arrays or objects into distinct variables.
const { name, age } = person;


3)Spread/Rest Operators: Spread expands arrays/objects, rest collects multiple elements into an array.
const newArr = [...arr, 4, 5];
const [first, ...rest] = arr;


4)Template Literals: String literals with embedded expressions.
const greeting = `Hello, ${name}!`;


5)Classes: Syntactic sugar over prototype-based inheritance.
class Person {
  constructor(name) {
    this.name = name;
  }
  greet() {
    return `Hello, ${this.name}`;
  }
}



6)Modules: Importing and exporting functionalities.
import { add } from './math';


Promises and Async/Await:

7)Promises: Represent the eventual completion or failure of an asynchronous operation.
fetchData().then(data => console.log(data));

8)Async/Await: Syntactic sugar for handling promises more synchronously.
const fetchData = async () => {
  const response = await fetch(url);
  return response.json();
};

9)try and catch: for handling execption

 try {
console.log("hello")
 }catch{
 console.log('testing')
 }

React Basics
Components:


1)Functional Components: Simpler, no state or lifecycle methods until hooks.
const MyComponent = () => <div>Hello</div>;

2)Class Components: Have state and lifecycle methods.
class MyComponent extends React.Component {
  render() {
    return <div>Hello</div>;
  }
}


State and Props:

3)State: Component's local data storage.
this.state = { count: 0 };


Props: Read-only attributes passed to components.
const MyComponent = (props) => <div>{props.message}</div>;

Hooks:

4)useState: Manages state in functional components.

const [count, setCount] = useState(0);


5)useEffect: Performs side effects in functional components.

useEffect(() => { /* effect */ }, []);


6)useContext: Accesses context in functional components.
const value = useContext(MyContext);

JSX:

7)JSX Syntax: JavaScript XML-like syntax for defining UI components.
const element = <h1>Hello, world!</h1>;



React Native Specifics
Core Components:

1)View: Container for components.
<View style={{ flex: 1 }} />


2)Text: Displays text.
<Text>Hello, World!</Text>


3)Image: Displays images.
<Image source={{ uri: 'https://example.com/image.jpg' }} />


4)ScrollView: Scrollable container.
<ScrollView>
  <Text>Item 1</Text>
  <Text>Item 2</Text>
</ScrollView>

5)FlatList: Efficient list for large data sets.
<FlatList data={data} renderItem={({ item }) => <Text>{item.name}</Text>} />

Styling:

6)Flexbox Layout: Used for layout.
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

Navigation:

7)React Navigation: Library for navigation.
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';



APIs:

8)Fetching Data: Using fetch or axios.
const fetchData = async () => {
  const response = await fetch(url);
  return response.json();
};


9)Axios: axios  for fetching data 
const response = await axios.get(
        `${BASE_URL}BudgetTrip/user/${userInfo.email}`
      );
`
axios.get ---->for get
axios.put ---->for put
axios.delete---> for delete
axios.post ----->for post 
`


State Management:
10)Redux: Centralized state management.
import { createStore } from 'redux';
const store = createStore(reducer);





Good luck with your learning and development!

Happy coding! 🚀
