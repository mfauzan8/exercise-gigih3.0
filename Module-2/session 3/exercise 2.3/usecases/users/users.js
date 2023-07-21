import { getUserByIDRepo } from "../../repositories/users/users.js";

export const getUserByIDUsecase = (id) => {
    return getUserByIDRepo(id);
}