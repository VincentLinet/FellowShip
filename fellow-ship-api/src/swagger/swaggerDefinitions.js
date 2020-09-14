/**
 * @swagger
 * tags:
 *   - name: Register
 *     description: Register
 *   - name: Users
 *     description: User management
 */

/**
 * @swagger
 *    definitions:
 *      User:
 *        type: object
 *        required:
 *          - email
 *          - password
 *          - username
 *          - lastname
 *          - firstname
 *          - dateOfBirth
 *          - gender
 *          - picture
 *          - description
 *        properties:
 *          email:
 *            type: string
 *            format: email
 *            description: Email for the user, needs to be unique.
 *          password:
 *            type: string
 *            format: password
 *          username:
 *            type: string
 *          lastname:
 *            type: string
 *          firstname:
 *            type: string
 *          dateOfBirth:
 *            type: string
 *            format: date-time
 *          gender:
 *            type: number
 *          picture:
 *            type: string
 *          description:
 *            type: string
 *        example:
 *           email: ned.stark@winter-is-comming.com
 *           password: nedStarkShortNeck
 *           username: NedStark
 *           lastname: Stark
 *           firstname: Eddard
 *           dateOfBirth: 10/02/1995
 *           gender: 1
 *           picture: ""
 *           description: When the snows fall and the white winds blow, the lone wolf dies, but the pack survives.
 *      Register:
 *        type: object
 *        required:
 *          - email
 *          - password
 *        properties:
 *          password:
 *            type: string
 *            format: password
 *          email:
 *            type: string
 *            format: email
 *            description: Email for the user, needs to be unique.
 *        example:
 *           email: ned.stark@winter-is-comming.com
 *           password: NedStarkShortOfNeck
 *      NewUser:
 *        type: object
 *        required:
 *          - email
 *          - password
 *          - repeat_password
 *          - username
 *          - lastname
 *          - firstname
 *        properties:
 *          email:
 *            type: string
 *            format: email
 *            description: Email for the user, needs to be unique.
 *          password:
 *            type: string
 *            format: password
 *          username:
 *            type: string
 *          lastname:
 *            type: string
 *          firstname:
 *            type: string
 *          dateOfBirth:
 *            type: string
 *            format: date-time
 *          gender:
 *            type: number
 *          picture:
 *            type: string
 *          description:
 *            type: string
 *        example:
 *           email: ned.stark@winter-is-comming.com
 *           password: nedStarkShortNeck
 *           username: NedStark
 *           lastname: Stark
 *           firstname: Eddard
 *           dateOfBirth: 10/02/1995
 *           gender: 1
 *           picture: ""
 *           description: When the snows fall and the white winds blow, the lone wolf dies, but the pack survives.
 */
