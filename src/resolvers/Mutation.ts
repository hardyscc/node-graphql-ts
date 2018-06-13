export const Mutation = {
  register: (_, { email, password }: GQL.IRegisterOnMutationArguments) => {
    return email === password;
  }
};
