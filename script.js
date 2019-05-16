fetch('https://api.github.com/repos/ethanboxx/git-backup/commits')
    .then(res => res.json())
    .then((out) => {
        var commit = out[0].commit;
        var commit_msg = commit.message;
        console.log('Output: ', commit);
        document.getElementById("commit-last").innerHTML = commit_msg;
    }).catch(err => console.error(err));