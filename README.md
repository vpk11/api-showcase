# API Showcase

> A Rails app built to effectively document API's with less pain. Used react-rails gem for frontend.

Database Design : https://docs.google.com/presentation/d/1cZYI9bd6ipyHyINMdwVVOA_ebdvjbFWI8Pwzgt2vWQs/edit?usp=sharing

Steps are necessary to get the
application up and running.

##### Prerequisites 
The setups steps expect following to be installed on the system.

- Ruby [2.6.5] 
- Rails [6.0.4]


##### 1. Check out the repository 
```git clone https://github.com/vpk11/api-showcase.git``` 
##### 2. Create database.yml file Copy the sample database.yml file and edit the database configuration as required. 
``` cp config/database.yml.sample config/database.yml ``` 
##### 3. Install the required gems using
```bundle install```
##### 4. Create and setup the database Run the following commands to create and setup the database. 
```rake db:prepare```

##### 5. Start the Rails server You can start the rails server using the command given below. 
```rails s ```

And now you can visit the site with the URL http://localhost:3000

---
### Docker Setup🚀
> If permission issue -> run as `sudo`
- Run container:
```shell
docker-compose up -d
```
  > `-d` will run the containers in the background 
- Check container status:
```shell
docker-compose ps
```
- Create DB:
```shell
docker-compose exec app bundle exec rake db:create
```
- Run migrations:
```shell
docker-compose exec app bundle exec rake db:migrate
```
- Check container logs:
```shell
docker-compose logs
```
- Stop container:
```shell
docker-compose down
```
- Rails console:
```shell
docker-compose exec app bundle exec rails c
```
And now you can visit the site with the URL http://localhost:3000

---

### References🚀
 - Docker: https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-on-ubuntu-20-04
 - Docker Compose: https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-compose-on-ubuntu-20-04
 - Dockerize the app: https://www.digitalocean.com/community/tutorials/containerizing-a-ruby-on-rails-application-for-development-with-docker-compose




















