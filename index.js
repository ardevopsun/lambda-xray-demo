const AWSXRay = require('aws-xray-sdk-core');
const AWS = AWSXRay.captureAWS(require('aws-sdk'));

exports.handler = async (event) => {
    const segment = AWSXRay.getSegment(); // Root segment
    const subsegment = segment.addNewSubsegment('custom-subsegment');

    // Simulate a process or downstream call
    await new Promise(resolve => setTimeout(resolve, 100));

    subsegment.close();
    return {
        statusCode: 200,
        body: JSON.stringify({ message: 'X-Ray Tracing Enabled in Lambda!' }),
    };
};
