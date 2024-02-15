import { API_ERROR_CODE } from "../constantes/errorCodes";
import { API_ERROR_NAME } from "../constantes/errorNames";
import { CustomError } from "./CustomError";

export class ApiError extends CustomError {

    constructor(message: string) {
        super(message, API_ERROR_CODE);
        this.name = API_ERROR_NAME;
    }
}