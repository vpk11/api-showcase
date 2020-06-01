# README

Database Design : https://docs.google.com/presentation/d/1cZYI9bd6ipyHyINMdwVVOA_ebdvjbFWI8Pwzgt2vWQs/edit?usp=sharing

Steps are necessary to get the
application up and running.

##### Prerequisites 
The setups steps expect following tools installed on the system.
- Github 
- Ruby [2.6.3] 


##### 1. Check out the repository 
```git clone https://github.com/vpk11/api-showcase.git``` 
##### 2. Create database.yml file Copy the sample database.yml file and edit the database configuration as required. 
``` cp config/database.yml.sample config/database.yml ``` 
##### 3. Install the required gems using
```bundle install```
##### 4. Create and setup the database Run the following commands to create and setup the database. 
```rake db:create ```
```rake db:migrate ``` 
##### 5. Start the Rails server You can start the rails server using the command given below. 
```rails s ```
And now you can visit the site with the URL http://localhost:3000






















