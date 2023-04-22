import { Mentor } from "../models/mentors.model.js";

const createMentor = async (mentorData) => {
  return Mentor.create(mentorData);
};

const getMentors = (filters) => {
  return Mentor.find(filters);
};

const getMentorById = (id) => {
  return Mentor.findById(id);
};

const updateMentorById = (id, mentorData, options = {}) => {
  return Mentor.findByIdAndUpdate(id, mentorData, { new: true, ...options });
};

const deleteMentor = (id) => {
  return Mentor.findByIdAndDelete(id);
};

export {
  createMentor,
  getMentors,
  getMentorById,
  updateMentorById,
  deleteMentor,
};
