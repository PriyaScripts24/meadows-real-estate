export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const token = body.token;

  const secretKey = "6LeT-0ErAAAAAAP8nn2DDYmNhv4vLTkvCIqBQAyQ";

  const response = await $fetch(
    "https://www.google.com/recaptcha/api/siteverify",
    {
      method: "POST",
      body: new URLSearchParams({
        secret: secretKey,
        response: token,
      }),
    }
  );

  return response;
});
