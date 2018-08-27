const TOKEN = '77678c846b25752a05319f989a384879ce9f214e';

const api = (url) => {
  return fetch(url, {
    headers: {
      Authorization: `token ${TOKEN}`,
    },
  })
    .then(response => response.json())
};

export const factory = {
  getRandomUser() {
    return api('https://api.github.com/search/users?q=type:user&page=1&per_page=1');
  },
  getUserProfile(username) {
    return api(`https://api.github.com/users/${username}`);
  },
  getUserRepoList(username) {
    return api(`https://api.github.com/users/${username}/repos`);
  },
  getUserPopularRepos(username) {
    return api(`https://api.github.com/search/repositories?q=user:${username}&sort=stars&page=1&per_page=5`);
  },
  searchUserRepo(username, query){
    return api(`https://api.github.com/search/repositories?q=${query}+user:${username}+fork:true`);
  },
  getRepoDetail(username, repo){
    return api(`https://api.github.com/repos/${username}/${repo}`);
  },
  getRepoReadme(username, repo){
    return api(`https://api.github.com/repos/${username}/${repo}/readme`);
  },
  getRepoDirs(username, repo){
    return api(`https://api.github.com/repos/${username}/${repo}/contents`);
  },
  getRepoContributors(username, repo) {
    return api(`https://api.github.com/repos/${username}/${repo}/contributors`);
  },
  getRepoLanguages(username, repo) {
    return api(`https://api.github.com/repos/${username}/${repo}/languages`);
  },
  searchUser(query) {
    return api('https://api.github.com/legacy/user/search/' +
      `${query || Math.random().toString(36).split('')[2]}?sort:followers`);
  }
};