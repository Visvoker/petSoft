export async function POST(request: Request) {
  const body = await request.text();
  console.log(body);

  // fulfill order

  // return 200 ok
  return Response.json(null, { status: 200 });
}
