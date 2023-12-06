'use server'
import { Octokit } from "octokit";

export default async function getGitProject() {
  // Create a personal access token at https://github.com/settings/tokens/new?scopes=repo
  const octokit = new Octokit({
    auth: process.env.GITHUB_PAT,
  });

  // Compare: https://docs.github.com/en/rest/reference/users#get-the-authenticated-user
  const {
    data: { login },
  } = await octokit.rest.users.getAuthenticated();
  // console.log("Hello, %s", login);

  // const repos = await octokit.request("GET /users/memorandumtk/repos");
  // Request for getting starred repo
  const starredRepo = await octokit.request("GET /users/memorandumtk/starred");

  let name, url, description, lastUpdate;
  const projectList = [];
  // Regex for checking if the description includes 'portfolio' or not.
  // const regex = /(portfolio)/i;
  // Regex for checking if the starred repo is mine or not.
  const owerRegex = /(memorandumtk)/i;
  for (let repo of starredRepo.data) {
    if (owerRegex.test(repo.owner.login)) {
      name = repo.name;
      url = repo.html_url;
      description = repo.description;
      lastUpdate = new Date(repo.updated_at).toUTCString();
      let dateRegexp = /(.*)\s\d\d:/.exec(lastUpdate);
      console.log(dateRegexp ? dateRegexp[1] : null);
      let modifiedDate = dateRegexp ? dateRegexp[1] : null;
      projectList.push({ name, url, description, modifiedDate });
    }
  }
  // console.log(projectList)
  return projectList;
}
