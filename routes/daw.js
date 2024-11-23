import { createAdmin, getAllAdmin } from "../controllers/admin.js";
import { createUser, roleCheck } from "../controllers/common.js";
import express from "express";

import { getAllStudent, createStudent } from "../controllers/student.js";
import { createTeacher, getAllTeacher } from "../controllers/teacher.js";
import { createSubject, getAllSubject } from "../controllers/subject.js";
import { isAdmin, isAdminTeacher, isTeacher } from "../middleware/auth.js";
import {
  createPractical,
  enrollStudentInPractical,
  getAllPracticals,
} from "../controllers/practical.js";

const router = express.Router();

//Admin
router.post("/CreateAdmin", createAdmin);

router.get("/getAllADMIN", getAllAdmin);

router.post("/CreateSubject", isAdmin, createSubject);
router.get("/getAllSUBJECT", getAllSubject);

//Student
router.post("/createStudent", createStudent);

router.get("/getAllSTUDENT", getAllStudent, isAdminTeacher);

//teacher
router.post("/createTeacher", createTeacher);
router.get("/getTEACHER", getAllTeacher);

//common
router.get("/RoleCheck", roleCheck);
router.post("/RreateUser", createUser);

//Pratical
router.post("/CreatePractical", createPractical, isTeacher);
router.get("/Practicals/get", getAllPracticals);
router.post("/Practicals/enroll", enrollStudentInPractical);

export default router;
