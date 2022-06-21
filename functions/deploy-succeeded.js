exports.handler = async function (event, context) {
  console.log('---trigger event---',event)
  console.log('---trigger context---',context)
  return {
    statusCode: 200,
    body: JSON.stringify({ message: "deploy succeeded from netlify" }),
  };
}
