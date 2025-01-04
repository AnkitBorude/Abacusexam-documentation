import { ApiEndpoint } from "../models/apiinfo.model"
export const endpoints: ApiEndpoint[] =
[
   //0
    {
    url: '/api/v1/users/{userId}/posts',
        method: 'POST',
        description: 'Create a new post for a specific user',
        pathParams: [
          {
            name: 'userId',
            type: 'string',
            required: true,
            description: 'The unique identifier of the user'
          }
        ],
        queryParams: [
          {
            name: 'draft',
            type: 'boolean',
            required: false,
            description: 'Save post as draft if true'
          }
        ],
        headerParams: [
          {
            name: 'X-API-Key',
            type: 'string',
            required: true,
            description: 'Authentication API key'
          },
          {
            name: 'Content-Type',
            type: 'string',
            required: true,
            description: 'Must be application/json'
          }
        ],
        requestBody: {
          title: "My New Post",
          content: "Post content goes here...",
          tags: ["tech", "tutorial"],
          visibility: "public"
        },
        responseBody: {
          id: "post_123",
          title: "My New Post",
          content: "Post content goes here...",
          tags: ["tech", "tutorial"],
          visibility: "public",
          author: {
            id: "usr_456",
            username: "john_doe"
          },
          createdAt: "2025-01-03T12:00:00Z"
        },
        successCodes: [
          {
            code: 201,
            type: "Created",
            description: "Post created successfully"
          },
          {
            code: 202,
            type: "Accepted",
            description: "Post accepted and queued for processing"
          }
        ],
        errorCodes: [
          {
            code: 400,
            type: "Bad Request",
            description: "Invalid request body or parameters"
          },
          {
            code: 401,
            type: "Unauthorized",
            description: "Missing or invalid API key"
          },
          {
            code: 403,
            type: "Forbidden",
            description: "Not authorized to create posts for this user"
          },
          {
            code: 404,
            type: "Not Found",
            description: "User not found"
          }
]
    },
    {
      url: '/api/v1/users/',
          method: 'GET',
          description: 'get all users in the system',
          pathParams: [
            {
              name: 'userId',
              type: 'string',
              required: true,
              description: 'The unique identifier of the user'
            }
          ],
          queryParams: [
            {
              name: 'draft',
              type: 'boolean',
              required: false,
              description: 'Save post as draft if true'
            }
          ],
          headerParams: [
            {
              name: 'X-API-Key',
              type: 'string',
              required: true,
              description: 'Authentication API key'
            },
            {
              name: 'Content-Type',
              type: 'string',
              required: true,
              description: 'Must be application/json'
            }
          ],
          requestBody: {
            title: "My New Post",
            content: "Post content goes here...",
            tags: ["tech", "tutorial"],
            visibility: "public"
          },
          responseBody: {
            id: "post_123",
            title: "My New Post",
            content: "Post content goes here...",
            tags: ["tech", "tutorial"],
            visibility: "public",
            author: {
              id: "usr_456",
              username: "john_doe"
            },
            createdAt: "2025-01-03T12:00:00Z"
          },
          successCodes: [
            {
              code: 201,
              type: "Created",
              description: "Post created successfully"
            },
            {
              code: 202,
              type: "Accepted",
              description: "Post accepted and queued for processing"
            }
          ],
          errorCodes: [
            {
              code: 400,
              type: "Bad Request",
              description: "Invalid request body or parameters"
            },
            {
              code: 401,
              type: "Unauthorized",
              description: "Missing or invalid API key"
            },
            {
              code: 403,
              type: "Forbidden",
              description: "Not authorized to create posts for this user"
            },
            {
              code: 404,
              type: "Not Found",
              description: "User not found"
            }
  ]
    }
]