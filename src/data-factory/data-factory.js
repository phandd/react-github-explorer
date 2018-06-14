const TOKEN = '77678c846b25752a05319f989a384879ce9f214e';

const api = (url) => {
  return fetch(url, {
    headers: {
      Authorization: `token ${TOKEN}`,
    },
  })
    .then(response => response.json())
    .catch(err => {
      throw new Error(`Cannot get data from ${url}: ${err}`)
    })
};

export const factory = {
  getRandomUser() {
    return api('https://api.github.com/search/users?q=type:user&page=1&per_page=1')
      .then(data => data.items[0])
  },
  getUserProfile(username) {
    return api(`https://api.github.com/users/${username}`);
  },
  getUserRepoList(username) {
    return api(`https://api.github.com/users/${username}/repos`);
  },
  searchUserRepo(username, query) {
    return api(`https://api.github.com/search/repositories?q=${query}+user:${username}+fork:true`);
  },
  getRepoDetail(username, repo) {
    return api(`https://api.github.com/repos/${username}/${repo}`);
  },
  getRepoReadme(username, repo) {
    return api(`https://api.github.com/repos/${username}/${repo}/readme`);
  },
  getRepoContent(username, repo) {
    return api(`https://api.github.com/repos/${username}/${repo}/content`);
  }
};