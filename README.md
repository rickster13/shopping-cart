# shopping-cart
Online shopping cart application for selling products

# Running Locally
- This application uses MongoDB as its backend datastore. Please make sure, it is running
prior to application start up depending on the type of OS it is running on.

        For Windows: Double Click the mongod.exe file or run it via command line found in the /bin directory of your
        MongoDB installation.

        For Mac OSX: Navigate to the /bin folder of your monogo installation and type in 
        ./mongod

- The application expects the datastore to have a preset data which the application would in 
turn use.
- This data can be fed into the database, separately by running the ```seed/product-seeder.js``` file.
- To start this application, type in nom start from your terminal or command line when being in the app directory.