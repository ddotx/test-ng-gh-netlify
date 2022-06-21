exports.handler = async function (event, context) {
  console.log('---trigger event (dev)---',event)
  console.log('---trigger context (dev)---',context)
  return {
    statusCode: 200,
    body: JSON.stringify({ message: "deploy succeeded from netlify" }),
  };
}
