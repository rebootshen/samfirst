# samfirst
        clean = git-lfs clean -- %f
        smudge = git-lfs smudge -- %f
        required = true
        
        # based on: https://gist.github.com/intel352/9761288
        show-closest-branch = rev-parse --abbrev-ref HEAD
        # based on: http://stackoverflow.com/questions/3161204/find-the-parent-branch-of-a-git-branch
        show-closest-parent-branch = !"git show-branch -a --no-color 2> /dev/null | awk -F '[]^~[]' -v current_branch=`git show-closest-branch 2> /dev/null || true` 'BEGIN { rc=1 ; if ( length( current_branch ) == 0 ) { exit } } ( ( index( $1, \"*\" ) > 0 ) && ( length( $2 ) > 0 ) && ( $2 != current_branch ) ) { print $2 ; rc=0 ; exit } END { exit rc }'"
        # short versions
        cb = !git show-closest-branch
        pb = !git show-closest-parent-branch
　
        branchdate = for-each-ref --sort=committerdate refs/heads/ --format='%(authordate:short) %(color:red)%(objectname:short) %(color:yellow)%(refname:short)%(color:reset) (%(color:green)%(committerdate:relative)%(color:reset)) %(color:bold blue)%(authoremail)%(color:reset)%(authorname) '
                lg = log --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset' --abbrev-commit --date=relative
                lg-all = log --graph --all --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset' --abbrev-commit --date=relative
                slg = log --graph --simplify-by-decoration --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an> %ae %Creset ' --abbrev-commit --date=relative
                slg-all = log --graph --all --simplify-by-decoration --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an> %ae %Creset' --abbrev-commit --date=relative
