export class SecurityContext {
  constructor(public access_token: string,
              public expires_in: number,
              public refresh_token: string,
              public roles: string[],
              public token_type: string,
              public username: string) {
  }
}
