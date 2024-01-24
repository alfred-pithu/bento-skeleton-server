import { LoginDataInterface } from "../interfaces/LoginDataInterface";

export function validateLoginData(data: LoginDataInterface): boolean {
  if (typeof data === "object" && typeof data.email === "string" && typeof data.password === "string") {
    return true;
  } else {
    return false;
  }
}
