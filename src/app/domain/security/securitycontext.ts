export class SecurityContext {
  constructor(public accessToken: string,
              public expires_in: number,
              public refreshToken: string,
              public roles: string[],
              public token_type: string,
              public username: string) {
  }
}
