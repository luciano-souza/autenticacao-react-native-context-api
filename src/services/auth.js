export function signIn() {
  // console.log('sig');

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        token: 'ahdkjadhasjhdkajsdhkasjdh',
        user: {
          name: 'Diego',
          email: 'diego@example.com',
        },
      });
    }, 2000);
  });
}
