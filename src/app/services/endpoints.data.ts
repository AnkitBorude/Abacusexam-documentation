import { ApiEndpoint } from "../models/apiinfo.model"
export const endpoints: ApiEndpoint[] =
[
   //student
    
    {
      "url": "/api/v1/student/login",
      "method": "POST",
      "description": "Login a student using username and password",
      "pathParams": [],
      "queryParams": [],
      "headerParams": [
          {
              "name": "Content-Type",
              "type": "string",
              "required": true,
              "description": "Must be application/json"
          }
      ],
      "requestBody": {
          "username": "student_username",
          "password": "student_password"
      },
      "responseBody": {
          "data": {
              "message": "Login Successful",
              "token": "<AccessToken>",
              "refreshToken": "<RefreshToken>"
          },
          "statusCode": 200,
          "success": true
      },
      "successCodes": [
          {
              "code": 200,
              "type": "OK",
              "description": "Login successful"
          }
      ],
      "errorCodes": [
          {
              "code": 400,
              "type": "Bad Request",
              "description": "Invalid request body or parameters"
          },
          {
              "code": 404,
              "type": "Not Found",
              "description": "Student not found"
          },
          {
              "code": 401,
              "type": "Unauthorized",
              "description": "Wrong password"
          }
      ]
    },
    {
      "url": "/api/v1/student/register",
      "method": "POST",
      "description": "Register a new student",
      "pathParams": [],
      "queryParams": [],
      "headerParams": [
          {
              "name": "Content-Type",
              "type": "string",
              "required": true,
              "description": "Must be application/json"
          }
      ],
      "requestBody": {
          "fullname": "John Doe",
          "username": "johndoe123",
          "sclass": "10",
          "level": "1",
          "email": "johndoe@example.com",
          "phone_no": "9876543210",
          "password": "SecurePass@123"
      },
      "responseBody": {
          "data": "Student Registration Successful",
          "statusCode": 201,
          "success": true
      },
      "successCodes": [
          {
              "code": 201,
              "type": "Created",
              "description": "Student registered successfully"
          }
      ],
      "errorCodes": [
          {
              "code": 400,
              "type": "Bad Request",
              "description": "Invalid request body or parameters"
          },
          {
              "code": 409,
              "type": "Conflict",
              "description": "Username or email already exists"
          }
      ]
    },
    {
      "url": "/api/v1/student/token",
      "method": "POST",
      "description": "Regenerate an access token for a student using a valid refresh token.",
      "pathParams": [],
      "queryParams": [],
      "headerParams": [],
      "requestBody": {
          "refreshToken": "{{student_refreshToken}}"
      },
      "responseBody": {
          "data": {
              "message": "New token generated successfully..",
              "token": "<<accessToken>>"
          },
          "success": true
      },
      "successCodes": [
          {
              "code": 200,
              "type": "OK",
              "description": "New access token generated successfully"
          }
      ],
      "errorCodes": [
          {
              "code": 400,
              "type": "Bad Request",
              "description": "Invalid or missing request body"
          },
          {
              "code": 404,
              "type": "Not Found",
              "description": "Student with the given refresh token is deleted, does not exist, or token does not match"
          },
          {
              "code": 401,
              "type": "Unauthorized",
              "description": "Refresh token is invalid or expired"
          }
      ]
    },
    {
      "url": "/api/v1/student/me",
      "method": "GET",
      "description": "Fetch the currently logged-in student details",
      "pathParams": [],
      "queryParams": [],
      "headerParams": [
          {
              "name": "Authorization",
              "type": "string",
              "required": true,
              "description": "Bearer <AccessToken>"
          }
      ],
      "requestBody": {},
      "responseBody": {
          "data": {
              "fullname": "Jane Doe",
              "email": "janedoe@example.com",
              "level": "2",
              "sclass": "5",
              "phone_no": "9876543210",
              "student_id": "sng2gjpB"
          },
          "statusCode": 200,
          "success": true
      },
      "successCodes": [
          {
              "code": 200,
              "type": "OK",
              "description": "Student details fetched successfully"
          }
      ],
      "errorCodes": [
          {
              "code": 403,
              "type": "Forbidden",
              "description": "Admin token provided; only student tokens are allowed"
          },
          {
              "code": 404,
              "type": "Not Found",
              "description": "Student not found"
          },
          {
              "code": 401,
              "type": "Unauthorized",
              "description": "Token is expired or invalid"
          }
      ]
    },
    {
      "url": "/api/v1/student",
      "method": "GET",
      "description": "Fetch all students, accessible only by an admin",
      "pathParams": [],
      "queryParams": [
          {
              "name": "class",
              "type": "string",
              "required": false,
              "description": "Filter by students' class"
          },
          {
              "name": "level",
              "type": "string",
              "required": false,
              "description": "Filter by students' current abacus level"
          },
          {
              "name": "name",
              "type": "string",
              "required": false,
              "description": "Filter by partial match of students' name"
          }
      ],
      "headerParams": [
          {
              "name": "Authorization",
              "type": "string",
              "required": true,
              "description": "Bearer <AccessToken> (Admin authorization token)"
          }
      ],
      "requestBody": {},
      "responseBody": {
          "data": [
              {
                  "fullname": "John Doe",
                  "email": "johndoe@example.com",
                  "level": "3",
                  "sclass": "6",
                  "phone_no": "9876543210",
                  "deletedAt": null,
                  "is_deleted": false,
                  "student_id": "stu12345"
              },
              {
                  "fullname": "Jane Smith",
                  "email": "janesmith@example.com",
                  "level": "4",
                  "sclass": "8",
                  "phone_no": "9123456789",
                  "deletedAt": null,
                  "is_deleted": false,
                  "student_id": "stu67890"
              }
          ],
          "statusCode": 200,
          "success": true
      },
      "successCodes": [
          {
              "code": 200,
              "type": "OK",
              "description": "Students fetched successfully"
          }
      ],
      "errorCodes": [
          {
              "code": 404,
              "type": "Not Found",
              "description": "No students found in the system"
          },
          {
              "code": 400,
              "type": "Bad Request",
              "description": "Query parameter validation error"
          },
          {
              "code": 403,
              "type": "Forbidden",
              "description": "Student token provided; only admin tokens are allowed"
          },
          {
              "code": 401,
              "type": "Unauthorized",
              "description": "Token is expired or invalid"
          }
      ]
    },
    {
      "url": "/api/v1/student/exam/assessment/analytics",
      "method": "GET",
      "description": "Fetch the logged-in student's assessment exam analytics",
      "pathParams": [],
      "queryParams": [],
      "headerParams": [
          {
              "name": "Authorization",
              "type": "string",
              "required": true,
              "description": "Bearer <AccessToken> (Student authorization token)"
          }
      ],
      "requestBody": {},
      "responseBody": {
          "data": {
              "student": {
                  "name": "John Doe",
                  "level": "3",
                  "class": "8",
                  "email": "johndoe@example.com",
                  "phone_no": "9876543210",
                  "deleted": false,
                  "deletedTime": null
              },
              "analytics": {
                  "exams": [
                      {
                          "examId": "abc12345",
                          "title": "Math Assessment Level 3",
                          "level": "3",
                          "totalMarks": 25,
                          "duration": 100,
                          "score": 18,
                          "durationTaken": 85,
                          "scorePercentage": 72,
                          "timeUtilizationPercentage": 85
                      }
                  ],
                  "totalAssessmentExams": 1,
                  "avgScorePercentage": 72,
                  "avgTimeUtilizationPercentage": 85,
                  "topExam": {
                      "examId": "abc12345",
                      "title": "Math Assessment Level 3",
                      "scorePercentage": 72
                  },
                  "lowestExam": {
                      "examId": "abc12345",
                      "title": "Math Assessment Level 3",
                      "scorePercentage": 72
                  },
                  "overallScore": {
                      "min": 18,
                      "max": 18,
                      "avg": 18
                  },
                  "overallDuration": {
                      "min": 85,
                      "max": 85,
                      "avg": 85
                  }
              }
          },
          "statusCode": 200,
          "success": true
      },
      "successCodes": [
          {
              "code": 200,
              "type": "OK",
              "description": "Assessment exam analytics fetched successfully"
          }
      ],
      "errorCodes": [
          {
              "code": 404,
              "type": "Not Found",
              "description": "Student not found"
          },
          {
              "code": 403,
              "type": "Forbidden",
              "description": "Admin token provided; only student tokens are allowed"
          }
      ]
    },
    {
      "url": "/api/v1/student/exam/practice/analytics",
      "method": "GET",
      "description": "Fetch the logged-in student's practice exam analytics",
      "pathParams": [],
      "queryParams": [],
      "headerParams": [
          {
              "name": "Authorization",
              "type": "string",
              "required": true,
              "description": "Bearer <AccessToken> (Student authorization token)"
          }
      ],
      "requestBody": {},
      "responseBody": {
          "data": {
              "student": {
                  "name": "Ankit Ravsaheb Borude",
                  "level": "2",
                  "class": "5",
                  "email": "ankitborude@123",
                  "phone_no": "9011262757",
                  "deleted": false,
                  "deletedTime": null
              },
              "analytics": {
                  "exams": [
                      {
                          "examId": "eiQigL93",
                          "title": "Daily Practice Test",
                          "level": "2",
                          "totalMarks": 20,
                          "totalAttempts": 3,
                          "score": {"min": 10, "max": 10, "avg": 10},
                          "time_taken": {"min": 160, "max": 160, "avg": 160},
                          "attempts": [
                              {
                                  "score": 10,
                                  "durationTaken": 160,
                                  "scorePercentage": 50,
                                  "date": "2024-09-29T09:18:04.000Z",
                                  "timeUtilizationPercentage": 133.33
                              }
                          ]
                      },
                      {
                          "examId": "evgL5EIc",
                          "title": "Daily Abacus Practice",
                          "level": "2",
                          "totalMarks": 20,
                          "totalAttempts": 7,
                          "score": {"min": 2, "max": 10, "avg": 5.428571428571429},
                          "time_taken": {"min": 1, "max": 2, "avg": 1.1428571428571428},
                          "attempts": [
                              {
                                  "score": 2,
                                  "durationTaken": 1,
                                  "scorePercentage": 10,
                                  "date": "2024-10-14T06:07:31.656Z",
                                  "timeUtilizationPercentage": 0.83
                              }
                          ]
                      }
                  ],
                  "totalPracticeExams": 3,
                  "overallScore": {"min": 2, "max": 16, "avg": 10.48},
                  "overallDuration": {"min": 1, "max": 160, "avg": 54.71}
              }
          },
          "statusCode": 200,
          "success": true
      },
      "successCodes": [
          {
              "code": 200,
              "type": "OK",
              "description": "Student's practice exam analytics fetched successfully"
          }
      ],
      "errorCodes": [
          {
              "code": 404,
              "type": "Not Found",
              "description": "Student not found"
          },
          {
              "code": 403,
              "type": "Forbidden",
              "description": "Admin token provided; only student tokens are allowed"
          }
      ]
    },
    {
      "url": "/api/v1/{studentId}/exam/assessment/analytics",
      "method": "GET",
      "description": "Fetch the assessment exam analytics for a specific student by student ID",
      "pathParams": [
          {
              "name": "studentId",
              "type": "string",
              "required": true,
              "description": "The unique identifier of the student"
          }
      ],
      "queryParams": [],
      "headerParams": [
          {
              "name": "Authorization",
              "type": "string",
              "required": true,
              "description": "Bearer <AccessToken> (Admin authorization token)"
          }
      ],
      "requestBody": {},
      "responseBody": {
          "data": {
              "student": {
                  "name": "John Doe",
                  "level": "3",
                  "class": "8",
                  "email": "johndoe@example.com",
                  "phone_no": "9876543210",
                  "deleted": false,
                  "deletedTime": null
              },
              "analytics": {
                  "exams": [
                      {
                          "examId": "abc12345",
                          "title": "Math Assessment Level 3",
                          "level": "3",
                          "totalMarks": 25,
                          "duration": 100,
                          "score": 18,
                          "durationTaken": 85,
                          "scorePercentage": 72,
                          "timeUtilizationPercentage": 85
                      }
                  ],
                  "totalAssessmentExams": 1,
                  "avgScorePercentage": 72,
                  "avgTimeUtilizationPercentage": 85,
                  "topExam": {
                      "examId": "abc12345",
                      "title": "Math Assessment Level 3",
                      "scorePercentage": 72
                  },
                  "lowestExam": {
                      "examId": "abc12345",
                      "title": "Math Assessment Level 3",
                      "scorePercentage": 72
                  },
                  "overallScore": {
                      "min": 18,
                      "max": 18,
                      "avg": 18
                  },
                  "overallDuration": {
                      "min": 85,
                      "max": 85,
                      "avg": 85
                  }
              }
          },
          "statusCode": 200,
          "success": true
      },
      "successCodes": [
          {
              "code": 200,
              "type": "OK",
              "description": "Assessment exam analytics fetched successfully"
          }
      ],
      "errorCodes": [
          {
              "code": 404,
              "type": "Not Found",
              "description": "Student not found"
          },
          {
              "code": 403,
              "type": "Forbidden",
              "description": "Student token provided; only admin tokens are allowed"
          }
      ]
    },
    {
      "url": "/api/v1/{studentId}/exam/practice/analytics",
      "method": "GET",
      "description": "Fetch the practice exam analytics for a specific student by student ID",
      "pathParams": [
          {
              "name": "studentId",
              "type": "string",
              "required": true,
              "description": "The unique identifier of the student"
          }
      ],
      "queryParams": [],
      "headerParams": [
          {
              "name": "Authorization",
              "type": "string",
              "required": true,
              "description": "Bearer <AccessToken> (Admin authorization token)"
          }
      ],
      "requestBody": {},
      "responseBody": {
          "data": {
              "student": {
                  "name": "John Doe",
                  "level": "3",
                  "class": "8",
                  "email": "johndoe@example.com",
                  "phone_no": "9876543210",
                  "deleted": false,
                  "deletedTime": null
              },
              "analytics": {
                  "exams": [
                      {
                          "examId": "xyz98765",
                          "title": "Daily Practice Test",
                          "level": "3",
                          "totalMarks": 30,
                          "totalAttempts": 4,
                          "score": {
                              "min": 15,
                              "max": 25,
                              "avg": 20
                          },
                          "time_taken": {
                              "min": 120,
                              "max": 180,
                              "avg": 150
                          },
                          "attempts": [
                              {
                                  "score": 20,
                                  "durationTaken": 150,
                                  "scorePercentage": 66.67,
                                  "date": "2024-10-01T09:00:00.000Z",
                                  "timeUtilizationPercentage": 75
                              }
                          ]
                      },
                      {
                          "examId": "abc54321",
                          "title": "Weekly Practice Exam",
                          "level": "3",
                          "totalMarks": 40,
                          "totalAttempts": 5,
                          "score": {
                              "min": 20,
                              "max": 35,
                              "avg": 30
                          },
                          "time_taken": {
                              "min": 200,
                              "max": 250,
                              "avg": 225
                          },
                          "attempts": [
                              {
                                  "score": 35,
                                  "durationTaken": 250,
                                  "scorePercentage": 87.5,
                                  "date": "2024-10-15T10:30:00.000Z",
                                  "timeUtilizationPercentage": 90
                              }
                          ]
                      }
                  ],
                  "totalPracticeExams": 2,
                  "overallScore": {
                      "min": 15,
                      "max": 35,
                      "avg": 25
                  },
                  "overallDuration": {
                      "min": 120,
                      "max": 250,
                      "avg": 187.5
                  }
              }
          },
          "statusCode": 200,
          "success": true
      },
      "successCodes": [
          {
              "code": 200,
              "type": "OK",
              "description": "Practice exam analytics fetched successfully"
          }
      ],
      "errorCodes": [
          {
              "code": 404,
              "type": "Not Found",
              "description": "Student not found"
          },
          {
              "code": 403,
              "type": "Forbidden",
              "description": "Student token provided; only admin tokens are allowed"
          }
      ]
    },
    {
      "url": "/api/v1/student",
      "method": "PATCH",
      "description": "Update specific attributes of the logged-in student's profile",
      "pathParams": [],
      "queryParams": [],
      "headerParams": [
          {
              "name": "Authorization",
              "type": "string",
              "required": true,
              "description": "Bearer <AccessToken> (Student authorization token)"
          }
      ],
      "requestBody": {
          "fullname": "John Doe"
      },
      "responseBody": {
          "data": "Student fullname attribute has been updated Successfully",
          "statusCode": 200,
          "success": true
      },
      "successCodes": [
          {
              "code": 200,
              "type": "OK",
              "description": "Attribute updated successfully"
          }
      ],
      "errorCodes": [
          {
              "code": 400,
              "type": "Bad Request",
              "description": "Validation error in the request body"
          },
          {
              "code": 404,
              "type": "Not Found",
              "description": "Student not found"
          },
          {
              "code": 403,
              "type": "Forbidden",
              "description": "Attempted to update forbidden attributes"
          }
      ]
    },
    {
      "url": "/api/v1/student/{studentId}",
      "method": "PATCH",
      "description": "Update specific attributes of a student by admin",
      "pathParams": [
          {
              "name": "studentId",
              "type": "string",
              "required": true,
              "description": "The unique identifier of the student"
          }
      ],
      "queryParams": [],
      "headerParams": [
          {
              "name": "Authorization",
              "type": "string",
              "required": true,
              "description": "Bearer <AccessToken> (Admin authorization token)"
          }
      ],
      "requestBody": {
          "fullname": "John Doe"
      },
      "responseBody": {
          "data": "Student fullname attribute has been updated Successfully",
          "statusCode": 200,
          "success": true
      },
      "successCodes": [
          {
              "code": 200,
              "type": "OK",
              "description": "Attribute updated successfully"
          }
      ],
      "errorCodes": [
          {
              "code": 400,
              "type": "Bad Request",
              "description": "Validation error in the request body"
          },
          {
              "code": 404,
              "type": "Not Found",
              "description": "Student not found"
          },
          {
              "code": 403,
              "type": "Forbidden",
              "description": "Attempted to update forbidden attributes"
          }
      ]
    },
    {
      "url": "/api/v1/student/{studentId}",
      "method": "DELETE",
      "description": "Delete a student by admin. Performs soft delete if data exists; otherwise, deletes completely.",
      "pathParams": [
          {
              "name": "studentId",
              "type": "string",
              "required": true,
              "description": "The unique identifier of the student"
          }
      ],
      "queryParams": [],
      "headerParams": [
          {
              "name": "Authorization",
              "type": "string",
              "required": true,
              "description": "Bearer <AccessToken> (Admin authorization token)"
          }
      ],
      "requestBody": null,
      "responseBody": {
          "data": "Student deleted Successfully",
          "statusCode": 200,
          "success": true
      },
      "successCodes": [
          {
              "code": 200,
              "type": "OK",
              "description": "Student successfully deleted (soft delete or hard delete based on existing data)"
          }
      ],
      "errorCodes": [
          {
              "code": 404,
              "type": "Not Found",
              "description": "Student not found"
          },
          {
              "code": 401,
              "type": "Unauthorized",
              "description": "Invalid, expired, or missing admin token"
          }
      ]
    },
    {
      "url": "/api/v1/student/{studentId}/clear",
      "method": "DELETE",
      "description": "Delete all results of a student and then delete the student by admin.",
      "pathParams": [
          {
              "name": "studentId",
              "type": "string",
              "required": true,
              "description": "The unique identifier of the student"
          }
      ],
      "queryParams": [],
      "headerParams": [
          {
              "name": "Authorization",
              "type": "string",
              "required": true,
              "description": "Bearer <AccessToken> (Admin authorization token)"
          }
      ],
      "requestBody": null,
      "responseBody": {
          "data": "Student results cleared and student deleted successfully",
          "statusCode": 200,
          "success": true
      },
      "successCodes": [
          {
              "code": 200,
              "type": "OK",
              "description": "All student results deleted, and the student successfully deleted"
          }
      ],
      "errorCodes": [
          {
              "code": 404,
              "type": "Not Found",
              "description": "Student not found or no results to clear"
          },
          {
              "code": 401,
              "type": "Unauthorized",
              "description": "Invalid, expired, or missing admin token"
          }
      ]
    },
    
    //admin

    {
        "url": "/api/v1/admin/login",
        "method": "POST",
        "description": "Login an admin using username and password",
        "pathParams": [],
        "queryParams": [],
        "headerParams": [
            {
                "name": "Content-Type",
                "type": "string",
                "required": true,
                "description": "Must be application/json"
            }
        ],
        "requestBody": {
            "username": "admin_username",
            "password": "admin_password"
        },
        "responseBody": {
            "data": {
                "message": "Login Successful",
                "token": "<AccessToken>",
                "refreshToken": "<RefreshToken>"
            },
            "statusCode": 200,
            "success": true
        },
        "successCodes": [
            {
                "code": 200,
                "type": "OK",
                "description": "Login successful"
            }
        ],
        "errorCodes": [
            {
                "code": 400,
                "type": "Bad Request",
                "description": "Invalid request body or parameters"
            },
            {
                "code": 404,
                "type": "Not Found",
                "description": "Admin not found"
            },
            {
                "code": 401,
                "type": "Unauthorized",
                "description": "Wrong password"
            }
        ]
    },
    {
        "url": "/api/v1/admin/register",
        "method": "POST",
        "description": "Register a new admin account",
        "headerParams": [
            {
                "name": "Content-Type",
                "type": "string",
                "required": true,
                "description": "Must be application/json"
            }
        ],
        "requestBody": {
            "fullname": "John Doe",
            "username": "johndoe123",
            "email": "johndoe@example.com",
            "password": "Password123!"
        },
        "responseBody": {
            "data": "Admin Registration Successful",
            "statusCode": 201,
            "success": true
        },
        "successCodes": [
            {
                "code": 201,
                "type": "Created",
                "description": "Admin registered successfully"
            }
        ],
        "errorCodes": [
            {
                "code": 400,
                "type": "Bad Request",
                "description": "Request body validation error"
            },
            {
                "code": 409,
                "type": "Conflict",
                "description": "Username or email already exists"
            }
        ]
    },
    {
        "url": "/api/v1/admin/token",
        "method": "POST",
        "description": "Regenerate an access token using a valid refresh token for the admin.",
        "headerParams": [
            {
                "name": "Content-Type",
                "type": "string",
                "required": true,
                "description": "Must be application/json"
            }
        ],
        "requestBody": {
            "refreshToken": "{{admin_refreshToken}}"
        },
        "responseBody": {
            "data": {
                "message": "New token generated successfully..",
                "token": "<<accessToken>>"
            },
            "success": true
        },
        "successCodes": [
            {
                "code": 200,
                "type": "OK",
                "description": "New access token generated successfully"
            }
        ],
        "errorCodes": [
            {
                "code": 400,
                "type": "Bad Request",
                "description": "Invalid request body or missing refresh token"
            },
            {
                "code": 404,
                "type": "Not Found",
                "description": "Admin with the given refresh token does not exist, has been deleted, or token does not match"
            },
            {
                "code": 401,
                "type": "Unauthorized",
                "description": "Refresh token is invalid or expired"
            }
        ]
    },
    {
        "url": "/api/v1/admin/me",
        "method": "GET",
        "description": "Fetch the currently logged-in admin details",
        "pathParams": [],
        "queryParams": [],
        "headerParams": [
            {
                "name": "Authorization",
                "type": "string",
                "required": true,
                "description": "Admin Token in format 'Bearer <AccessToken>'"
            }
        ],
        "requestBody": {},
        "responseBody": {
            "data": {
                "fullname": "Ankit Ravsaheb Borude",
                "email": "ankitborude21.12@gmail.com",
                "admin_id": "aRfz61BO"
            },
            "statusCode": 200,
            "success": true
        },
        "successCodes": [
            {
                "code": 200,
                "type": "OK",
                "description": "Admin details fetched successfully"
            }
        ],
        "errorCodes": [
            {
                "code": 401,
                "type": "Unauthorized",
                "description": "Token is invalid or expired"
            }
        ]
    },
    {
        "url": "/api/v1/admin",
        "method": "PATCH",
        "description": "Update specific attributes of the currently logged-in admin. Admin token is required, and access to update attributes is based on the field access matrix.",
        "headerParams": [
            {
                "name": "Authorization",
                "type": "string",
                "required": true,
                "description": "Admin token in the format 'Bearer <AccessToken>'"
            }
        ],
        "requestBody": {
            "fullname": "John Doe"
        },
        "responseBody": {
            "data": "Admin fullname attributes have been updated Successfully",
            "statusCode": 200,
            "success": true
        },
        "successCodes": [
            {
                "code": 200,
                "type": "OK",
                "description": "Attributes updated successfully"
            }
        ],
        "errorCodes": [
            {
                "code": 400,
                "type": "Bad Request",
                "description": "Request body validation error"
            },
            {
                "code": 404,
                "type": "Not Found",
                "description": "Admin not found in the system"
            },
            {
                "code": 401,
                "type": "Unauthorized",
                "description": "Attempt to update forbidden attributes or invalid/expired token"
            }
        ]
    },
    {
        "url": "/api/v1/admin",
        "method": "DELETE",
        "description": "Delete the current admin account. Performs soft delete if exams with results exist; otherwise, performs hard delete.",
        "headerParams": [
            {
                "name": "Authorization",
                "type": "string",
                "required": true,
                "description": "Admin token in the format 'Bearer <AccessToken>'"
            }
        ],
        "requestBody": {},
        "responseBody": {
            "data": "Admin deleted Successfully",
            "statusCode": 200,
            "success": true
        },
        "successCodes": [
            {
                "code": 200,
                "type": "OK",
                "description": "Admin deleted successfully"
            }
        ],
        "errorCodes": [
            {
                "code": 404,
                "type": "Not Found",
                "description": "Admin not found in the system"
            },
            {
                "code": 401,
                "type": "Unauthorized",
                "description": "Invalid, expired, or missing admin token"
            }
        ]
    },
    //exam
    {
        "url": "/api/v1/exam",
        "method": "POST",
        "description": "Create a new exam with automatically generated questions. Admin token is required.",
        "headerParams": [
            {
                "name": "Authorization",
                "type": "string",
                "required": true,
                "description": "Bearer <AccessToken>"
            },
            {
                "name": "Content-Type",
                "type": "string",
                "required": true,
                "description": "Must be application/json"
            }
        ],
        "requestBody": {
            "maxTerms": "3",
            "total_questions": "10",
            "operators": ["+", "-"],
            "maxNumber": "150",
            "minNumber": "30",
            "is_active": true,
            "total_marks_per_question": 2,
            "level": 10,
            "isSingleAttempt": true,
            "duration": 360,
            "title": "Demo exam"
        },
        "responseBody": {
            "data": "Exam Created Successfully",
            "statusCode": 201,
            "success": true
        },
        "successCodes": [
            {
                "code": 201,
                "type": "Created",
                "description": "Exam created successfully"
            }
        ],
        "errorCodes": [
            {
                "code": 400,
                "type": "Bad Request",
                "description": "Request body validation failed"
            },
            {
                "code": 403,
                "type": "Forbidden",
                "description": "Access denied: Only admins are allowed to create exams"
            },
            {
                "code": 401,
                "type": "Unauthorized",
                "description": "Invalid or expired token"
            }
        ]
    },
    {
        "url": "/api/v1/exam/{examId}/activate",
        "method": "PATCH",
        "description": "Activate an exam by providing its ID. Only the admin who owns the exam can perform this action.",
        "pathParams": [
            {
                "name": "examId",
                "type": "string",
                "required": true,
                "description": "The unique identifier of the exam to be activated."
            }
        ],
        "headerParams": [
            {
                "name": "Authorization",
                "type": "string",
                "required": true,
                "description": "Bearer token for admin authorization."
            }
        ],
        "requestBody": null,
        "responseBody": {
            "data": "Exam Activated Successfully",
            "statusCode": 200,
            "success": true
        },
        "successCodes": [
            {
                "code": 200,
                "type": "OK",
                "description": "Exam has been activated successfully."
            }
        ],
        "errorCodes": [
            {
                "code": 400,
                "type": "Bad Request",
                "description": "Invalid exam ID or request validation error."
            },
            {
                "code": 404,
                "type": "Not Found",
                "description": "The specified exam was not found."
            },
            {
                "code": 403,
                "type": "Forbidden",
                "description": "Attempt to activate an exam owned by another admin."
            }
        ]
    },
    {
        "url": "/api/v1/exam/{examId}/deactivate",
        "method": "PATCH",
        "description": "Deactivate an exam by providing its ID. Only the admin who owns the exam can perform this action.",
        "pathParams": [
            {
                "name": "examId",
                "type": "string",
                "required": true,
                "description": "The unique identifier of the exam to be deactivated."
            }
        ],
        "headerParams": [
            {
                "name": "Authorization",
                "type": "string",
                "required": true,
                "description": "Bearer token for admin authorization."
            }
        ],
        "requestBody": null,
        "responseBody": {
            "data": "Exam Deactivated Successfully",
            "statusCode": 200,
            "success": true
        },
        "successCodes": [
            {
                "code": 200,
                "type": "OK",
                "description": "Exam has been deactivated successfully."
            }
        ],
        "errorCodes": [
            {
                "code": 400,
                "type": "Bad Request",
                "description": "Invalid exam ID or request validation error."
            },
            {
                "code": 404,
                "type": "Not Found",
                "description": "The specified exam was not found."
            },
            {
                "code": 403,
                "type": "Forbidden",
                "description": "Attempt to deactivate an exam owned by another admin."
            }
        ]
    },
    {
        "url": "/api/v1/exam",
        "method": "GET",
        "description": "Retrieve exams accessible to the requesting authority (admin or student). Admins get exams they created; students get exams matching their level.",
        "queryParams": [
            {
                "name": "title",
                "type": "string",
                "required": false,
                "description": "Filter exams by titles starting with the given string."
            },
            {
                "name": "level",
                "type": "number",
                "required": false,
                "description": "Filter exams by the specified level."
            },
            {
                "name": "is_active",
                "type": "boolean",
                "required": false,
                "description": "Filter exams based on their active status."
            },
            {
                "name": "isSingleAttempt",
                "type": "boolean",
                "required": false,
                "description": "Filter exams by single/multi-attempt type. Accepts true, 1, yes for single attempt; false, 0, no for multi-attempt."
            },
            {
                "name": "type",
                "type": "string",
                "required": false,
                "description": "Filter exams by type (assessment or practice)."
            },
            {
                "name": "is_deleted",
                "type": "boolean",
                "required": false,
                "description": "Filter exams based on their deleted status."
            }
        ],
        "headerParams": [
            {
                "name": "Authorization",
                "type": "string",
                "required": true,
                "description": "Bearer token for authentication (admin or student)."
            }
        ],
        "requestBody": null,
        "responseBody": {
            "admin": {
                "data": [
                    {
                        "title": "Daily Abacus practice",
                        "duration": 120,
                        "level": "2",
                        "total_questions": 10,
                        "total_marks": 20,
                        "total_marks_per_question": 2,
                        "is_active": true,
                        "createdAt": "2024-09-29T08:24:22.404Z",
                        "isSingleAttempt": false,
                        "deletedAt": false,
                        "is_deleted": false,
                        "total_attended": 7,
                        "highest_score": 10,
                        "unique_students": 1,
                        "exam_id": "evgL5EIc"
                    },
                    {
                        "title": "Abacus Assessment level 2",
                        "duration": 120,
                        "level": "2",
                        "total_questions": 10,
                        "total_marks": 20,
                        "total_marks_per_question": 2,
                        "is_active": true,
                        "createdAt": "2024-09-29T08:31:42.127Z",
                        "isSingleAttempt": true,
                        "deletedAt": null,
                        "is_deleted": false,
                        "total_attended": 2,
                        "highest_score": 18,
                        "unique_students": 1,
                        "exam_id": "enw1Seqt"
                    }
                ],
                "statusCode": 200,
                "success": true
            },
            "student": {
                "data": [
                    {
                        "title": "Daily Abacus practice",
                        "duration": 120,
                        "level": "2",
                        "total_questions": 10,
                        "total_marks": 20,
                        "total_marks_per_question": 2,
                        "is_active": true,
                        "created_by": {
                            "fullname": "Ankit Ravsaheb Borude"
                        },
                        "createdAt": "2024-09-29T08:24:22.404Z",
                        "isSingleAttempt": false,
                        "is_deleted": false,
                        "exam_id": "evgL5EIc",
                        "totalAttempted": 0
                    },
                    {
                        "title": "Abacus Assessment level 2",
                        "duration": 120,
                        "level": "2",
                        "total_questions": 10,
                        "total_marks": 20,
                        "total_marks_per_question": 2,
                        "is_active": true,
                        "created_by": {
                            "fullname": "Ankit Ravsaheb Borude"
                        },
                        "createdAt": "2024-09-29T08:31:42.127Z",
                        "isSingleAttempt": true,
                        "deletedAt": null,
                        "is_deleted": false,
                        "exam_id": "enw1Seqt",
                        "hasAttempted": {
                            "attempted": true,
                            "attempt_date": "2025-01-05T04:34:22.197Z"
                        },
                        "totalAttempted": 2
                    }
                ],
                "statusCode": 200,
                "success": true
            }
        },
        "successCodes": [
            {
                "code": 200,
                "type": "OK",
                "description": "Exams retrieved successfully."
            }
        ],
        "errorCodes": [
            {
                "code": 404,
                "type": "Not Found",
                "description": "No exams found matching the criteria."
            },
            {
                "code": 400,
                "type": "Bad Request",
                "description": "Validation error in query parameters."
            },
            {
                "code": 401,
                "type": "Unauthorized",
                "description": "No token provided or invalid token."
            }
        ]
    },
    {
        "url": "/api/v1/exam/{examId}/results",
        "method": "GET",
        "description": "Retrieve all results for a specific exam. Students can access their own results, while admins can access results for exams they own.",
        "pathParams": [
            {
                "name": "examId",
                "type": "string",
                "required": true,
                "description": "The unique identifier of the exam to fetch results for."
            }
        ],
        "headerParams": [
            {
                "name": "Authorization",
                "type": "string",
                "required": true,
                "description": "Bearer token for authentication (student or admin)."
            }
        ],
        "requestBody": null,
        "responseBody": {
            "student": {
                "data": [
                    {
                        "score": 5,
                        "time_taken": 10,
                        "total_correct": 3,
                        "date_completed": "2024-10-20T09:15:31.123Z",
                        "result_id": "res12345"
                    },
                    {
                        "score": 7,
                        "time_taken": 15,
                        "total_correct": 4,
                        "date_completed": "2024-10-22T11:45:20.456Z",
                        "result_id": "res67890"
                    }
                ],
                "statusCode": 200,
                "success": true
            },
            "admin": {
                "data": [
                    {
                        "score": 5,
                        "time_taken": 10,
                        "total_correct": 3,
                        "date_completed": "2024-10-20T09:15:31.123Z",
                        "student": {
                            "fullname": "John Doe",
                            "email": "johndoe@example.com",
                            "level": "3",
                            "sclass": "6",
                            "phone_no": "9876543210",
                            "deletedAt": null,
                            "is_deleted": false,
                            "student_id": "stu12345"
                        },
                        "result_id": "res12345"
                    },
                    {
                        "score": 7,
                        "time_taken": 15,
                        "total_correct": 4,
                        "date_completed": "2024-10-22T11:45:20.456Z",
                        "student": {
                            "fullname": "Jane Smith",
                            "email": "janesmith@example.com",
                            "level": "3",
                            "sclass": "6",
                            "phone_no": "9123456789",
                            "deletedAt": null,
                            "is_deleted": false,
                            "student_id": "stu67890"
                        },
                        "result_id": "res67890"
                    }
                ],
                "statusCode": 200,
                "success": true
            }
        },
        "successCodes": [
            {
                "code": 200,
                "type": "OK",
                "description": "Results retrieved successfully."
            }
        ],
        "errorCodes": [
            {
                "code": 400,
                "type": "Bad Request",
                "description": "Validation error or invalid examId."
            },
            {
                "code": 404,
                "type": "Not Found",
                "description": "Exam or results not found."
            },
            {
                "code": 403,
                "type": "Forbidden",
                "description": "Admin attempting to access results for an exam they do not own."
            },
            {
                "code": 401,
                "type": "Unauthorized",
                "description": "Invalid or expired token."
            }
        ]
    },
    {
        "url": "/api/v1/exam/{examId}/students",
        "method": "GET",
        "description": "Retrieve the list of students who have attempted the specified exam. Accessible only by the admin who owns the exam.",
        "pathParams": [
            {
                "name": "examId",
                "type": "string",
                "required": true,
                "description": "The unique identifier of the exam."
            }
        ],
        "headerParams": [
            {
                "name": "Authorization",
                "type": "string",
                "required": true,
                "description": "Bearer token for admin authentication."
            }
        ],
        "requestBody": null,
        "responseBody": {
            "data": [
                {
                    "student_id": "stu12345",
                    "fullname": "John Doe",
                    "email": "johndoe@example.com",
                    "level": "3",
                    "sclass": "6",
                    "phone_no": "9876543210",
                    "is_deleted": false,
                    "deletedAt": null
                },
                {
                    "student_id": "stu67890",
                    "fullname": "Jane Smith",
                    "email": "janesmith@example.com",
                    "level": "4",
                    "sclass": "7",
                    "phone_no": "9123456789",
                    "is_deleted": false,
                    "deletedAt": null
                }
            ],
            "statusCode": 200,
            "success": true
        },
        "successCodes": [
            {
                "code": 200,
                "type": "OK",
                "description": "List of students retrieved successfully."
            }
        ],
        "errorCodes": [
            {
                "code": 400,
                "type": "Bad Request",
                "description": "Validation error or invalid examId."
            },
            {
                "code": 404,
                "type": "Not Found",
                "description": "Exam not found or no students have attempted the exam."
            },
            {
                "code": 403,
                "type": "Forbidden",
                "description": "Admin attempting to access an exam they do not own."
            },
            {
                "code": 401,
                "type": "Unauthorized",
                "description": "Invalid or expired token."
            }
        ]
    },
    {
        "url": "/exam/{examId}/students/{studentId}/results",
        "method": "GET",
        "description": "Retrieve the raw results of a specific exam for a particular student. Accessible only by the admin who owns the exam.",
        "pathParams": [
            {
                "name": "examId",
                "type": "string",
                "required": true,
                "description": "The unique identifier of the exam."
            },
            {
                "name": "studentId",
                "type": "string",
                "required": true,
                "description": "The unique identifier of the student."
            }
        ],
        "headerParams": [
            {
                "name": "Authorization",
                "type": "string",
                "required": true,
                "description": "Bearer token for authentication."
            }
        ],
        "requestBody": null,
        "responseBody": {
            "data": [
                {
                    "score": 8,
                    "time_taken": 5,
                    "total_correct": 4,
                    "date_completed": "2025-01-03T10:15:31.000Z",
                    "result_id": "res45678"
                },
                {
                    "score": 6,
                    "time_taken": 7,
                    "total_correct": 3,
                    "date_completed": "2025-01-02T14:25:20.000Z",
                    "result_id": "res12345"
                }
            ],
            "statusCode": 200,
            "success": true
        },
        "successCodes": [
            {
                "code": 200,
                "type": "OK",
                "description": "Results retrieved successfully."
            }
        ],
        "errorCodes": [
            {
                "code": 400,
                "type": "Bad Request",
                "description": "Validation error or invalid examId/studentId."
            },
            {
                "code": 404,
                "type": "Not Found",
                "description": "Exam or results not found for the specified examId and studentId."
            },
            {
                "code": 403,
                "type": "Forbidden",
                "description": "Admin attempting to access results of an exam they do not own."
            },
            {
                "code": 401,
                "type": "Unauthorized",
                "description": "Invalid or expired token."
            }
        ]
    },
    {
        "url": "/api/v1/exam/practice/{examId}/analytics",
        "method": "GET",
        "description": "Retrieve analytics for a specific practice exam owned by the admin.",
        "pathParams": [
            {
                "name": "examId",
                "type": "string",
                "required": true,
                "description": "The unique identifier of the exam to fetch analytics for."
            }
        ],
        "headerParams": [
            {
                "name": "Authorization",
                "type": "string",
                "required": true,
                "description": "Bearer token for authentication (admin only)."
            }
        ],
        "requestBody": null,
        "responseBody": {
            "data": {
                "exam": {
                    "title": "Math Practice Test",
                    "level": "3",
                    "totalMarks": 25,
                    "duration": 90
                },
                "analytics": {
                    "students": [
                        {
                            "studentName": "John Doe",
                            "totalAttempts": 2,
                            "maxPercentage": 75,
                            "score": {
                                "min": 15,
                                "max": 20,
                                "avg": 17.5
                            },
                            "duration": {
                                "min": 80,
                                "max": 90,
                                "avg": 85
                            }
                        }
                    ],
                    "avgScorePercentage": 70,
                    "avgTimeUtilizationPercentage": 94.44,
                    "totalEligibleStudents": 10,
                    "totalStudentsAttempted": 3,
                    "overallScore": {
                        "min": 15,
                        "max": 20,
                        "avg": 17
                    },
                    "overallDuration": {
                        "min": 80,
                        "max": 90,
                        "avg": 85
                    },
                    "overallAttempts": {
                        "min": 2,
                        "max": 2,
                        "avg": 2
                    }
                },
                "starstudent": {
                    "scorePercentage": 75,
                    "studentName": "Jane Smith",
                    "student_id": "std45xYZ",
                    "timeTaken": 80
                }
            },
            "statusCode": 200,
            "success": true
        },
        "successCodes": [
            {
                "code": 200,
                "type": "OK",
                "description": "Analytics retrieved successfully."
            }
        ],
        "errorCodes": [
            {
                "code": 400,
                "type": "Bad Request",
                "description": "Invalid or missing examId."
            },
            {
                "code": 404,
                "type": "Not Found",
                "description": "Exam not found or deleted."
            },
            {
                "code": 403,
                "type": "Forbidden",
                "description": "Admin does not own the exam or student token provided."
            }
        ]
    },
    {
        "url": "/api/v1/exam/assessment/{examId}/analytics",
        "method": "GET",
        "description": "Retrieve analytics for a specific assessment exam owned by the admin.",
        "pathParams": [
            {
                "name": "examId",
                "type": "string",
                "required": true,
                "description": "The unique identifier of the assessment exam to fetch analytics for."
            }
        ],
        "headerParams": [
            {
                "name": "Authorization",
                "type": "string",
                "required": true,
                "description": "Bearer token for authentication (admin only)."
            }
        ],
        "requestBody": null,
        "responseBody": {
            "data": {
                "exam": {
                    "title": "Math Assessment Level 3",
                    "level": "3",
                    "totalMarks": 25,
                    "duration": 90
                },
                "analytics": {
                    "students": [
                        {
                            "studentName": "John Doe",
                            "studentId": "std12345",
                            "score": 20,
                            "duration": 75,
                            "scorePercentage": 80
                        },
                        {
                            "studentName": "Jane Smith",
                            "studentId": "std67890",
                            "score": 22,
                            "duration": 60,
                            "scorePercentage": 88
                        }
                    ],
                    "avgTimeUtilizationPercentage": 72.22,
                    "totalEligibleStudents": 10,
                    "totalStudentsAttempted": 2,
                    "overallScore": {
                        "min": 20,
                        "max": 22,
                        "avg": 21
                    },
                    "overallDuration": {
                        "min": 60,
                        "max": 75,
                        "avg": 67.5
                    },
                    "avgScorePercentage": 84,
                    "starStudent": {
                        "studentName": "Jane Smith",
                        "studentId": "std67890",
                        "score": 22,
                        "duration": 60,
                        "scorePercentage": 88
                    }
                }
            },
            "statusCode": 200,
            "success": true
        },
        "successCodes": [
            {
                "code": 200,
                "type": "OK",
                "description": "Analytics retrieved successfully."
            }
        ],
        "errorCodes": [
            {
                "code": 400,
                "type": "Bad Request",
                "description": "Invalid examId or exam belongs to practice exams."
            },
            {
                "code": 404,
                "type": "Not Found",
                "description": "Exam not found or deleted."
            },
            {
                "code": 403,
                "type": "Forbidden",
                "description": "Admin does not own the exam or student token provided."
            }
        ]
    },
    {
        "url": "/api/v1/exam/{examId}",
        "method": "PATCH",
        "description": "Update the details of an exam owned by the admin. Only specific exam-related attributes can be updated.",
        "pathParams": [
            {
                "name": "examId",
                "type": "string",
                "required": true,
                "description": "The unique identifier of the exam to be updated."
            }
        ],
        "headerParams": [
            {
                "name": "Authorization",
                "type": "string",
                "required": true,
                "description": "Bearer token for authentication."
            }
        ],
        "requestBody": {
                "title": "updatedName",
                "level": 4
        },
        "responseBody": {
            "data": "Exam title, level attributes has been updated Successfully",
            "statusCode": 200,
            "success": true
        },
        "successCodes": [
            {
                "code": 200,
                "type": "OK",
                "description": "The exam details have been successfully updated."
            }
        ],
        "errorCodes": [
            {
                "code": 400,
                "type": "Bad Request",
                "description": "Invalid examId or validation error in the request body."
            },
            {
                "code": 404,
                "type": "Not Found",
                "description": "The specified exam does not exist."
            },
            {
                "code": 403,
                "type": "Forbidden",
                "description": "Admin attempting to update an exam they do not own."
            }
        ]
    },
    {
        "url": "/api/v1/exam/{examId}/results",
        "method": "DELETE",
        "description": "Delete the results of an exam based on the examId. Both admin and student can delete results, but admins can only delete results of exams they own. Admin can also delete all results of an exam if they have ownership of it.",
        "pathParams": [
            {
                "name": "examId",
                "type": "string",
                "required": true,
                "description": "The unique identifier of the exam whose results are to be deleted."
            }
        ],
        "headerParams": [
            {
                "name": "Authorization",
                "type": "string",
                "required": true,
                "description": "Bearer token for authentication."
            }
        ],
        "requestBody": null,
        "responseBody": {
            "data": "Successfully deleted 7 results",
            "statusCode": 200,
            "success": true
        },
        "successCodes": [
            {
                "code": 200,
                "type": "OK",
                "description": "The results have been successfully deleted."
            }
        ],
        "errorCodes": [
            {
                "code": 400,
                "type": "Bad Request",
                "description": "Invalid examId or validation error."
            },
            {
                "code": 403,
                "type": "Forbidden",
                "description": "Admin attempting to delete results of an exam that they do not own."
            },
            {
                "code": 401,
                "type": "Unauthorized",
                "description": "Invalid or expired token."
            }
        ]
    },
    {
        "url": "/api/v1/exam/{examId}",
        "method": "DELETE",
        "description": "Delete an exam based on the examId. The exam will be soft deleted if there are results associated with it. If no results exist, it will be completely removed from the system. Accessible only by the admin who owns the exam.",
        "pathParams": [
            {
                "name": "examId",
                "type": "string",
                "required": true,
                "description": "The unique identifier of the exam to be deleted."
            }
        ],
        "headerParams": [
            {
                "name": "Authorization",
                "type": "string",
                "required": true,
                "description": "Bearer token for authentication."
            }
        ],
        "requestBody": null,
        "responseBody": {
            "data": "Exam deleted Successfully",
            "statusCode": 200,
            "success": true
        },
        "successCodes": [
            {
                "code": 200,
                "type": "OK",
                "description": "The exam has been deleted successfully."
            }
        ],
        "errorCodes": [
            {
                "code": 400,
                "type": "Bad Request",
                "description": "Invalid examId or validation error."
            },
            {
                "code": 403,
                "type": "Forbidden",
                "description": "Admin attempting to delete an exam that they do not own."
            },
            {
                "code": 401,
                "type": "Unauthorized",
                "description": "Invalid or expired token."
            }
        ]
    },
    //questions
    {
        "url": "/api/v1/exam/{examId}/questions",
        "method": "GET",
        "description": "Retrieve questions for a specific exam. Admins can access questions for their owned exams, and students can access questions for exams with matching levels if the exam is active.",
        "pathParams": [
            {
                "name": "examId",
                "type": "string",
                "required": true,
                "description": "The unique identifier of the exam to fetch questions for."
            }
        ],
        "headerParams": [
            {
                "name": "Authorization",
                "type": "string",
                "required": true,
                "description": "Bearer token for authentication (student or admin)."
            }
        ],
        "requestBody": null,
        "responseBody": {
                "data": [
                    {
                        "question": "149/7+150",
                        "answer": 171,
                        "marks": 2,
                        "option_a": 171,
                        "option_b": 136,
                        "option_c": 211,
                        "option_d": 111
                    },
                    {
                        "question": "66/107+17+46",
                        "answer": 63,
                        "marks": 2,
                        "option_a": 61,
                        "option_b": 63,
                        "option_c": 62,
                        "option_d": 47
                    }
                ],
                "statusCode": 200,
                "success": true
        },
        "successCodes": [
            {
                "code": 200,
                "type": "OK",
                "description": "Questions retrieved successfully."
            }
        ],
        "errorCodes": [
            {
                "code": 400,
                "type": "Bad Request",
                "description": "Invalid examId or the exam is inactive for students."
            },
            {
                "code": 404,
                "type": "Not Found",
                "description": "The specified exam does not exist."
            },
            {
                "code": 403,
                "type": "Forbidden",
                "description": "Admin attempting to access questions for an exam they do not own, or student accessing questions for an exam with a mismatched level."
            },
            {
                "code": 401,
                "type": "Unauthorized",
                "description": "Invalid or expired token."
            }
        ]
    },
    {
        "url": "/api/v1/exam/{examId}/questions",
        "method": "PATCH",
        "description": "Generate questions for a specific exam. This endpoint allows an admin to generate questions for an exam they own.",
        "pathParams": [
            {
                "name": "examId",
                "type": "string",
                "required": true,
                "description": "The unique identifier of the exam to generate questions for."
            }
        ],
        "headerParams": [
            {
                "name": "Authorization",
                "type": "string",
                "required": true,
                "description": "Bearer token for authentication (admin only)."
            }
        ],
        "requestBody": {
            "maxTerms":"2",
            "total_questions":"10",
            "operators": ["+","-"],
            "maxNumber":"20",
            "minNumber":"10",
            "total_marks_per_question":"2"
        },
        "responseBody": {
            "data": "Questions has been generated successfully",
            "statusCode": 200,
            "success": true
        },
        "successCodes": [
            {
                "code": 200,
                "type": "OK",
                "description": "Questions generated successfully."
            }
        ],
        "errorCodes": [
            {
                "code": 400,
                "type": "Bad Request",
                "description": "Invalid examId or validation error in the request body."
            },
            {
                "code": 404,
                "type": "Not Found",
                "description": "The specified exam does not exist."
            },
            {
                "code": 403,
                "type": "Forbidden",
                "description": "Students are not authorized to generate questions."
            }
        ]
    },
    //result
    {
        "url": "/api/v1/result",
        "method": "POST",
        "description": "Submit a result for a specific exam. This endpoint is only accessible to students and allows them to submit their exam results to the system.",
        "pathParams": [],
        "queryParams": [],
        "headerParams": [
            {
                "name": "Authorization",
                "type": "string",
                "required": true,
                "description": "Bearer token for authentication (student only)."
            },
            {
                "name": "Content-Type",
                "type": "string",
                "required": true,
                "description": "Must be application/json"
            }
        ],
        "requestBody": {
            "score": 18,
            "exam": "enw1Seqt",//exam Id
            "date_completed": "2025-01-03T12:00:00Z",
            "total_correct": 9,
            "time_taken": 70
        },
        "responseBody": {
            "data": "Result created Successfully",
            "statusCode": 200,
            "success": true
        },
        "successCodes": [
            {
                "code": 200,
                "type": "OK",
                "description": "Result submitted successfully."
            }
        ],
        "errorCodes": [
            {
                "code": 400,
                "type": "Bad Request",
                "description": "Request body validation failed, numerical data does not match the exam data, or the exam is inactive, or the student's level does not match the exam's level."
            },
            {
                "code": 403,
                "type": "Forbidden",
                "description": "Admin users are not allowed to create results explicitly."
            },
            {
                "code": 404,
                "type": "Not Found",
                "description": "The specified exam or student does not exist."
            },
            {
                "code": 409,
                "type": "Conflict",
                "description": "A result already exists for the given student for the specified assessment exam."
            }
        ]
    },
    {
        "url": "/api/v1/result/{resultId}",
        "method": "GET",
        "description": "Retrieve a specific result. Admins can access any result, while students can access only their own results. Optionally, results can be returned as a PDF.",
        "pathParams": [
            {
                "name": "resultId",
                "type": "string",
                "required": true,
                "description": "The unique identifier of the result to retrieve."
            }
        ],
        "queryParams": [
            {
                "name": "format",
                "type": "string",
                "required": false,
                "description": "The format in which to retrieve the result. If 'pdf' is specified, the result is returned as a PDF file."
            }
        ],
        "headerParams": [
            {
                "name": "Authorization",
                "type": "string",
                "required": true,
                "description": "Bearer token for authentication (student or admin)."
            }
        ],
        "requestBody": null,
        "responseBody": {
            "data": {
                "score": 3,
                "time_taken": 2,
                "total_correct": 2,
                "date_completed": "2024-10-15T10:00:00.123Z",
                "student": {
                    "fullname": "John Doe",
                    "email": "johndoe@example.com",
                    "level": "3",
                    "sclass": "6",
                    "phone_no": "9876543210"
                },
                "exam": {
                    "title": "Abacus Practice Test",
                    "duration": 90,
                    "level": "3",
                    "total_questions": 15,
                    "total_marks": 30,
                    "total_marks_per_question": 2
                },
                "createdAt": "2024-10-15T10:00:01.456Z",
                "result_id": "res12345"
            },
            "statusCode": 200,
            "success": true
        },
        "successCodes": [
            {
                "code": 200,
                "type": "OK",
                "description": "Result retrieved successfully."
            }
        ],
        "errorCodes": [
            {
                "code": 400,
                "type": "Bad Request",
                "description": "Invalid resultId."
            },
            {
                "code": 404,
                "type": "Not Found",
                "description": "Result not found."
            },
            {
                "code": 400,
                "type": "Bad Request",
                "description": "Invalid format value. Allowed value is 'pdf'."
            }
        ]
    },
    {
        "url": "/api/v1/result/{resultId}",
        "method": "DELETE",
        "description": "Delete a specific result. Admins can delete any result, while students can delete only their own results.",
        "pathParams": [
            {
                "name": "resultId",
                "type": "string",
                "required": true,
                "description": "The unique identifier of the result to delete."
            }
        ],
        "headerParams": [
            {
                "name": "Authorization",
                "type": "string",
                "required": true,
                "description": "Bearer token for authentication (student or admin)."
            }
        ],
        "requestBody": null,
        "responseBody": {
            "data": "Result Deleted Successfully",
            "statusCode": 200,
            "success": true
        },
        "successCodes": [
            {
                "code": 200,
                "type": "OK",
                "description": "Result deleted successfully."
            }
        ],
        "errorCodes": [
            {
                "code": 400,
                "type": "Bad Request",
                "description": "Invalid resultId."
            },
            {
                "code": 404,
                "type": "Not Found",
                "description": "Result not found."
            },
            {
                "code": 403,
                "type": "Forbidden",
                "description": "Student attempting to delete a result they do not own."
            }
        ]
    },
    //health
    {
        "url": "/health",
        "method": "GET",
        "description": "Check the health status of the server and its dependencies.",
        "pathParams": [],
        "queryParams": [],
        "headerParams": [],
        "requestBody": null,
        "responseBody": {
            "status": "healthy",
            "timestamp": "2025-01-09T12:10:49.286Z",
            "uptime": 384.183581323,
            "version": "1.0.0",
            "database": {
                "health": "healthy",
                "status": "connected",
                "responseTime": 2
            }
        },
        "successCodes": [
            {
                "code": 200,
                "type": "OK",
                "description": "Server health status retrieved successfully."
            }
        ],
        "errorCodes": [
            {
                "code": 500,
                "type": "Internal Server Error",
                "description": "An error occurred while retrieving the health status."
            }
        ]
    }
]