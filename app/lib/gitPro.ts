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

  // Request for getting my repositories.
  const MyRepo = await octokit.request("GET /users/memorandumtk/repos");

  let name, url, description, lastUpdate;
  const projectList = [];
  // Regex for checking if the description includes 'FCC' or not.
  const descriptionRegex = /(FCC)/;
  for (let repo of MyRepo.data) {
    if (descriptionRegex.test(repo.description)) {
      name = repo.name;
      url = repo.html_url;
      description = repo.description;
      lastUpdate = new Date(repo.updated_at).toUTCString();
      let dateRegexp = /(.*)\s\d\d:/.exec(lastUpdate);
      let modifiedDate = dateRegexp ? dateRegexp[1] : null;
      projectList.push({ name, url, description, modifiedDate });
    }
  }
  return projectList;
}
