import { MemberEntity } from '../shared/models';
import { CONSTANT } from '../shared/constants/constants';

// Sync mock data API, inspired from:
// https://gist.github.com/coryhouse/fd6232f95f9d601158e4
class MemberAPI {
  // Just return a copy of the mock data
  getAllMembers(): Promise<MemberEntity[]> {
    const gitHubMembersUrl: string = CONSTANT.gitHubMembersUrl;

    return fetch(gitHubMembersUrl)
      .then(response => this.checkStatus(response))
      .then(response => this.parseJSON(response))
      .then(data => this.resolveMembers(data));
  }

  private checkStatus(response: Response): Promise<Response> {
    if (response.status >= 200 && response.status < 300) {
      return Promise.resolve(response);
    }
    throw new Error(response.statusText);
  }

  private parseJSON(response: Response): any {
    return response.json();
  }

  private resolveMembers(data: any): Promise<MemberEntity[]> {
    const members = data.map(gitHubMember => {
      const member: MemberEntity = {
        id: gitHubMember.id,
        login: gitHubMember.login,
        avatar_url: gitHubMember.avatar_url,
      };

      return member;
    });

    return Promise.resolve(members);
  }
}

export const memberAPI = new MemberAPI();
