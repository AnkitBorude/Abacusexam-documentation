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
        "url": "/admin/register",
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
        "url": "/admin/token",
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
        "url": "/admin",
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
        "url": "/admin",
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
    }
    //exam
]