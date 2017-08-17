module.exports = function(deployTarget) {
  var ENV = {
    git: {
      repo: 'git@github.com:workmanw/unload-relationships-bug.git',
      branch: 'gh-pages',
      worktreePath: '/tmp/unload-relationships-bug-deploy',
      commitMessage: 'Deployed %@'
    }
  };
  return ENV;
};
