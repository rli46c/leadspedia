# mernleadspedia
LeadsPedia in MERN

# Install and Run Project
    npm install
    cd client
    npm install
    npm run dev (first do: cd ..)

## GitHub Commands:
1.) First Time - Clone Single Branch: 
    <!-- directory address [/your/folder] is optional -->
    
    git clone https://github.com/rli46c/mernleadspedia.git -b alpha --single-branch /your/folder

2.) First Time - Update Config
<!-- Add [--global] only if you want the same config for all repositories -->
    git config --global user.name "Your Name"
    git config --global user.email "you@example.com"

3.) Everytime - Add your changes and commit them
<!-- Here [.] or [all] can be used to add all files. You can also add specific files/folders -->
    
    git add .
    git commit -m "Message"

4.) Everytime - git status

5.) Everytime [As per status] - Pull Further Changes: git pull

6.) Everytime [As per status] - Push Further Changes: git push



## How to kill a process running on particular port in Linux?
    sudo kill -9 `sudo lsof -t -i:3000`
[More on kill process..]

## Heroku Post Build script
[https://devcenter.heroku.com/categories/nodejs-support](https://devcenter.heroku.com/categories/nodejs-support)

## How to push different local Git branches to Heroku/master
    git push heroku +HEAD:master
[alpha to Heroku master...]

## Git: “Not currently on any branch.” Is there an easy way to get back on a branch, while keeping the changes?
    <https://stackoverflow.com/a/4735584>

### Push to Link
    git push origin HEAD:origin/alpha


#### References
[More on kill process..]: https://stackoverflow.com/a/50411366
[alpha to Heroku master...]: https://stackoverflow.com/a/2980050