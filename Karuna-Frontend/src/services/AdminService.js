import axios from 'axios';

const baseUrl = 'http://localhost:8080/admin';

const AdminService = {
  login: (loginDto) => {
    return axios.post(`${baseUrl}/login`, loginDto);
  },

  logout: (staffId) => {
    return axios.post(`${baseUrl}/logout/${staffId}`);
  },

  addStaff: (staff) => {
    return axios.post(`${baseUrl}/addStaff`, staff);
  },

  updateStaff: (staff) => {
    return axios.put(`${baseUrl}/updateStaff`, staff);
  },

  deleteStaff: (staffId) => {
    return axios.delete(`${baseUrl}/deleteStaff/${staffId}`);
  },

  viewStaffs: () => {
    return axios.get(`${baseUrl}/viewStaffs`);
  },
};

export default AdminService;
