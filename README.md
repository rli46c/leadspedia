# mernleadspedia
LeadsPedia in MERN

# Install and Run Project
    npm install
    npm client-insall
    npm run dev

## GitHub Commands:
1.) First Time - Clone Single Branch: 
    <!-- directory address [/your/folder] is optional -->
    
    git clone https://github.com/rli46c/mernleadspedia.git -b alpha --single-branch /your/folder

2.) First Time - Update Config
<!-- Add [--global] only if you want the same config for all repositories -->
    git config --global user.email "you@example.com"
    git config --global user.name "Your Name"

3.) Everytime - Add your changes and commit them
<!-- Here [.] or [all] can be used to add all files. You can also add specific files/folders -->
    
    git add .
    git commit -m "Message"

4.) Everytime - git status

5.) Everytime [As per status] - Pull Further Changes: git pull

6.) Everytime [As per status] - Push Further Changes: git push





    
## Link local Branch to Remote
<!-- Here "origin" is local branch name and "alpha" is remote branch name -->
### If you have not committed:
    git stash
    git checkout alpha
    git stash pop

### If you have committed and have not changed anything since:
    git log --oneline -n1 # this will give you the SHA
    git checkout alpha
    git merge ${commit-sha}

### If you have committed and then done extra work:
    git stash
    git log --oneline -n1 # this will give you the SHA
    git checkout alpha
    git merge ${commit-sha}
    git stash pop

### Push to Link
    git push origin HEAD:origin/alpha