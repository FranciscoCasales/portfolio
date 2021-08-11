const validationMap = new Map([
  [
    '/auth/sign-up@POST',
    (body) => {
      return !!body.invitationCode && !!body.username && !!body.password;
    },
  ],
]);
