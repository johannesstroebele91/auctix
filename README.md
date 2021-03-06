# 1. Summary
This mobile first web application was developed by Alex and Johannes.
The goal is to enable users to bid on art pieces in a real auction house using the auctix web app.
The auction is carried out as follows:
1) People go to the respective auction 
2) Each person gets an individual username or password (or QR Code) to authenticate themselves anonymously
3) They can log in using two ways:
3.1) They can either scan the provided QR Code, which opens up the auctix web app and logs the user in
3.2) They can go to the auctix web app themselves and input their credentials manually using the provided username and password
4) Then, the users are redirected to the respective auction associated with the QR Code or username/password   
4) The main view of each auction gives an overview of all products that can be purchased
5) The user can look around, mark a product as their favorite by clicking a heart shaped button, and click on a product to  get more detailed information
6) If the users decide get more details about the product:
6.1) they can see when the auction starts throughout a timestamp and also see the remaining time
6.2) they can see the current bid, and the former submitted bids   
6.3) they can bid on a product by entering a number that must be higher than the current bid  
6.4) they can add the product to his favorites by clicking on a heart shaped button
6.5) they can share the product by clicking on the share button
7) If the user won the bid, he or she then completes the purchase offline with the auctioneer

# 2. Design Mockup

# 3. Technology Stack
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
* Frontend: React, TypeScript, Ant Design, SCSS/LESS
* Backend: Express, Node.js, TypeScript
* Database: MongoDB?

# 4. File Structure

# 5. Development and deployment instructions
In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can???t go back!**

If you aren???t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you???re on your own.

You don???t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn???t feel obligated to use this feature. However we understand that this tool wouldn???t be useful if you couldn???t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

# 6. Endpoints

# 7. Lessons Learned

# 8. Potential Improvements
A more detailed explanation can be found on the [wiki page](https://github.com/johannesstroebele91/GitHubUserDashboard/wiki/Potential-enhancement)
* Implement comparison of one GitHub user with others (e. g. with charts and tables)
* Create more and better visualizations to give even deeper insights using ng2-charts
* Implement search for specific coding language for all users (filters would be great)
* Replace normal search form with FormBuilder (https://coryrylan.com/blog/angular-form-builder-and-validation-management)
* Use RxJS for dealing with more than one event or asynchronous computation see RxJS library
* Implement user registration and login (https://jasonwatmore.com/post/2019/06/10/angular-8-user-registration-and-login-example-tutorial)
* Create reverse proxy for faster and smoother flow of traffic between clients and servers (e.g. https://unit.nginx.org/howto/express/)
* Setup database for registered users and connect it to the application
* Implement testing with e. g. Karma and Jasmine
