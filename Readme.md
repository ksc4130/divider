Divider implemements the division process without use of the division operator. The results of calling the divider will yield an object with a quotient and a remainder.

####Usage
```javascript
import divider from './lib/index';

let results = divider(6, 5); 
```

The above will return { quotient: 1, remainder: 1 }.

1. install dependencies using "npm install -d"
2. run tests using "npm test"
3. run test interface using "npm start"
4. open http://localhost:4000 in browser

#####Warning 
Numbers over 1,000,000,000 will start to lag. If you need to run calculations on numbers >= this than some work will need to be done to free up the loop.