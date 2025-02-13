Main Project is under "Librarium folder"\
Files outside of that are just a preview of what the website used to be before the database-changes.\
The website looks the same mostly, so if you just want to have a look at the website and don't care about the database stuff and other functionality such as:\
profile-viewing, logging-in, logging-out, signing-up, etc...\
You can do so by simply visiting the github deployed page here: https://neumeria.github.io/Ossuary/ \
\
"The Librarium" is complete.\
Some latest changes forced some bugs to surface, all of which have been dealt with.\
Any further changes, will only be for some small touch-ups, decorations, bug-fixes (if any) and features that I may have forgotten to implement.\
\
Please note, that in order to get the full experience of the website you need to be a logged-in user, which requires you to have a MySQL server installed and running on your PC.\
Open the connection in your MySQL workbench and execute the following code:\
\
CREATE DATABASE IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;\
USE `mydb`;\
CREATE TABLE IF NOT EXISTS `users` (\
`user_id` int(11) NOT NULL AUTO_INCREMENT,\
`username` varchar(50) NOT NULL,\
`password` varchar(255) NOT NULL,\
`email` varchar(100) NOT NULL,\
`registraion_date` DATE NOT NULL DEFAULT(CURRENT_DATE),\
PRIMARY KEY (`user_id`)\
) ENGINE=InnoDB DEFAULT CHARSET=utf8;\
\
The next two lines are not necessary but they are helpful for testing purposes:\
\
INSERT INTO `users` (`username`, `password`, `email`) VALUES ('test', 'test', 'test@test.com');\
SELECT * FROM `users`;

And finally, don't forget to run the Flask server by following the instructions in the "Running the server.txt".\
For a rundown of my progress done, a changelog of all the changes made and/or any further details, refer to my "Development log.txt".
