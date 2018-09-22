// https://github.com/facebook/create-react-app/issues/1765#issuecomment-285114194
export const ROUTES = {
  HOME_PATH: `${process.env.PUBLIC_URL}/`,
  USER_DETAIL: `${process.env.PUBLIC_URL}/user/:username/`,
  USER_REPOS_LIST: `${process.env.PUBLIC_URL}/user/:username/repos`,
  REPO_DETAIL: `${process.env.PUBLIC_URL}/user/:username/repos/:repoName`
};
