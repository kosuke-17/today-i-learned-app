import { Octokit } from 'octokit'

const octokit = new Octokit({
  auth: process.env.GITHUB_ACCESS_TOKEN,
})

const OWNER_NAME = 'kosuke-17'
const REPOSITORY_NAME = 'kosuke-17'
const PATH_NAME = 'TIL'

export async function getTILData() {
  try {
    const res = await octokit.request(
      'GET /repos/{owner}/{repo}/contents/{path}/2024/Roadmap.sh/Skill_Based/React',
      {
        owner: OWNER_NAME,
        repo: REPOSITORY_NAME,
        path: PATH_NAME,
      }
    )
    return res
  } catch (error) {
    throw error
  }
}
