import { S3Client } from "@aws-sdk/client-s3";
import { SQSClient } from "@aws-sdk/client-sqs";
import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient } from "@aws-sdk/lib-dynamodb";

const region = "us-east-1";

const credentials = {
  accessKeyId: process.env.APP_AWS_ACCESS_KEY_ID || "AKIAX3IAEMPKSQW6D4H5",
  secretAccessKey: process.env.APP_AWS_SECRET_ACCESS_KEY || "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",
};

export const s3 = new S3Client({ region, credentials });
export const sqs = new SQSClient({ region, credentials });
export const ddb = DynamoDBDocumentClient.from(new DynamoDBClient({ region, credentials }));

export const BUCKET = process.env.S3_BUCKET || "image-processor-539555554261";
export const QUEUE_URL = process.env.SQS_QUEUE_URL || "https://sqs.us-east-1.amazonaws.com/539555554261/image-prcessor-manual";
export const TABLE = process.env.DYNAMODB_TABLE || "image-processor-jobs-manual";